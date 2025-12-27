import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import StaticPage from '../../components/StaticPage';
import { apiUrl, resolveMediaUrl } from '../../lib/apiClient';
import { manifest } from '../../pageConfig';

const formatDate = (value) => {
  if (!value) return '';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
};

export default function BlogDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    let active = true;
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(apiUrl(`/api/blogs/${id}`));
        const data = response.ok ? await response.json() : null;
        if (!active) return;
        if (!response.ok || !data?.item) {
          setPost(null);
          setError('Blog not found.');
          setLoading(false);
          return;
        }
        setPost(data.item);
        setLoading(false);
      } catch {
        if (!active) return;
        setPost(null);
        setError('Unable to load this blog right now.');
        setLoading(false);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [id]);

  const paragraphs = useMemo(() => {
    if (!post?.content) return [];
    return post.content
      .split(/\n+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }, [post]);

  const title = post?.title || 'Blog';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StaticPage assetDir="book about us _files" manifest={manifest}>
        <div className="blog-reader-page">
          <style
            dangerouslySetInnerHTML={{
              __html: `
    .blog-reader-page {background: #f9f5f2;}
    .blog-hero {background: linear-gradient(180deg, #49263d 17.31%, #8b4e5d 100%); color: #fff; padding: 40px 0 60px;}
    .blog-hero .hero-inner {max-width: 1180px; margin: 0 auto; padding: 0 20px;}
    .blog-hero h1 {font-size: 32px; margin: 12px 0 8px; font-weight: 800;}
    .blog-hero p {margin: 0; color: #ffe7da; font-size: 15px;}
    .blog-back {display: inline-flex; align-items: center; gap: 8px; color: #ffe7da; text-decoration: none; font-weight: 600;}
    .blog-back:hover {text-decoration: underline;}
    .blog-reader {max-width: 980px; margin: -36px auto 60px; padding: 0 20px;}
    .blog-article {background: #fff; border-radius: 16px; box-shadow: 0 18px 32px rgba(18,43,76,0.08); overflow: hidden;}
    .blog-cover img {width: 100%; height: 360px; object-fit: cover; display: block;}
    .blog-body {padding: 24px 28px 32px;}
    .blog-meta {color: #777; font-size: 14px; display: flex; gap: 10px; flex-wrap: wrap;}
    .blog-title {margin: 12px 0 8px; font-size: 28px; color: #49263d;}
    .blog-excerpt {margin: 0 0 16px; font-size: 16px; color: #5d4c57;}
    .blog-content {color: #3b2f35; font-size: 16px; line-height: 1.7;}
    .blog-content p {margin: 0 0 16px;}
    .blog-status {background: #fff; border-radius: 14px; border: 1px solid #e6e6e6; padding: 20px; text-align: center; color: #49263d;}
    .blog-status p {margin: 6px 0 0; color: #777;}
    .blog-header {padding: 16px 0;}
    .blog-header .header_bar {align-items: center;}
    .blog-header .join_rcc a {color: #fff; background: #db4242;}
    @media (max-width: 768px) {
      .blog-hero {padding: 32px 0 44px;}
      .blog-cover img {height: 220px;}
      .blog-body {padding: 18px 18px 24px;}
      .blog-title {font-size: 22px;}
    }
      `,
            }}
          />
          <header className="blog-header">
            <div className="container-fluid">
              <div className="header_container">
                <div className="container">
                  <div className="header_bar">
                    <div className="nav_logo">
                      <div className="logo">
                        <a href="/">
                          <img src="/assets/book about us _files/logo.png" alt="Ramayan Research Council" />
                        </a>
                      </div>
                    </div>
                    <div className="join_rcc hidden_mobile">
                      <a href="/blogs">Back to Blogs</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="blog-hero">
            <div className="hero-inner">
              <a className="blog-back" href="/blogs">← All blogs</a>
              <h1>{post?.title || (loading ? 'Loading blog…' : 'Blog')}</h1>
              <p>{post?.excerpt || 'Latest insights and updates from the council.'}</p>
            </div>
          </section>
          <main className="blog-reader">
            {loading ? (
              <div className="blog-status">
                <h3>Loading blog…</h3>
                <p>Please wait a moment.</p>
              </div>
            ) : error ? (
              <div className="blog-status">
                <h3>{error}</h3>
                <p>Return to the blog list to explore other posts.</p>
              </div>
            ) : post ? (
              <article className="blog-article">
                <div className="blog-cover">
                  <img src={resolveMediaUrl(post.image)} alt={post.title} />
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span>{post.author || 'RRC Editorial'}</span>
                    <span>•</span>
                    <span>{post.read || '3 minute read'}</span>
                    {post.publishedAt && (
                      <>
                        <span>•</span>
                        <span>{formatDate(post.publishedAt)}</span>
                      </>
                    )}
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  {post.excerpt && <p className="blog-excerpt">{post.excerpt}</p>}
                  <div className="blog-content">
                    {paragraphs.length
                      ? paragraphs.map((paragraph, index) => <p key={`${post._id || post.id}-${index}`}>{paragraph}</p>)
                      : <p>{post.content || 'No additional content provided yet.'}</p>}
                  </div>
                </div>
              </article>
            ) : null}
          </main>
          <footer className="footer_section">
            <div className="top_ftbar">
              <div className="container">
                <div className="ft_logo">
                  <img src="/assets/book about us _files/footer_logo.png" alt="logo" />
                </div>
                <div className="ft_content">
                  <ul className="address_section">
                    <li>
                      <span>Address</span>
                      <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                    </li>
                    <li>
                      <span>Email</span>
                      <p>info@ramayanparivar.com</p>
                    </li>
                    <li>
                      <span>Phone</span>
                      <p>+91-8368320801 <span>|</span> +91-8130767023</p>
                    </li>
                  </ul>
                  <ul className="quick_links">
                    <li>
                      <span>Quick links</span>
                      <ul>
                        <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">About Us</a></li>
                        <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">Our Aim</a></li>
                        <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">Objectives</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="support_links">
                    <li>
                      <span>Quick links</span>
                      <ul>
                        <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                        <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                        <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="ft_text">
                    <li>
                      <p>Ramayana Research Council’ is a registered organization in the form of ‘trust’ with a
                        purpose to promote the cultural values of our country</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copy_rightsection">
              <p>Copyright © 2025 All Rights Reserved</p>
            </div>
          </footer>
        </div>
      </StaticPage>
    </>
  );
}
