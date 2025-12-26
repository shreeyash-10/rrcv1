/* eslint-env node */
import { getSession } from '../../../lib/adminAuth';
import {
  createId,
  listCollection,
  removeUpload,
  saveBase64Image,
  saveCollection,
} from '../../../lib/adminStore';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '12mb',
    },
  },
};

const allowed = new Set(['gallery', 'news', 'blogs']);

const formatItem = (collection, item) => {
  if (collection === 'news' || collection === 'blogs') {
    return {
      ...item,
      published: item.published !== false,
    };
  }
  return item;
};

export default async function handler(req, res) {
  const { collection } = req.query;
  if (!allowed.has(collection)) {
    return res.status(404).json({ error: 'Not found' });
  }

  const session = getSession(req);

  if (req.method === 'GET') {
    const items = await listCollection(collection);
    if (!session && (collection === 'news' || collection === 'blogs')) {
      return res.status(200).json({ items: items.filter((item) => item.published !== false) });
    }
    return res.status(200).json({ items });
  }

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const payload = req.body || {};
    const now = new Date().toISOString();

    if (collection === 'gallery') {
      const url = payload.imageData
        ? await saveBase64Image(payload.imageData, payload.filename || payload.title || 'gallery')
        : payload.url;
      if (!url) return res.status(400).json({ error: 'Image is required' });
      const item = formatItem(collection, {
        id: createId(),
        title: payload.title || 'Gallery item',
        alt: payload.alt || payload.title || 'Gallery item',
        url,
        createdAt: now,
      });
      const items = await listCollection(collection);
      items.unshift(item);
      await saveCollection(collection, items);
      return res.status(201).json({ item });
    }

    if (collection === 'news') {
      const image = payload.imageData
        ? await saveBase64Image(payload.imageData, payload.filename || payload.title || 'news')
        : payload.image;
      if (!payload.title || !image) {
        return res.status(400).json({ error: 'Title and image are required' });
      }
      const item = formatItem(collection, {
        id: createId(),
        title: payload.title,
        link: payload.link || '#',
        image,
        excerpt: payload.excerpt || '',
        publishedAt: payload.publishedAt || payload.date || now,
        createdAt: now,
        updatedAt: now,
        published: payload.published !== false,
      });
      const items = await listCollection(collection);
      items.unshift(item);
      await saveCollection(collection, items);
      return res.status(201).json({ item });
    }

    const image = payload.imageData
      ? await saveBase64Image(payload.imageData, payload.filename || payload.title || 'blog')
      : payload.image;
    if (!payload.title || !image) {
      return res.status(400).json({ error: 'Title and image are required' });
    }
    const item = formatItem(collection, {
      id: createId(),
      title: payload.title,
      author: payload.author || 'RRC Editorial',
      read: payload.read || '3 minute read',
      excerpt: payload.excerpt || '',
      content: payload.content || '',
      image,
      featured: Boolean(payload.featured),
      createdAt: now,
      updatedAt: now,
      publishedAt: payload.publishedAt || now,
      published: payload.published !== false,
    });
    const items = await listCollection(collection);
    if (item.featured) {
      items.forEach((entry) => {
        entry.featured = false;
      });
    }
    items.unshift(item);
    await saveCollection(collection, items);
    return res.status(201).json({ item });
  }

  if (req.method === 'PATCH') {
    const { id, ...updates } = req.body || {};
    if (!id) return res.status(400).json({ error: 'Missing id' });
    const items = await listCollection(collection);
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return res.status(404).json({ error: 'Not found' });

    let nextImage = updates.image;
    if (updates.imageData) {
      nextImage = await saveBase64Image(updates.imageData, updates.filename || updates.title || 'image');
    }

    const nextItem = formatItem(collection, {
      ...items[index],
      ...updates,
      ...(nextImage ? { image: nextImage, url: nextImage } : {}),
      updatedAt: new Date().toISOString(),
    });

    if (collection === 'blogs' && updates.featured) {
      items.forEach((entry) => {
        entry.featured = false;
      });
    }

    items[index] = nextItem;
    await saveCollection(collection, items);
    return res.status(200).json({ item: nextItem });
  }

  if (req.method === 'DELETE') {
    const { id } = req.body || {};
    if (!id) return res.status(400).json({ error: 'Missing id' });
    const items = await listCollection(collection);
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return res.status(404).json({ error: 'Not found' });
    const [removed] = items.splice(index, 1);
    if (collection === 'gallery' && removed?.url) {
      await removeUpload(removed.url);
    }
    await saveCollection(collection, items);
    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE']);
  return res.status(405).json({ error: 'Method not allowed' });
}
