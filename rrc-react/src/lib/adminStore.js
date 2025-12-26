/* eslint-env node */
import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
const collectionFiles = {
  gallery: 'gallery.json',
  news: 'news.json',
  blogs: 'blogs.json',
};

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

const readJson = async (filePath, fallback = []) => {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    await ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, JSON.stringify(fallback, null, 2));
    return fallback;
  }
};

const writeJson = async (filePath, data) => {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

export const listCollection = async (name) => {
  const file = collectionFiles[name];
  if (!file) throw new Error(`Unknown collection: ${name}`);
  return readJson(path.join(dataDir, file));
};

export const saveCollection = async (name, items) => {
  const file = collectionFiles[name];
  if (!file) throw new Error(`Unknown collection: ${name}`);
  return writeJson(path.join(dataDir, file), items);
};

export const createId = () => {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const sanitizeBaseName = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 40) || 'upload';

export const saveBase64Image = async (dataUrl, filename = 'upload') => {
  if (!dataUrl) throw new Error('Missing image data');
  const dataUrlMatch = dataUrl.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.*)$/);
  let base64 = dataUrl;
  let extension = 'png';
  if (dataUrlMatch) {
    base64 = dataUrlMatch[2];
    const mime = dataUrlMatch[1];
    extension = mime.split('/')[1].replace('jpeg', 'jpg');
  } else if (path.extname(filename)) {
    extension = path.extname(filename).slice(1).toLowerCase();
  }

  const safeName = sanitizeBaseName(path.basename(filename, path.extname(filename)));
  const fileName = `${safeName}-${Date.now()}.${extension}`;
  const filePath = path.join(uploadsDir, fileName);

  await ensureDir(uploadsDir);
  await fs.writeFile(filePath, Buffer.from(base64, 'base64'));
  return `/uploads/${fileName}`;
};

export const removeUpload = async (url) => {
  if (!url || !url.startsWith('/uploads/')) return;
  const filePath = path.join(uploadsDir, url.replace('/uploads/', ''));
  try {
    await fs.unlink(filePath);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
};
