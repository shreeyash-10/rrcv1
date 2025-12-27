import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';

const uploadsDir = path.join(process.cwd(), 'uploads');

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

const sanitizeBaseName = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 40) || 'upload';

export const isUploadPath = (value) => typeof value === 'string' && value.startsWith('/uploads/');

export const saveBase64Image = async (dataUrl, filename = 'upload') => {
  if (!dataUrl) throw new Error('Missing image data');
  const match = dataUrl.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.*)$/);
  let base64 = dataUrl;
  let extension = 'png';

  if (match) {
    base64 = match[2];
    extension = match[1].split('/')[1].replace('jpeg', 'jpg');
  } else if (path.extname(filename)) {
    extension = path.extname(filename).slice(1).toLowerCase();
  }

  const safeName = sanitizeBaseName(path.basename(filename, path.extname(filename)));
  const fileName = `${safeName}-${crypto.randomUUID()}.${extension}`;
  const filePath = path.join(uploadsDir, fileName);

  await ensureDir(uploadsDir);
  await fs.writeFile(filePath, Buffer.from(base64, 'base64'));

  return `/uploads/${fileName}`;
};

export const removeUpload = async (url) => {
  if (!isUploadPath(url)) return;
  const filePath = path.join(uploadsDir, url.replace('/uploads/', ''));
  try {
    await fs.unlink(filePath);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
};
