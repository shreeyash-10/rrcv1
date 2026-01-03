import Head from 'next/head';
import { useEffect, useState } from 'react';
import { apiUrl, resolveMediaUrl } from '../../lib/apiClient';

const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const TOKEN_KEY = 'rrc_admin_token';

const readToken = () => {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(TOKEN_KEY);
};

const writeToken = (token) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(TOKEN_KEY);
};

const fetchJson = async (url, options = {}, token) => {
  const headers = { ...(options.headers || {}) };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const response = await fetch(apiUrl(url), { ...options, headers });
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
  const [authToken, setAuthToken] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [newsItems, setNewsItems] = useState([]);
  const [blogItems, setBlogItems] = useState([]);
  const [videoItems, setVideoItems] = useState([]);
  const [galleryForm, setGalleryForm] = useState({ title: '', alt: '', imageUrl: '', file: null });
  const [newsForm, setNewsForm] = useState({ title: '', link: '', date: '', imageUrl: '', file: null, published: true });
  const [blogForm, setBlogForm] = useState({ title: '', author: '', read: '', excerpt: '', content: '', imageUrl: '', file: null, featured: false, published: true });
  const [videoForm, setVideoForm] = useState({ title: '', url: '', published: true });
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [editingGalleryId, setEditingGalleryId] = useState(null);
  const [editingNewsId, setEditingNewsId] = useState(null);
  const [editingVideoId, setEditingVideoId] = useState(null);
  const [activeSection, setActiveSection] = useState('media');
  const [openPanels, setOpenPanels] = useState(() => ({
    galleryForm: false,
    galleryList: true,
    newsForm: false,
    newsList: true,
    blogForm: false,
    blogList: true,
    videoForm: false,
    videoList: true,
  }));

  const loadCollections = async (token = authToken) => {
    const [gallery, news, blogs, videos] = await Promise.all([
      fetchJson('/api/admin/gallery', {}, token),
      fetchJson('/api/admin/news', {}, token),
      fetchJson('/api/admin/blogs', {}, token),
      fetchJson('/api/admin/videos', {}, token),
    ]);
    setGalleryItems(gallery.items || []);
    setNewsItems(news.items || []);
    setBlogItems(blogs.items || []);
    setVideoItems(videos.items || []);
  };

  useEffect(() => {
    const checkSession = async () => {
      const token = readToken();
      if (!token) {
        setSession({ loading: false, authenticated: false, user: null });
        return;
      }
      try {
        const data = await fetchJson('/api/auth/session', {}, token);
        if (data.authenticated) {
          setAuthToken(token);
          setSession({ loading: false, authenticated: true, user: data.user });
          await loadCollections(token);
        } else {
          clearToken();
          setSession({ loading: false, authenticated: false, user: null });
        }
      } catch {
        clearToken();
        setSession({ loading: false, authenticated: false, user: null });
      }
    };
    checkSession();
  }, []);

  useEffect(() => {
    if (editingGalleryId) {
      setOpenPanels((prev) => ({ ...prev, galleryForm: true }));
    }
  }, [editingGalleryId]);

  useEffect(() => {
    if (editingNewsId) {
      setOpenPanels((prev) => ({ ...prev, newsForm: true }));
    }
  }, [editingNewsId]);

  useEffect(() => {
    if (editingBlogId) {
      setOpenPanels((prev) => ({ ...prev, blogForm: true }));
    }
  }, [editingBlogId]);

  useEffect(() => {
    if (editingVideoId) {
      setOpenPanels((prev) => ({ ...prev, videoForm: true }));
    }
  }, [editingVideoId]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');
    try {
      const data = await fetchJson('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      writeToken(data.token);
      setAuthToken(data.token);
      setCredentials({ username: '', password: '' });
      setSession({ loading: false, authenticated: true, user: data.user || credentials.username });
      await loadCollections(data.token);
      setNotice('Login successful.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await fetchJson('/api/auth/logout', { method: 'POST' }, authToken);
    } catch {
      // Ignore logout failures.
    }
    clearToken();
    setAuthToken(null);
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
      const payload = {
        title: galleryForm.title,
        alt: galleryForm.alt,
      };
      if (imageData) {
        payload.imageData = imageData;
        payload.filename = galleryForm.file?.name;
      }
      if (!imageData && galleryForm.imageUrl) {
        payload.url = galleryForm.imageUrl;
      }
      if (editingGalleryId) {
        await fetchJson('/api/admin/gallery', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingGalleryId, ...payload }),
        }, authToken);
      } else {
        await fetchJson('/api/admin/gallery', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }, authToken);
      }
      setGalleryForm({ title: '', alt: '', imageUrl: '', file: null });
      setEditingGalleryId(null);
      await loadCollections();
      setNotice(editingGalleryId ? 'Gallery item updated.' : 'Gallery item added.');
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
      const payload = {
        title: newsForm.title,
        link: newsForm.link,
        publishedAt: newsForm.date,
        published: newsForm.published,
      };
      if (imageData) {
        payload.imageData = imageData;
        payload.filename = newsForm.file?.name;
      }
      if (!imageData && newsForm.imageUrl) {
        payload.image = newsForm.imageUrl;
      }
      if (editingNewsId) {
        await fetchJson('/api/admin/news', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingNewsId, ...payload }),
        }, authToken);
      } else {
        await fetchJson('/api/admin/news', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }, authToken);
      }
      setNewsForm({ title: '', link: '', date: '', imageUrl: '', file: null, published: true });
      setEditingNewsId(null);
      await loadCollections();
      setNotice(editingNewsId ? 'News item updated.' : 'News item published.');
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
      const payload = {
        title: blogForm.title,
        author: blogForm.author,
        read: blogForm.read,
        excerpt: blogForm.excerpt,
        content: blogForm.content,
        featured: blogForm.featured,
        published: blogForm.published,
      };
      if (blogForm.imageUrl) {
        payload.image = blogForm.imageUrl;
      }
      if (imageData) {
        payload.imageData = imageData;
        payload.filename = blogForm.file?.name;
      }
      if (editingBlogId) {
        await fetchJson('/api/admin/blogs', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingBlogId, ...payload }),
        }, authToken);
      } else {
        await fetchJson('/api/admin/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }, authToken);
      }
      setBlogForm({ title: '', author: '', read: '', excerpt: '', content: '', imageUrl: '', file: null, featured: false, published: true });
      setEditingBlogId(null);
      await loadCollections();
      setNotice(editingBlogId ? 'Blog post updated.' : 'Blog post saved.');
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
      }, authToken);
      await loadCollections();
      setNotice('Item deleted.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleVideoSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');
    try {
      const payload = {
        title: videoForm.title,
        url: videoForm.url,
        published: videoForm.published,
      };
      if (editingVideoId) {
        await fetchJson('/api/admin/videos', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingVideoId, ...payload }),
        }, authToken);
      } else {
        await fetchJson('/api/admin/videos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }, authToken);
      }
      setVideoForm({ title: '', url: '', published: true });
      setEditingVideoId(null);
      await loadCollections();
      setNotice(editingVideoId ? 'Video updated.' : 'Video added.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditGallery = (item) => {
    setEditingGalleryId(item.id || item._id);
    setGalleryForm({
      title: item.title || '',
      alt: item.alt || '',
      imageUrl: item.url || '',
      file: null,
    });
  };

  const handleCancelGalleryEdit = () => {
    setEditingGalleryId(null);
    setGalleryForm({ title: '', alt: '', imageUrl: '', file: null });
  };

  const handleEditNews = (item) => {
    setEditingNewsId(item.id || item._id);
    setNewsForm({
      title: item.title || '',
      link: item.link || '',
      date: item.publishedAt ? item.publishedAt.slice(0, 10) : '',
      imageUrl: item.image || '',
      file: null,
      published: item.published !== false,
    });
  };

  const handleCancelNewsEdit = () => {
    setEditingNewsId(null);
    setNewsForm({ title: '', link: '', date: '', imageUrl: '', file: null, published: true });
  };

  const handleEditVideo = (item) => {
    setEditingVideoId(item.id || item._id);
    setVideoForm({
      title: item.title || '',
      url: item.url || '',
      published: item.published !== false,
    });
  };

  const handleCancelVideoEdit = () => {
    setEditingVideoId(null);
    setVideoForm({ title: '', url: '', published: true });
  };

  const handleEditBlog = (item) => {
    setEditingBlogId(item.id || item._id);
    setBlogForm({
      title: item.title || '',
      author: item.author || '',
      read: item.read || '',
      excerpt: item.excerpt || '',
      content: item.content || '',
      imageUrl: item.image || '',
      file: null,
      featured: Boolean(item.featured),
      published: item.published !== false,
    });
  };

  const handleCancelEdit = () => {
    setEditingBlogId(null);
    setBlogForm({ title: '', author: '', read: '', excerpt: '', content: '', imageUrl: '', file: null, featured: false, published: true });
  };

  const handlePanelToggle = (panelKey) => (event) => {
    const isOpen = event?.currentTarget?.open ?? event?.target?.open ?? false;
    setOpenPanels((prev) => ({ ...prev, [panelKey]: Boolean(isOpen) }));
  };

  const userLabel =
    typeof session.user === 'object' && session.user !== null
      ? session.user.name || session.user.username || session.user.email || 'Admin'
      : session.user || 'Admin';
  const mediaCount = galleryItems.length + videoItems.length;

  return (
    <div className="admin-shell">
      <Head>
        <title>RRC Admin</title>
      </Head>
      <div className="admin-container">
        <div className="admin-header">
          <div>
            <h1>Admin Console</h1>
            <p>Manage media, news coverage, and blog posts.</p>
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

            <div className="admin-toolbar">
              <div>
                <h2>Content workspace</h2>
                <p>Use the tabs to switch sections. Expand each panel to focus on edits.</p>
              </div>
              <div className="admin-user">
                <span className="admin-user-label">Signed in as</span>
                <span className="admin-user-name">{userLabel}</span>
              </div>
            </div>

            <nav className="admin-nav" aria-label="Admin sections">
              <button
                type="button"
                className={`admin-tab ${activeSection === 'media' ? 'active' : ''}`}
                onClick={() => setActiveSection('media')}
                aria-pressed={activeSection === 'media'}
              >
                Media
                <span className="admin-tab-count">{mediaCount}</span>
              </button>
              <button
                type="button"
                className={`admin-tab ${activeSection === 'news' ? 'active' : ''}`}
                onClick={() => setActiveSection('news')}
                aria-pressed={activeSection === 'news'}
              >
                News
                <span className="admin-tab-count">{newsItems.length}</span>
              </button>
              <button
                type="button"
                className={`admin-tab ${activeSection === 'blogs' ? 'active' : ''}`}
                onClick={() => setActiveSection('blogs')}
                aria-pressed={activeSection === 'blogs'}
              >
                Blogs
                <span className="admin-tab-count">{blogItems.length}</span>
              </button>
            </nav>

            {activeSection === 'media' && (
              <div className="admin-section">
                <div className="admin-section-header">
                  <div>
                    <h2>Media library</h2>
                    <p>Manage gallery images and YouTube embeds.</p>
                  </div>
                  <div className="admin-section-meta">
                    <span className="admin-pill">{galleryItems.length} images</span>
                    <span className="admin-pill">{videoItems.length} videos</span>
                  </div>
                </div>
                <div className="admin-section-grid">
                  <section className="admin-card">
                    <div className="admin-card-header">
                      <div>
                        <h3>Gallery</h3>
                        <p>Add highlights for the site gallery.</p>
                      </div>
                      <span className="admin-pill">{galleryItems.length} items</span>
                    </div>
                    <details
                      className="admin-collapse"
                      open={openPanels.galleryForm}
                      onToggle={handlePanelToggle('galleryForm')}
                    >
                      <summary>Upload or edit gallery items</summary>
                      <div className="admin-collapse-body">
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
                            Image URL
                            <input
                              type="url"
                              value={galleryForm.imageUrl}
                              onChange={(event) => setGalleryForm((prev) => ({ ...prev, imageUrl: event.target.value }))}
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
                          <div className="admin-actions">
                            <button type="submit">{editingGalleryId ? 'Update gallery item' : 'Add to gallery'}</button>
                            {editingGalleryId && (
                              <button type="button" className="ghost-btn" onClick={handleCancelGalleryEdit}>
                                Cancel
                              </button>
                            )}
                          </div>
                        </form>
                      </div>
                    </details>
                    <details
                      className="admin-collapse"
                      open={openPanels.galleryList}
                      onToggle={handlePanelToggle('galleryList')}
                    >
                      <summary>Gallery items</summary>
                      <div className="admin-collapse-body">
                        <div className="admin-list">
                          {galleryItems.length === 0 ? (
                            <div className="admin-empty">No gallery items yet.</div>
                          ) : (
                            galleryItems.map((item) => {
                              const itemId = item.id || item._id;
                              const title = item.title || item.alt || 'Gallery item';
                              const imageUrl = resolveMediaUrl(item.url || item.image || '');
                              return (
                                <div className="admin-list-item" key={itemId}>
                                  <div className="admin-item">
                                    {imageUrl && <img className="admin-thumb" src={imageUrl} alt={title} />}
                                    <div>
                                      <div className="admin-item-title">{title}</div>
                                      {imageUrl && (
                                        <a className="admin-item-link" href={imageUrl} target="_blank" rel="noopener noreferrer">
                                          Open image
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                  <div className="admin-actions">
                                    <button type="button" className="ghost-btn" onClick={() => handleEditGallery(item)}>Edit</button>
                                    <button type="button" className="ghost-btn" onClick={() => handleDelete('gallery', itemId)}>Delete</button>
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                    </details>
                  </section>

                  <section className="admin-card">
                    <div className="admin-card-header">
                      <div>
                        <h3>Video gallery</h3>
                        <p>Add YouTube links for the media page.</p>
                      </div>
                      <span className="admin-pill">{videoItems.length} videos</span>
                    </div>
                    <details
                      className="admin-collapse"
                      open={openPanels.videoForm}
                      onToggle={handlePanelToggle('videoForm')}
                    >
                      <summary>Add or edit videos</summary>
                      <div className="admin-collapse-body">
                        <form className="admin-form" onSubmit={handleVideoSubmit}>
                          <label>
                            Title
                            <input
                              type="text"
                              value={videoForm.title}
                              onChange={(event) => setVideoForm((prev) => ({ ...prev, title: event.target.value }))}
                            />
                          </label>
                          <label>
                            YouTube URL
                            <input
                              type="url"
                              value={videoForm.url}
                              onChange={(event) => setVideoForm((prev) => ({ ...prev, url: event.target.value }))}
                              required
                            />
                          </label>
                          <label className="inline">
                            <input
                              type="checkbox"
                              checked={videoForm.published}
                              onChange={(event) => setVideoForm((prev) => ({ ...prev, published: event.target.checked }))}
                            />
                            Publish immediately
                          </label>
                          <div className="admin-actions">
                            <button type="submit">{editingVideoId ? 'Update video' : 'Add video'}</button>
                            {editingVideoId && (
                              <button type="button" className="ghost-btn" onClick={handleCancelVideoEdit}>
                                Cancel
                              </button>
                            )}
                          </div>
                        </form>
                      </div>
                    </details>
                    <details
                      className="admin-collapse"
                      open={openPanels.videoList}
                      onToggle={handlePanelToggle('videoList')}
                    >
                      <summary>Video entries</summary>
                      <div className="admin-collapse-body">
                        <div className="admin-list">
                          {videoItems.length === 0 ? (
                            <div className="admin-empty">No videos yet.</div>
                          ) : (
                            videoItems.map((item) => {
                              const itemId = item.id || item._id;
                              return (
                                <div className="admin-list-item" key={itemId}>
                                  <div className="admin-item">
                                    <div>
                                      <div className="admin-item-title">{item.title || item.url}</div>
                                      {item.url && (
                                        <a className="admin-item-link" href={item.url} target="_blank" rel="noopener noreferrer">
                                          Open video
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                  <div className="admin-actions">
                                    <button type="button" className="ghost-btn" onClick={() => handleEditVideo(item)}>Edit</button>
                                    <button type="button" className="ghost-btn" onClick={() => handleDelete('videos', itemId)}>Delete</button>
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </div>
            )}

            {activeSection === 'news' && (
              <div className="admin-section">
                <div className="admin-section-header">
                  <div>
                    <h2>News coverage</h2>
                    <p>Publish articles, press mentions, and updates.</p>
                  </div>
                  <div className="admin-section-meta">
                    <span className="admin-pill">{newsItems.length} stories</span>
                  </div>
                </div>
                <section className="admin-card">
                  <div className="admin-card-header">
                    <div>
                      <h3>{editingNewsId ? 'Edit news coverage' : 'Add news coverage'}</h3>
                      <p>Attach a link, date, and optional image.</p>
                    </div>
                    <span className="admin-pill">{newsItems.length} items</span>
                  </div>
                  <details
                    className="admin-collapse"
                    open={openPanels.newsForm}
                    onToggle={handlePanelToggle('newsForm')}
                  >
                    <summary>{editingNewsId ? 'Update news entry' : 'Create a news entry'}</summary>
                    <div className="admin-collapse-body">
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
                          Or image URL
                          <input
                            type="url"
                            value={newsForm.imageUrl}
                            onChange={(event) => setNewsForm((prev) => ({ ...prev, imageUrl: event.target.value }))}
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
                        <label className="inline">
                          <input
                            type="checkbox"
                            checked={newsForm.published}
                            onChange={(event) => setNewsForm((prev) => ({ ...prev, published: event.target.checked }))}
                          />
                          Publish immediately
                        </label>
                        <div className="admin-actions">
                          <button type="submit">{editingNewsId ? 'Update news' : 'Publish news'}</button>
                          {editingNewsId && (
                            <button type="button" className="ghost-btn" onClick={handleCancelNewsEdit}>
                              Cancel
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </details>
                  <details
                    className="admin-collapse"
                    open={openPanels.newsList}
                    onToggle={handlePanelToggle('newsList')}
                  >
                    <summary>News items</summary>
                    <div className="admin-collapse-body">
                      <div className="admin-list">
                        {newsItems.length === 0 ? (
                          <div className="admin-empty">No news items yet.</div>
                        ) : (
                          newsItems.map((item) => {
                            const itemId = item.id || item._id;
                            const imageUrl = resolveMediaUrl(item.image || '');
                            const dateLabel = item.publishedAt ? item.publishedAt.slice(0, 10) : '';
                            return (
                              <div className="admin-list-item" key={itemId}>
                                <div className="admin-item">
                                  {imageUrl && <img className="admin-thumb" src={imageUrl} alt={item.title} />}
                                  <div>
                                    <div className="admin-item-title">{item.title}</div>
                                    <div className="admin-item-meta">{dateLabel}</div>
                                    {item.link && item.link !== '#' && (
                                      <a className="admin-item-link" href={item.link} target="_blank" rel="noopener noreferrer">
                                        Open article
                                      </a>
                                    )}
                                  </div>
                                </div>
                                <div className="admin-actions">
                                  <button type="button" className="ghost-btn" onClick={() => handleEditNews(item)}>Edit</button>
                                  <button type="button" className="ghost-btn" onClick={() => handleDelete('news', itemId)}>Delete</button>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </details>
                </section>
              </div>
            )}

            {activeSection === 'blogs' && (
              <div className="admin-section">
                <div className="admin-section-header">
                  <div>
                    <h2>Blog posts</h2>
                    <p>Write long-form updates and feature stories.</p>
                  </div>
                  <div className="admin-section-meta">
                    <span className="admin-pill">{blogItems.length} posts</span>
                  </div>
                </div>
                <section className="admin-card">
                  <div className="admin-card-header">
                    <div>
                      <h3>{editingBlogId ? 'Edit blog post' : 'Create blog post'}</h3>
                      <p>Draft, feature, and publish posts.</p>
                    </div>
                    <span className="admin-pill">{blogItems.length} items</span>
                  </div>
                  <details
                    className="admin-collapse"
                    open={openPanels.blogForm}
                    onToggle={handlePanelToggle('blogForm')}
                  >
                    <summary>{editingBlogId ? 'Update blog content' : 'Write a new blog post'}</summary>
                    <div className="admin-collapse-body">
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
                        <div className="admin-actions">
                          <button type="submit">{editingBlogId ? 'Update blog' : 'Save blog'}</button>
                          {editingBlogId && (
                            <button type="button" className="ghost-btn" onClick={handleCancelEdit}>
                              Cancel
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </details>
                  <details
                    className="admin-collapse"
                    open={openPanels.blogList}
                    onToggle={handlePanelToggle('blogList')}
                  >
                    <summary>Published and draft posts</summary>
                    <div className="admin-collapse-body">
                      <div className="admin-list">
                        {blogItems.length === 0 ? (
                          <div className="admin-empty">No blog posts yet.</div>
                        ) : (
                          blogItems.map((item) => {
                            const itemId = item.id || item._id;
                            return (
                              <div className="admin-list-item" key={itemId}>
                                <span>{item.title}</span>
                                <div className="admin-actions">
                                  {item.featured && <span className="admin-badge">Featured</span>}
                                  {item.published === false && <span className="admin-badge">Draft</span>}
                                  <button type="button" className="ghost-btn" onClick={() => handleEditBlog(item)}>Edit</button>
                                  <button type="button" className="ghost-btn" onClick={() => handleDelete('blogs', itemId)}>Delete</button>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </details>
                </section>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
