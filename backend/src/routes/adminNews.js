import express from 'express';
import NewsItem from '../models/NewsItem.js';
import { requireAuth } from '../middleware/auth.js';
import { isUploadPath, removeUpload, saveBase64Image } from '../utils/uploads.js';

const router = express.Router();

router.use(requireAuth);

router.get('/', async (req, res, next) => {
  try {
    const items = await NewsItem.find().sort({ publishedAt: -1, createdAt: -1 }).lean();
    return res.status(200).json({ items });
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const payload = req.body || {};
    const now = new Date();
    const image = payload.imageData
      ? await saveBase64Image(payload.imageData, payload.filename || payload.title || 'news')
      : payload.image;

    if (!payload.title || !image) {
      return res.status(400).json({ error: 'Title and image are required' });
    }

    const item = await NewsItem.create({
      title: payload.title,
      link: payload.link || '#',
      image,
      excerpt: payload.excerpt || '',
      publishedAt: payload.publishedAt || payload.date || (payload.published !== false ? now : undefined),
      published: payload.published !== false,
    });

    return res.status(201).json({ item });
  } catch (error) {
    return next(error);
  }
});

router.patch('/', async (req, res, next) => {
  try {
    const { id, ...updates } = req.body || {};
    if (!id) {
      return res.status(400).json({ error: 'Missing id' });
    }

    const existing = await NewsItem.findById(id);
    if (!existing) {
      return res.status(404).json({ error: 'Not found' });
    }

    let nextImage = updates.image;
    if (updates.imageData) {
      nextImage = await saveBase64Image(updates.imageData, updates.filename || updates.title || 'news');
    }

    if (typeof updates.published !== 'undefined' && updates.published && !updates.publishedAt) {
      updates.publishedAt = new Date();
    }

    const nextItem = await NewsItem.findByIdAndUpdate(
      id,
      {
        ...updates,
        ...(nextImage ? { image: nextImage } : {}),
      },
      { new: true }
    );

    if (nextImage && isUploadPath(existing.image)) {
      await removeUpload(existing.image);
    }

    return res.status(200).json({ item: nextItem });
  } catch (error) {
    return next(error);
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const { id } = req.body || {};
    if (!id) {
      return res.status(400).json({ error: 'Missing id' });
    }
    const existing = await NewsItem.findByIdAndDelete(id);
    if (!existing) {
      return res.status(404).json({ error: 'Not found' });
    }
    if (isUploadPath(existing.image)) {
      await removeUpload(existing.image);
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    return next(error);
  }
});

export default router;
