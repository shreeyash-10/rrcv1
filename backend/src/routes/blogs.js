import express from 'express';
import mongoose from 'mongoose';
import Blog from '../models/Blog.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await Blog.find({ published: true })
      .sort({ featured: -1, publishedAt: -1, createdAt: -1 })
      .lean();
    return res.status(200).json({ items });
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Not found' });
    }
    const item = await Blog.findOne({ _id: id, published: true }).lean();
    if (!item) {
      return res.status(404).json({ error: 'Not found' });
    }
    return res.status(200).json({ item });
  } catch (error) {
    return next(error);
  }
});

export default router;
