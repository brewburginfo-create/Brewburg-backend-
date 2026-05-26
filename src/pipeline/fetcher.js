import Parser from 'rss-parser';
import { sources, keywords } from './sources.js';
const BLOCKLIST = ['janta party', 'supreme court', 'election', 'cbi probe', 'fake advocates', 'PIL', 'political party', 'minister', 'parliament'];

const parser = new Parser();

function detectCategory(title, defaultCategory) {
  const text = title.toLowerCase();
  for (const [category, words] of Object.entries(keywords)) {
    if (words.some(w => text.includes(w))) return category;
  }
  return defaultCategory;
}

export async function fetchAllStories() {
  const allStories = [];

  for (const source of sources) {
    try {
      const feed = await parser.parseURL(source.url);
      const items = feed.items.slice(0, 5);

      for (const item of items) {
       // Extract image from RSS feed
let image = null;
if (item.enclosure?.url) image = item.enclosure.url;
else if (item['media:content']?.$?.url) image = item['media:content'].$.url;
else if (item['media:thumbnail']?.$ ?.url) image = item['media:thumbnail'].$.url;

allStories.push({
  title: item.title,
  url: item.link,
  source: source.name,
  category: detectCategory(item.title, source.category),
  raw_content: item.contentSnippet || item.content || item.title,
  published_at: item.pubDate ? new Date(item.pubDate) : new Date(),
  image_url: image,
});
      }

      console.log(`✅ ${source.name}: ${items.length} stories`);
    } catch (err) {
      console.log(`❌ ${source.name}: ${err.message}`);
    }
  }

  return allStories;
}