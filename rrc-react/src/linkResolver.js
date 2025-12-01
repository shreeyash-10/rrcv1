const coreFileToRoute = {
  'index.html': '/',
  'about-us-copy.html': '/about-us',
  'about-us.html': '/about-us',
  'about us.html': '/about-us',
  'about us 2.html': '/our-aim',
  'our-aim.html': '/our-aim',
  'ramayan research council.html': '/',
  'रामायण रिसर्च काउंसिल.html': '/',
  'book about us .html': '/book-about-us',
  'book.com.html': '/book',
  'book for ram.html': '/book-for-ram',
  'ramayan manch .html': '/ramayan-manch',
  'ramayan-manch.html': '/ramayan-manch',
  'our work for sita.html': '/our-work-for-sita',
  'mahakumbh.html': '/mahakumbh',
  'events.html': '/events',
  'press.html': '/press',
  'print media coverage .html': '/print-media-coverage',
  'print gallery.html': '/print-gallery',
  'printgallery.html': '/print-gallery',
  'videogallery.html': '/gallery-video',
  'gallery video.html': '/gallery-video',
  'photogallery.html': '/print-gallery',
  'president.html': '/message',
  'message .html': '/message',
  'letter to modi.html': '/letter-to-modi',
  'blog.html': '/blogs',
  'blogs.html': '/blogs',
  'teammember.html': '/our-team',
  'our team main.html': '/our-team',
  'sitasakhisamethi.html': '/sita-samiti',
  'sita samiti.html': '/sita-samiti',
  'santsanrakshakmandal.html': '/sant-mandal',
  'sant mandal.html': '/sant-mandal',
  'reaserchersteam.html': '/other-team',
  'other team.html': '/other-team',
  'stateteam.html': '/state-team',
  'state team.html': '/state-team',
  'advisorteam.html': '/advisors',
  'advisors.html': '/advisors',
  'emptyPage.html': '/',
};

const hostOverrides = {
  'rammandirbook.com': {
    'index.html': '/book',
    'about-us.html': '/book-about-us',
    'about-us-copy.html': '/book-about-us',
    'our-aim.html': '/book-about-us',
  },
  'mahakumbhinfo.com': {
    'index.html': '/mahakumbh',
    'about-us.html': '/mahakumbh',
    'about-us-copy.html': '/mahakumbh',
    'press.html': '/press',
    'printgallery.html': '/print-media-coverage',
  },
  'ramayanmanch.com': {
    'index.html': '/ramayan-manch',
    'about-us.html': '/ramayan-manch',
    'about-us-copy.html': '/ramayan-manch',
  },
  'maasita.com': {
    'index.html': '/our-work-for-sita',
    'about-us.html': '/our-work-for-sita',
    'about-us-copy.html': '/our-work-for-sita',
    'press.html': '/press',
    'printgallery.html': '/print-gallery',
  },
  'alettertonarendramodi.com': {
    'index.html': '/letter-to-modi',
    'about-us.html': '/letter-to-modi',
    'about-us-copy.html': '/letter-to-modi',
    'press.html': '/press',
  },
};

const knownRoutes = new Set([
  ...Object.values(coreFileToRoute),
  ...Object.values(hostOverrides).flatMap((obj) => Object.values(obj)),
]);

const isIgnored = (href) =>
  !href ||
  href.startsWith('#') ||
  href.startsWith('mailto:') ||
  href.startsWith('tel:') ||
  href.startsWith('javascript:');

export function resolveRoute(href) {
  if (isIgnored(href)) return null;
  const trimmed = href.trim();
  const cleanRoute = trimmed.split('#')[0];
  if (cleanRoute.startsWith('/') && knownRoutes.has(cleanRoute)) {
    return cleanRoute;
  }

  let filename = '';
  let host = '';
  try {
    const url = new URL(trimmed, window.location.origin);
    host = (url.hostname || '').replace(/^www\\./, '');
    filename = decodeURIComponent((url.pathname.split('/').pop() || '').toLowerCase());
    if (!filename && url.pathname === '/') filename = 'index.html';
  } catch (err) {
    filename = decodeURIComponent((trimmed.split('/').pop() || '').toLowerCase());
  }

  if (host && hostOverrides[host] && hostOverrides[host][filename]) {
    return hostOverrides[host][filename];
  }
  if (coreFileToRoute[filename]) {
    return coreFileToRoute[filename];
  }
  return null;
}
