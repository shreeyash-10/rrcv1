/* eslint-env node */
import { createSessionToken, safeEqual, setAuthCookie } from '../../../lib/adminAuth';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body || {};
  const adminUser = process.env.ADMIN_USER;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUser || !adminPassword) {
    return res.status(500).json({ error: 'Admin credentials not configured' });
  }

  if (!safeEqual(username, adminUser) || !safeEqual(password, adminPassword)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = createSessionToken({ sub: adminUser });
  setAuthCookie(res, token);
  return res.status(200).json({ ok: true });
}
