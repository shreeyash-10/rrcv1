/* eslint-env node */
import { proxyToBackend } from '../../../lib/backendProxy';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '12mb',
    },
  },
};

export default async function handler(req, res) {
  const { collection } = req.query;
  if (!collection) {
    return res.status(404).json({ error: 'Not found' });
  }
  return proxyToBackend(req, res, `/api/admin/${collection}`);
}
