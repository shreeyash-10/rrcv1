import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDb } from '../config/db.js';
import Blog from '../models/Blog.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedFile = path.join(__dirname, 'blogs.json');
const shouldForce = process.argv.includes('--force');

const loadSeed = async () => {
  const raw = await fs.readFile(seedFile, 'utf8');
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) {
    throw new Error('Seed file must be an array');
  }
  return data;
};

const normalize = (item) => {
  const published = item.published !== false;
  return {
    title: item.title,
    author: item.author || 'RRC Editorial',
    read: item.read || '3 minute read',
    excerpt: item.excerpt || '',
    content: item.content || '',
    image: item.image,
    featured: Boolean(item.featured),
    published,
    publishedAt: item.publishedAt ? new Date(item.publishedAt) : published ? new Date() : undefined,
  };
};

const seed = async () => {
  await connectDb();
  const existing = await Blog.countDocuments();
  if (existing && !shouldForce) {
    // eslint-disable-next-line no-console
    console.log('Blogs already exist. Use --force to reseed.');
    process.exit(0);
  }
  if (shouldForce) {
    await Blog.deleteMany({});
  }
  const data = await loadSeed();
  const items = data.map(normalize);
  if (items.filter((item) => item.featured).length > 1) {
    items.forEach((item, index) => {
      item.featured = index === 0;
    });
  }
  await Blog.insertMany(items);
  // eslint-disable-next-line no-console
  console.log(`Seeded ${items.length} blog(s).`);
  process.exit(0);
};

seed().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
