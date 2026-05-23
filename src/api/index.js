import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getStoriesFeed } from '../pipeline/store.js';
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Brewburg API running on port ${PORT}`);
});