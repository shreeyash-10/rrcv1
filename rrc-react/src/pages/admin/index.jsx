import Head from 'next/head';
import { useEffect, useState } from 'react';

const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const fetchJson = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data?.error || 'Request failed';
    throw new Error(message);
  }
  return data;
};

export default function AdminPage() {
  const [session, setSession] = useState({ loading: true, authenticated: false, user: null });
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [galleryItems, setGalleryItems] = useState([]);
  const [newsItems, setNewsItems] = useState([]);
  const [blogItems, setBlogItems] = useState([]);
  const [galleryForm, setGalleryForm] = useState({ title: '', alt: '', file: null });
  const [newsForm, setNewsForm] = useState({ title: '', link: '', date: '', imageUrl: '', file: null, published: true });
  const [blogForm, setBlogForm] = useState({ title: '', author: '', read: '', excerpt: '', content: '', imageUrl: '', file: null, featured: false, published: true });

  const loadCollections = async () => {
    const [gallery, news, blogs] = await Promise.all([
      fetchJson('/api/admin/gallery'),
      fetchJson('/api/admin/news'),
      fetchJson('/api/admin/blogs'),
    ]);
    setGalleryItems(gallery.items || []);
    setNewsItems(news.items || []);
    setBlogItems(blogs.items || []);
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const data = await fetchJson('/api/admin/session');
        if (data.authenticated) {
          setSession({ loading: false, authenticated: true, user: data.user });
          await loadCollections();
        } else {
          setSession({ loading: false, authenticated: false, user: null });
        }
      } catch {
        setSession({ loading: false, authenticated: false, user: null });
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');
    try {
      await fetchJson('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      setCredentials({ username: '', password: '' });
      setSession({ loading: false, authenticated: true, user: credentials.username });
      await loadCollections();
      setNotice('Login successful.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await fetchJson('/api/auth/logout', { method: 'POST' });
    setSession({ loading: false, authenticated: false, user: null });
    setNotice('');
    setError('');
  };

  const handleGallerySubmit = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');
    try {
      const imageData = galleryForm.file ? await fileToDataUrl(galleryForm.file) : null;
      await fetchJson('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: galleryForm.title,
          alt: galleryForm.alt,
          imageData,
          filename: galleryForm.file?.name,
        }),
      });
      setGalleryForm({ title: '', alt: '', file: null });
      await loadCollections();
      setNotice('Gallery item added.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleNewsSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');
    try {
      const imageData = newsForm.file ? await fileToDataUrl(newsForm.file) : null;
      await fetchJson('/api/admin/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newsForm.title,
          link: newsForm.link,
          publishedAt: newsForm.date,
          image: newsForm.imageUrl,
          imageData,
          filename: newsForm.file?.name,
          published: newsForm.published,
        }),
      });
      setNewsForm({ title: '', link: '', date: '', imageUrl: '', file: null, published: true });
      await loadCollections();
      setNotice('News item published.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleBlogSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');
    try {
      const imageData = blogForm.file ? await fileToDataUrl(blogForm.file) : null;
      await fetchJson('/api/admin/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: blogForm.title,
          author: blogForm.author,
          read: blogForm.read,
          excerpt: blogForm.excerpt,
          content: blogForm.content,
          image: blogForm.imageUrl,
          imageData,
          filename: blogForm.file?.name,
          featured: blogForm.featured,
          published: blogForm.published,
        }),
      });
      setBlogForm({ title: '', author: '', read: '', excerpt: '', content: '', imageUrl: '', file: null, featured: false, published: true });
      await loadCollections();
      setNotice('Blog post saved.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (collection, id) => {
    setError('');
    setNotice('');
    try {
      await fetchJson(`/api/admin/${collection}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      await loadCollections();
      setNotice('Item deleted.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-shell">
      <Head>
        <title>RRC Admin</title>
      </Head>
      <div className="admin-container">
        <div className="admin-header">
          <div>
            <h1>Admin Console</h1>
            <p>Manage gallery uploads, news coverage, and blogs.</p>
          </div>
          {session.authenticated && (
            <button type="button" className="btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>

        {session.loading ? (
          <div className="admin-card">Checking session…</div>
        ) : !session.authenticated ? (
          <form className="admin-card admin-form" onSubmit={handleLogin}>
            <h2>Sign in</h2>
            <label>
              Username
              <input
                type="text"
                value={credentials.username}
                onChange={(event) => setCredentials((prev) => ({ ...prev, username: event.target.value }))}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={credentials.password}
                onChange={(event) => setCredentials((prev) => ({ ...prev, password: event.target.value }))}
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
        ) : (
          <div className="admin-grid">
            {(error || notice) && (
              <div className={`admin-banner ${error ? 'error' : 'success'}`}>
                {error || notice}
              </div>
            )}

            <section className="admin-card">
              <h2>Gallery uploads</h2>
              <form className="admin-form" onSubmit={handleGallerySubmit}>
                <label>
                  Title
                  <input
                    type="text"
                    value={galleryForm.title}
                    onChange={(event) => setGalleryForm((prev) => ({ ...prev, title: event.target.value }))}
                  />
                </label>
                <label>
                  Alt text
                  <input
                    type="text"
                    value={galleryForm.alt}
                    onChange={(event) => setGalleryForm((prev) => ({ ...prev, alt: event.target.value }))}
                  />
                </label>
                <label>
                  Image file
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => setGalleryForm((prev) => ({ ...prev, file: event.target.files?.[0] || null }))}
                  />
                </label>
                <button type="submit">Add to gallery</button>
              </form>
              <div className="admin-list">
                {galleryItems.map((item) => (
                  <div className="admin-list-item" key={item.id}>
                    <span>{item.title || item.alt}</span>
                    <button type="button" className="ghost-btn" onClick={() => handleDelete('gallery', item.id)}>Delete</button>
                  </div>
                ))}
              </div>
            </section>

            <section className="admin-card">
              <h2>News coverage</h2>
              <form className="admin-form" onSubmit={handleNewsSubmit}>
                <label>
                  Title
                  <input
                    type="text"
                    value={newsForm.title}
                    onChange={(event) => setNewsForm((prev) => ({ ...prev, title: event.target.value }))}
                    required
                  />
                </label>
                <label>
                  Link
                  <input
                    type="url"
                    value={newsForm.link}
                    onChange={(event) => setNewsForm((prev) => ({ ...prev, link: event.target.value }))}
                  />
                </label>
                <label>
                  Date
                  <input
                    type="date"
                    value={newsForm.date}
                    onChange={(event) => setNewsForm((prev) => ({ ...prev, date: event.target.value }))}
                  />
                </label>
                <label>
                  Image file
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => setNewsForm((prev) => ({ ...prev, file: event.target.files?.[0] || null }))}
                  />
                </label>
                <label>
                  Or image URL
                  <input
                    type="url"
                    value={newsForm.imageUrl}
                    onChange={(event) => setNewsForm((prev) => ({ ...prev, imageUrl: event.target.value }))}
                  />
                </label>
                <label className="inline">
                  <input
                    type="checkbox"
                    checked={newsForm.published}
                    onChange={(event) => setNewsForm((prev) => ({ ...prev, published: event.target.checked }))}
                  />
                  Publish immediately
                </label>
                <button type="submit">Publish news</button>
              </form>
              <div className="admin-list">
                {newsItems.map((item) => (
                  <div className="admin-list-item" key={item.id}>
                    <span>{item.title}</span>
                    <button type="button" className="ghost-btn" onClick={() => handleDelete('news', item.id)}>Delete</button>
                  </div>
                ))}
              </div>
            </section>

            <section className="admin-card">
              <h2>Blog posts</h2>
              <form className="admin-form" onSubmit={handleBlogSubmit}>
                <label>
                  Title
                  <input
                    type="text"
                    value={blogForm.title}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, title: event.target.value }))}
                    required
                  />
                </label>
                <label>
                  Author
                  <input
                    type="text"
                    value={blogForm.author}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, author: event.target.value }))}
                  />
                </label>
                <label>
                  Read time
                  <input
                    type="text"
                    value={blogForm.read}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, read: event.target.value }))}
                  />
                </label>
                <label>
                  Excerpt
                  <textarea
                    rows={3}
                    value={blogForm.excerpt}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, excerpt: event.target.value }))}
                  />
                </label>
                <label>
                  Content
                  <textarea
                    rows={4}
                    value={blogForm.content}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, content: event.target.value }))}
                  />
                </label>
                <label>
                  Cover image file
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, file: event.target.files?.[0] || null }))}
                  />
                </label>
                <label>
                  Or cover image URL
                  <input
                    type="url"
                    value={blogForm.imageUrl}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, imageUrl: event.target.value }))}
                  />
                </label>
                <label className="inline">
                  <input
                    type="checkbox"
                    checked={blogForm.featured}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, featured: event.target.checked }))}
                  />
                  Mark as featured
                </label>
                <label className="inline">
                  <input
                    type="checkbox"
                    checked={blogForm.published}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, published: event.target.checked }))}
                  />
                  Publish immediately
                </label>
                <button type="submit">Save blog</button>
              </form>
              <div className="admin-list">
                {blogItems.map((item) => (
                  <div className="admin-list-item" key={item.id}>
                    <span>{item.title}</span>
                    <button type="button" className="ghost-btn" onClick={() => handleDelete('blogs', item.id)}>Delete</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
