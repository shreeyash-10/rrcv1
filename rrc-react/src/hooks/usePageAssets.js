import { useEffect } from 'react';

const injected = new Set();

const ensureLink = (href) => {
  if (!href || injected.has(href)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.onload = () => injected.add(href);
  document.head.appendChild(link);
};

export default function usePageAssets(assetDir, manifest) {
  useEffect(() => {
    if (!assetDir || !manifest) return;
    const entry = manifest[assetDir];
    if (!entry || !entry.css) return;

    entry.css
      .filter((file) => file.toLowerCase() !== 'all.min.css')
      .forEach((file) => {
      const href = encodeURI(`/assets/${assetDir}/${file}`);
      ensureLink(href);
    });
  }, [assetDir, manifest]);
}
