import express from 'express';
import GalleryItem from '../models/GalleryItem.js';
import { requireAuth } from '../middleware/auth.js';
import { isUploadPath, removeUpload, saveBase64Image } from '../utils/uploads.js';

const router = express.Router();

router.use(requireAuth);

router.get('/', async (req, res, next) => {
  try {
    const items = await GalleryItem.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json({ items });
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const payload = req.body || {};
    const url = payload.imageData
      ? await saveBase64Image(payload.imageData, payload.filename || payload.title || 'gallery')
      : payload.url || payload.image;

    if (!url) {
      return res.status(400).json({ error: 'Image is required' });
    }

    const item = await GalleryItem.create({
      title: payload.title || 'Gallery item',
      alt: payload.alt || payload.title || 'Gallery item',
      url,
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

    const existing = await GalleryItem.findById(id);
    if (!existing) {
      return res.status(404).json({ error: 'Not found' });
    }

    let nextUrl = updates.url || updates.image;
    if (updates.imageData) {
      nextUrl = await saveBase64Image(updates.imageData, updates.filename || updates.title || 'gallery');
    }

    const nextItem = await GalleryItem.findByIdAndUpdate(
      id,
      {
        ...updates,
        ...(nextUrl ? { url: nextUrl } : {}),
      },
      { new: true }
    );

    if (nextUrl && isUploadPath(existing.url)) {
      await removeUpload(existing.url);
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

    const existing = await GalleryItem.findByIdAndDelete(id);
    if (!existing) {
      return res.status(404).json({ error: 'Not found' });
    }

    if (isUploadPath(existing.url)) {
      await removeUpload(existing.url);
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return next(error);
  }
});

export default router;
