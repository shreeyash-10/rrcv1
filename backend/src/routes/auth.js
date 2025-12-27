import crypto from 'crypto';
import express from 'express';
import { createToken, verifyToken } from '../middleware/auth.js';

const router = express.Router();

const safeEqual = (a = '', b = '') => {
  const aBuf = Buffer.from(String(a));
  const bBuf = Buffer.from(String(b));
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
};

router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  const adminUser = process.env.ADMIN_USER;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUser || !adminPassword) {
    return res.status(500).json({ error: 'Admin credentials not configured' });
  }

  if (!safeEqual(username, adminUser) || !safeEqual(password, adminPassword)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = createToken({ sub: adminUser });
  return res.status(200).json({ ok: true, token, user: adminUser });
});

router.get('/session', (req, res) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) {
    return res.status(200).json({ authenticated: false });
  }
  try {
    const payload = verifyToken(token);
    return res.status(200).json({ authenticated: true, user: payload.sub });
  } catch {
    return res.status(200).json({ authenticated: false });
  }
});

router.post('/logout', (req, res) => {
  return res.status(200).json({ ok: true });
});

export default router;
