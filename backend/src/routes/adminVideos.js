import express from 'express';
import Video from '../models/Video.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.use(requireAuth);

router.get('/', async (req, res, next) => {
  try {
    const items = await Video.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json({ items });
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const payload = req.body || {};
    if (!payload.url) {
      return res.status(400).json({ error: 'Video URL is required' });
    }
    const item = await Video.create({
      title: payload.title || 'Video',
      url: payload.url,
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
    const item = await Video.findByIdAndUpdate(id, updates, { new: true });
    if (!item) {
      return res.status(404).json({ error: 'Not found' });
    }
    return res.status(200).json({ item });
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
    const item = await Video.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ error: 'Not found' });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    return next(error);
  }
});

export default router;
