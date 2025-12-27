import express from 'express';
import Blog from '../models/Blog.js';
import { requireAuth } from '../middleware/auth.js';
import { isUploadPath, removeUpload, saveBase64Image } from '../utils/uploads.js';

const router = express.Router();

router.use(requireAuth);

router.get('/', async (req, res, next) => {
  try {
    const items = await Blog.find().sort({ createdAt: -1 }).lean();
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
      ? await saveBase64Image(payload.imageData, payload.filename || payload.title || 'blog')
      : payload.image;

    if (!payload.title || !image) {
      return res.status(400).json({ error: 'Title and image are required' });
    }

    const item = await Blog.create({
      title: payload.title,
      author: payload.author || 'RRC Editorial',
      read: payload.read || '3 minute read',
      excerpt: payload.excerpt || '',
      content: payload.content || '',
      image,
      featured: Boolean(payload.featured),
      published: payload.published !== false,
      publishedAt: payload.publishedAt || (payload.published !== false ? now : undefined),
    });

    if (item.featured) {
      await Blog.updateMany({ _id: { $ne: item._id } }, { $set: { featured: false } });
    }

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

    const existing = await Blog.findById(id);
    if (!existing) {
      return res.status(404).json({ error: 'Not found' });
    }

    let nextImage = updates.image;
    if (updates.imageData) {
      nextImage = await saveBase64Image(updates.imageData, updates.filename || updates.title || 'blog');
    }

    if (typeof updates.published !== 'undefined' && updates.published && !updates.publishedAt) {
      updates.publishedAt = new Date();
    }

    const nextItem = await Blog.findByIdAndUpdate(
      id,
      {
        ...updates,
        ...(nextImage ? { image: nextImage } : {}),
      },
      { new: true }
    );

    if (updates.featured) {
      await Blog.updateMany({ _id: { $ne: nextItem._id } }, { $set: { featured: false } });
    }

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
    const existing = await Blog.findByIdAndDelete(id);
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
