export const sources = [
  { name: 'Economic Times Markets', url: 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms', category: 'Markets' },
  { name: 'Economic Times Startups', url: 'https://economictimes.indiatimes.com/small-biz/startups/rssfeeds/13357270.cms', category: 'Funding' },
  { name: 'Economic Times Tech', url: 'https://economictimes.indiatimes.com/tech/rssfeeds/13357270.cms', category: 'Funding' },
  { name: 'Inc42', url: 'https://inc42.com/feed/', category: 'Funding' },
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/', category: 'Funding' },
  { name: 'Mint Markets', url: 'https://www.livemint.com/rss/markets', category: 'Markets' },
  { name: 'Mint Companies', url: 'https://www.livemint.com/rss/companies', category: 'M&A' },
  { name: 'Financial Express', url: 'https://www.financialexpress.com/feed/', category: 'Markets' },
  { name: 'Business Standard', url: 'https://www.business-standard.com/rss/latest.rss', category: 'Markets' },
  { name: 'YourStory', url: 'https://yourstory.com/feed', category: 'Funding' },
];

export const keywords = {
  IPO: ['ipo', 'initial public offering', 'listing', 'sebi filing', 'drhp', 'public offer', 'stock market debut', 'mainboard', 'sme ipo'],
  Funding: ['funding', 'raises', 'series a', 'series b', 'series c', 'seed round', 'investment', 'venture', 'raised', 'crore funding', 'million funding', 'backed by'],
  'M&A': ['acquisition', 'merger', 'acquires', 'buyout', 'takeover', 'acquired', 'bought', 'purchase stake', 'strategic investment', 'majority stake', 'merge', 'consolidat'],
  Markets: ['nifty', 'sensex', 'stock', 'shares', 'market', 'equity', 'bse', 'nse', 'rally', 'crash', 'bull', 'bear', 'trade', 'rupee', 'gdp'],
  Geopolitics: ['tariff', 'sanctions', 'trade war', 'border', 'export ban', 'geopolit', 'china', 'us-india', 'iran', 'israel', 'war', 'diplomatic', 'bilateral'],
  Policy: ['rbi', 'sebi', 'government', 'regulation', 'budget', 'policy', 'ministry', 'gst', 'tax', 'law', 'bill passed', 'scheme', 'subsidy'],
  'Market Gap': ['opportunity', 'untapped', 'gap in market', 'whitespace', 'underserved', 'unorganised', 'fragmented', 'no player', 'first in india', 'disrupting', 'problem statement'],
};