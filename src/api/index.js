import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cron from 'node-cron';
import { getStoriesFeed, cleanOldStories } from '../pipeline/store.js';
import { runPipeline } from '../pipeline/run.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/stories', async (req, res) => {
  try {
    const { category, limit = 20, offset = 0 } = req.query;
    const stories = await getStoriesFeed(category, parseInt(limit), parseInt(offset));
    res.json({ success: true, stories });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/pipeline/trigger', async (req, res) => {
  res.json({ message: 'Pipeline triggered' });
  runPipeline();
});
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'Brewburg', time: new Date() });
});

app.post('/api/pipeline/run', async (req, res) => {
  const { secret } = req.body;
  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json({ message: 'Pipeline started' });
  runPipeline();
});

// 7:30am IST = 2:00 UTC
cron.schedule('0 2 * * *', () => {
  console.log('🌅 Morning pipeline starting...');
  runPipeline();
});

// 7:00pm IST = 13:30 UTC
cron.schedule('30 13 * * *', () => {
  console.log('🌆 Evening pipeline starting...');
  runPipeline();
});

// Auto-delete stories older than 14 days - every Sunday midnight IST
cron.schedule('30 18 * * 0', () => {
  console.log('🗑️ Running auto-cleanup...');
  cleanOldStories();
});

console.log('⏰ Pipeline scheduled: 7:30am and 7:00pm IST daily');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Brewburg API running on port ${PORT}`);
});