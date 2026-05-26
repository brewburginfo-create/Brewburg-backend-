export const sources = [
  { name: 'Economic Times Markets', url: 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms', category: 'Markets' },
  { name: 'Economic Times Startups', url: 'https://economictimes.indiatimes.com/small-biz/startups/rssfeeds/13357270.cms', category: 'Funding' },
  { name: 'Inc42', url: 'https://inc42.com/feed/', category: 'Funding' },
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/', category: 'Funding' },
];

export const keywords = {
  IPO: ['ipo', 'initial public offering', 'stock listing', 'sebi filing', 'drhp'],
  Funding: ['raises $', 'raises rs', 'funding round', 'series a', 'series b', 'series c', 'seed round', 'venture capital', 'angel investment'],
  'M&A': ['acquisition', 'acquires', 'merger', 'merges with', 'buyout', 'takeover'],
  Markets: ['nifty', 'sensex', 'stock market', 'share price', 'equity', 'bse', 'nse'],
  Geopolitics: ['trade war', 'sanctions', 'export ban', 'border dispute', 'military', 'war', 'conflict'],
  Policy: ['rbi', 'sebi', 'government policy', 'budget', 'regulation', 'ministry'],
  'Market Gap': ['untapped', 'whitespace', 'gap in market', 'underserved', 'unorganised sector'],
  AI: ['artificial intelligence', 'machine learning', 'llm', 'generative ai', 'openai', 'deepseek', 'chatgpt'],
};