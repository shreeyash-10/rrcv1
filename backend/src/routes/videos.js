import express from 'express';
import Video from '../models/Video.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await Video.find({ published: true }).sort({ createdAt: -1 }).lean();
    return res.status(200).json({ items });
  } catch (error) {
    return next(error);
  }
});

export default router;
