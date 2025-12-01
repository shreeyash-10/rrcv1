import { useEffect } from 'react';
import themeStyles from '../theme.css?raw';

const injected = new Set();
let themeAttached = false;

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

    if (!themeAttached) {
      const style = document.createElement('style');
      style.id = 'rrc-theme';
      style.textContent = themeStyles;
      document.head.appendChild(style);
      themeAttached = true;
    }
  }, [assetDir, manifest]);
}
