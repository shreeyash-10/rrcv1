/* eslint-env node */
import { listCollection } from '../../lib/adminStore';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const items = await listCollection('blogs');
  return res.status(200).json({ items: items.filter((item) => item.published !== false) });
}
