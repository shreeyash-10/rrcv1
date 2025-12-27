import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDb } from '../config/db.js';
import NewsItem from '../models/NewsItem.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const seedFile = path.join(__dirname, 'news.json');
const shouldForce = process.argv.includes('--force');

const loadSeed = async () => {
  const raw = await fs.readFile(seedFile, 'utf8');
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) {
    throw new Error('Seed file must be an array');
  }
  return data;
};

const parseDate = (value) => {
  if (!value) return undefined;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed;
};

const normalize = (item) => ({
  title: item.title || 'Media coverage',
  link: item.link || '#',
  image: item.image,
  excerpt: item.excerpt || '',
  published: item.published !== false,
  publishedAt: parseDate(item.publishedAt) || undefined,
});

const seed = async () => {
  await connectDb();
  const existing = await NewsItem.countDocuments();
  if (existing && !shouldForce) {
    // eslint-disable-next-line no-console
    console.log('News already exists. Use --force to reseed.');
    process.exit(0);
  }
  if (shouldForce) {
    await NewsItem.deleteMany({});
  }
  const data = await loadSeed();
  const items = data.map(normalize);
  await NewsItem.insertMany(items);
  // eslint-disable-next-line no-console
  console.log(`Seeded ${items.length} news item(s).`);
  process.exit(0);
};

seed().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
