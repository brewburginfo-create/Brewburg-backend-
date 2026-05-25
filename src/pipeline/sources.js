export const sources = [
  { name: 'Economic Times Markets', url: 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms', category: 'Markets' },
  { name: 'Economic Times Startups', url: 'https://economictimes.indiatimes.com/small-biz/startups/rssfeeds/13357270.cms', category: 'Funding' },
  { name: 'Moneycontrol', url: 'https://www.moneycontrol.com/rss/business.xml', category: 'Markets' },
  { name: 'Inc42', url: 'https://inc42.com/feed/', category: 'Funding' },
  { name: 'VCCircle', url: 'https://www.vccircle.com/feed', category: 'Funding' },
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/', category: 'Funding' },
  { name: 'Reuters Business', url: 'https://feeds.reuters.com/reuters/businessNews', category: 'Markets' },
];

export const keywords = {
  IPO: ['ipo', 'initial public offering', 'stock listing', 'sebi filing', 'drhp', 'listed on nse', 'listed on bse'],
  Funding: ['raises $', 'raises rs', 'funding round', 'series a', 'series b', 'series c', 'seed round', 'venture capital', 'angel investment', 'pre-seed'],
  'M&A': ['acquisition', 'acquires', 'merger', 'merges with', 'buyout', 'takeover', 'acquired by'],
  Markets: ['nifty', 'sensex', 'stock market', 'share price', 'equity market', 'bse', 'nse', 'bull run', 'bear market'],
  Geopolitics: ['trade war', 'sanctions', 'export ban', 'border dispute', 'military', 'nato', 'war', 'conflict', 'diplomatic'],
  Policy: ['rbi', 'sebi', 'government policy', 'budget 2025', 'tax reform', 'regulation', 'ministry', 'parliament bill'],
  'Market Gap': ['untapped market', 'whitespace', 'gap in market', 'underserved', 'unorganised sector', 'opportunity worth'],
  AI: ['artificial intelligence', 'machine learning', 'large language model', 'llm', 'generative ai', 'openai', 'anthropic', 'chatgpt', 'deep learning'],
};