import manifest from './assetManifest.json';

import home from './content/home.html?raw';
import aboutUs from './content/about-us.html?raw';
import ourAim from './content/our-aim.html?raw';
import bookAboutUs from './content/book-about-us.html?raw';
import bookHome from './content/book-home.html?raw';
import bookForRam from './content/book-for-ram.html?raw';
import ramayanManch from './content/ramayan-manch.html?raw';
import ourWorkForSita from './content/our-work-for-sita.html?raw';
import mahakumbh from './content/mahakumbh.html?raw';
import events from './content/events.html?raw';
import press from './content/press.html?raw';
import printMedia from './content/print-media-coverage.html?raw';
import printGallery from './content/print-gallery.html?raw';
import galleryVideo from './content/gallery-video.html?raw';
import ourTeam from './content/our-team.html?raw';
import otherTeam from './content/other-team.html?raw';
import santMandal from './content/sant-mandal.html?raw';
import sitaSamiti from './content/sita-samiti.html?raw';
import stateTeam from './content/state-team.html?raw';
import advisors from './content/advisors.html?raw';
import letterToModi from './content/letter-to-modi.html?raw';
import message from './content/message.html?raw';
import blogs from './content/blogs.html?raw';

export const pages = [
  { path: '/', slug: 'home', title: 'रामायण रिसर्च काउंसिल', html: home, assetDir: 'रामायण रिसर्च काउंसिल_files' },
  { path: '/about-us', slug: 'about-us', title: 'About Us', html: aboutUs, assetDir: 'about us_files' },
  { path: '/our-aim', slug: 'our-aim', title: 'Our Aim', html: ourAim, assetDir: 'about us 2_files' },
  { path: '/book-about-us', slug: 'book-about-us', title: 'Book • About Us', html: bookAboutUs, assetDir: 'book about us _files' },
  { path: '/book', slug: 'book-home', title: 'Book • Home', html: bookHome, assetDir: 'book.com_files' },
  { path: '/book-for-ram', slug: 'book-for-ram', title: 'Book For Ram', html: bookForRam, assetDir: 'book for ram_files' },
  { path: '/ramayan-manch', slug: 'ramayan-manch', title: 'Ramayan Manch', html: ramayanManch, assetDir: 'ramayan manch _files' },
  { path: '/our-work-for-sita', slug: 'our-work-for-sita', title: 'Our Work For Sita', html: ourWorkForSita, assetDir: 'our work for sita_files' },
  { path: '/mahakumbh', slug: 'mahakumbh', title: 'Mahakumbh', html: mahakumbh, assetDir: 'mahakumbh_files' },
  { path: '/events', slug: 'events', title: 'Events', html: events, assetDir: 'events_files' },
  { path: '/press', slug: 'press', title: 'Press', html: press, assetDir: 'press_files' },
  { path: '/print-media-coverage', slug: 'print-media-coverage', title: 'Print Media Coverage', html: printMedia, assetDir: 'print media coverage _files' },
  { path: '/print-gallery', slug: 'print-gallery', title: 'Print Gallery', html: printGallery, assetDir: 'print gallery_files' },
  { path: '/gallery-video', slug: 'gallery-video', title: 'Gallery • Video', html: galleryVideo, assetDir: 'gallery video_files' },
  { path: '/our-team', slug: 'our-team', title: 'Our Team', html: ourTeam, assetDir: 'our team main_files' },
  { path: '/other-team', slug: 'other-team', title: 'Researchers Team', html: otherTeam, assetDir: 'other team_files' },
  { path: '/sant-mandal', slug: 'sant-mandal', title: 'Sant Mandal', html: santMandal, assetDir: 'sant mandal_files' },
  { path: '/sita-samiti', slug: 'sita-samiti', title: 'Sita Samiti', html: sitaSamiti, assetDir: 'sita samiti_files' },
  { path: '/state-team', slug: 'state-team', title: 'State Team', html: stateTeam, assetDir: 'state team_files' },
  { path: '/advisors', slug: 'advisors', title: 'Advisors', html: advisors, assetDir: 'advisors_files' },
  { path: '/letter-to-modi', slug: 'letter-to-modi', title: 'Letter To Modi', html: letterToModi, assetDir: 'letter to modi_files' },
  { path: '/message', slug: 'message', title: 'Message', html: message, assetDir: 'message _files' },
  { path: '/blogs', slug: 'blogs', title: 'Blogs', html: blogs, assetDir: 'about us_files' },
];

export { manifest };
