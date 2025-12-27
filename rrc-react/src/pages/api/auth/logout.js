/* eslint-env node */
import { proxyToBackend } from '../../../lib/backendProxy';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }
  return proxyToBackend(req, res, '/api/auth/logout');
}
