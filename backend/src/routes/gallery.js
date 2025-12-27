import express from 'express';
import GalleryItem from '../models/GalleryItem.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await GalleryItem.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json({ items });
  } catch (error) {
    return next(error);
  }
});

export default router;
