import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { resolveRoute } from '../linkResolver';
import usePageAssets from '../hooks/usePageAssets';

const ensureBlogLink = (list) => {
  if (!list) return;
  const hasBlog = Array.from(list.querySelectorAll('a')).some(
    (a) => a.textContent.trim().toLowerCase() === 'blogs'
  );
  if (hasBlog) return;
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '/blogs';
  a.textContent = 'Blogs';
  li.appendChild(a);
  list.appendChild(li);
};

const wireInteractions = (container) => {
  const cleanups = [];
  if (!container) return () => {};

  const menuToggle = container.querySelector('.menu_open');
  const navSlidebar = container.querySelector('.nav_slidebar');
  if (menuToggle && navSlidebar) {
    const toggleMenu = () => {
      menuToggle.classList.toggle('active');
      navSlidebar.classList.toggle('active');
      document.body.classList.toggle('scroll-disable');
    };
    const closeMenu = () => {
      menuToggle.classList.remove('active');
      navSlidebar.classList.remove('active');
      document.body.classList.remove('scroll-disable');
    };
    menuToggle.addEventListener('click', toggleMenu);
    cleanups.push(() => menuToggle.removeEventListener('click', toggleMenu));

    navSlidebar.querySelectorAll('a').forEach((anchor) => {
      const handler = () => closeMenu();
      anchor.addEventListener('click', handler);
      cleanups.push(() => anchor.removeEventListener('click', handler));
    });

    cleanups.push(() => closeMenu());
  }

  const dropdownArrows = container.querySelectorAll('.dropdown_arrow');
  dropdownArrows.forEach((arrow) => {
    const handler = () => {
      const parent = arrow.parentElement;
      const list = parent?.querySelector('ul');
      parent?.classList.toggle('active-dropdown');
      list?.classList.toggle('open');

      const siblings = parent?.parentElement?.querySelectorAll('li') || [];
      siblings.forEach((sib) => {
        if (sib !== parent) {
          sib.classList.remove('active-dropdown');
          sib.querySelectorAll('ul').forEach((ul) => ul.classList.remove('open'));
        }
      });
    };
    arrow.addEventListener('click', handler);
    cleanups.push(() => arrow.removeEventListener('click', handler));
  });

  const circles = container.querySelectorAll('.circle-indicator');
  circles.forEach((indicator) => {
    const handler = () => {
      const objectiveItem = indicator.closest('.objective-item');
      const content = objectiveItem?.querySelector('.objective-content');
      content?.classList.toggle('hidden');
    };
    indicator.addEventListener('click', handler);
    cleanups.push(() => indicator.removeEventListener('click', handler));
  });

  const seeMoreButtons = container.querySelectorAll('.see-more');
  seeMoreButtons.forEach((button) => {
    const handler = () => {
      container.querySelectorAll('.card.hidden').forEach((card) => {
        card.classList.remove('hidden');
      });
      button.style.display = 'none';
      button.closest('.see-more-wrapper')?.classList.add('hidden');
    };
    button.addEventListener('click', handler);
    cleanups.push(() => button.removeEventListener('click', handler));
  });

  return () => cleanups.forEach((fn) => fn && fn());
};

export default function StaticPage({ children, assetDir, manifest }) {
  const router = useRouter();
  const containerRef = useRef(null);

  usePageAssets(assetDir, manifest);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  useEffect(() => {
    const updateViewport = () => {
      document.documentElement.style.setProperty('--app-vh', `${window.innerHeight * 0.01}px`);
    };
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    const updateParallax = () => {
      const offset = window.scrollY * 0.2;
      document.documentElement.style.setProperty('--parallax-offset', `${offset}px`);
    };
    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    return () => window.removeEventListener('scroll', updateParallax);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return () => {};
    const cleanups = [];

    const anchors = container.querySelectorAll('a[href]');
    anchors.forEach((anchor) => {
      const originalHref = anchor.getAttribute('href');
      const route = resolveRoute(originalHref);
      if (!route) return;
      const handler = (event) => {
        event.preventDefault();
        router.push(route);
      };
      anchor.setAttribute('href', route);
      anchor.addEventListener('click', handler);
      cleanups.push(() => anchor.removeEventListener('click', handler));
    });

    const teardown = wireInteractions(container);
    cleanups.push(teardown);

    const navLists = container.querySelectorAll('.nav_logo > ul');
    if (navLists.length) {
      ensureBlogLink(navLists[navLists.length - 1]);
      navLists.forEach((ul, idx) => {
        if (idx < navLists.length - 1) {
          ul.querySelectorAll('a').forEach((a) => {
            if (a.textContent.trim().toLowerCase() === 'blogs') {
              a.closest('li')?.remove();
            }
          });
        }
      });
    }

    container.querySelectorAll('.top_bar').forEach((bar) => bar.remove());
    container.querySelectorAll('.courtesy_bar').forEach((bar) => bar.remove());

    return () => {
      cleanups.forEach((fn) => fn && fn());
      document.body.classList.remove('scroll-disable');
    };
  }, [children, router]);

  return (
    <div className="page-shell">
      <div ref={containerRef}>{children}</div>
    </div>
  );
}
