import express from 'express';
import NewsItem from '../models/NewsItem.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await NewsItem.find({ published: true })
      .sort({ publishedAt: -1, createdAt: -1 })
      .lean();
    return res.status(200).json({ items });
  } catch (error) {
    return next(error);
  }
});

export default router;
