import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDb } from '../config/db.js';
import GalleryItem from '../models/GalleryItem.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const seedFile = path.join(__dirname, 'gallery.json');
const shouldForce = process.argv.includes('--force');

const loadSeed = async () => {
  const raw = await fs.readFile(seedFile, 'utf8');
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) {
    throw new Error('Seed file must be an array');
  }
  return data;
};

const normalize = (item) => ({
  title: item.title || 'Gallery item',
  alt: item.alt || item.title || 'Gallery item',
  url: item.url,
});

const seed = async () => {
  await connectDb();
  const existing = await GalleryItem.countDocuments();
  if (existing && !shouldForce) {
    // eslint-disable-next-line no-console
    console.log('Gallery already exists. Use --force to reseed.');
    process.exit(0);
  }
  if (shouldForce) {
    await GalleryItem.deleteMany({});
  }
  const data = await loadSeed();
  const items = data.map(normalize);
  await GalleryItem.insertMany(items);
  // eslint-disable-next-line no-console
  console.log(`Seeded ${items.length} gallery item(s).`);
  process.exit(0);
};

seed().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
