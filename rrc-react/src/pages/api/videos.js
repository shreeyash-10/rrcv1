/* eslint-env node */
import { proxyToBackend } from '../../lib/backendProxy';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }
  return proxyToBackend(req, res, '/api/videos');
}
