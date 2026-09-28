/* Portfolio interactions: navigation, video gallery, reveal effects and contact actions. */
'use strict';

const CONTACT_EMAIL = 'umejionummesoma@gmail.com';
const INITIAL_VIDEOS = 6;
const VIDEOS = [
  { id: '6cr7xY70Gbw', title: 'Project Walkthrough 01' },
  { id: 'FGUepxM2JPc', title: 'Project Walkthrough 02' },
  { id: 'BPMeYmodfII', title: 'Project Walkthrough 03' },
  { id: 'Ae2dbQKA-n0', title: 'Project Walkthrough 04' },
  { id: 'Mnw5T2CoOK8', title: 'Project Walkthrough 05' },
  { id: '0i11C_XlCMc', title: 'Project Walkthrough 06' },
  { id: 'aZPALVSfRQc', title: 'Project Walkthrough 07' },
  { id: '4d7VwF-kYRM', title: 'Project Walkthrough 08' },
  { id: 'oYPmA08tTwI', title: 'Project Walkthrough 09' },
  { id: '6BRyiOO3ajM', title: 'Project Walkthrough 10' },
  { id: '_QHAimIUeEw', title: 'Project Walkthrough 11' },
  { id: 'yXS4RyGsw_E', title: 'Project Walkthrough 12' },
  { id: 'TXB3xIbZ6Rk', title: 'Project Walkthrough 13' },
  { id: 'CEQBIbH-llE', title: 'Project Walkthrough 14' }
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/* Mobile navigation */
const navToggle = $('.nav-toggle');
const navMenu = $('#nav-menu');

function setMenu(open) {
  if (!navToggle || !navMenu) return;
  navMenu.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('open')));
  $$('a', navMenu).forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) setMenu(false);
  });
}

/* Scroll progress and active section link */
const progressBar = $('.scroll-progress span');
let scrollQueued = false;

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) {
    scrollQueued = true;
    window.requestAnimationFrame(onScroll);
  }
}, { passive: true });
onScroll();

const navLinks = new Map($$('.nav-link').map((link) => [link.getAttribute('href').slice(1), link]));
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link, id) => {
        const active = id === entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  ['hero', 'about', 'skills', 'experience', 'work', 'videos', 'education', 'contact'].forEach((id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });
}

/* Reveal sections on scroll, with a graceful fallback */
const revealElements = $$('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

/* Video gallery: defer YouTube embeds until a user chooses to play */
const videoGrid = $('#videoGrid');
const videoFilters = $('#videoFilters');
const videoMore = $('#videoMore');
const videoCount = $('#videoCount');

if (videoGrid) {
  const state = { expanded: false };
  const cards = VIDEOS.map((video, index) => {
    const card = document.createElement('article');
    card.className = 'video-card';
    const embed = document.createElement('div');
    embed.className = 'video-embed';
    const play = document.createElement('button');
    play.type = 'button';
    play.className = 'video-play';
    play.setAttribute('aria-label', 'Play ' + video.title);
    play.dataset.videoId = video.id;
    const thumb = document.createElement('img');
    thumb.src = 'https://i.ytimg.com/vi/' + video.id + '/hqdefault.jpg';
    thumb.alt = '';
    thumb.loading = 'lazy';
    thumb.decoding = 'async';
    thumb.addEventListener('error', () => { thumb.hidden = true; });
    const playIcon = document.createElement('span');
    playIcon.className = 'play-icon';
    playIcon.setAttribute('aria-hidden', 'true');
    play.append(thumb, playIcon);
    embed.append(play);

    const info = document.createElement('div');
    info.className = 'video-info';
    const title = document.createElement('h3');
    title.textContent = video.title;
    const label = document.createElement('p');
    label.textContent = 'Portfolio video ' + String(index + 1).padStart(2, '0');
    const link = document.createElement('a');
    link.className = 'video-link';
    link.href = 'https://youtu.be/' + video.id;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Watch on YouTube';
    info.append(title, label, link);
    card.append(embed, info);
    videoGrid.append(card);
    return card;
  });

  function updateVideoView() {
    let shown = 0;
    cards.forEach((card, index) => {
      const visible = state.expanded || index < INITIAL_VIDEOS;
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    if (videoCount) videoCount.textContent = 'Showing ' + shown + ' of ' + cards.length + ' videos';
    if (videoMore) {
      videoMore.hidden = cards.length <= INITIAL_VIDEOS;
      videoMore.textContent = state.expanded ? 'Show fewer videos' : 'Show all ' + cards.length + ' videos';
      videoMore.setAttribute('aria-expanded', String(state.expanded));
    }
  }

  videoGrid.addEventListener('click', (event) => {
    const button = event.target.closest('.video-play');
    if (!button) return;
    const wrapper = button.closest('.video-embed');
    const frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.videoId + '?autoplay=1&rel=0&playsinline=1';
    frame.title = 'Portfolio video player';
    frame.loading = 'lazy';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    wrapper.replaceChildren(frame);
  });

  if (videoMore) {
    videoMore.addEventListener('click', () => {
      state.expanded = !state.expanded;
      updateVideoView();
      if (!state.expanded) {
        const section = $('#videos');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
  updateVideoView();
}

/* Copy email address */
const copyButton = $('#copyEmail');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const original = copyButton.textContent;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
      } else {
        const input = document.createElement('textarea');
        input.value = CONTACT_EMAIL;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.append(input);
        input.select();
        const success = document.execCommand('copy');
        input.remove();
        if (!success) throw new Error('Clipboard copy failed');
      }
      copyButton.textContent = 'Copied';
    } catch (error) {
      copyButton.textContent = 'Copy unavailable';
    }
    window.setTimeout(() => { copyButton.textContent = original; }, 1800);
  });
}

/* Contact form opens the visitor's email client */
const contactForm = $('.contact-form');
const formStatus = $('#formStatus');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const message = $('#message').value.trim();
    if (!name || !email || !message) return;
    const subject = 'Portfolio enquiry from ' + name;
    const body = message + '\n\nFrom: ' + name + '\nReply to: ' + email;
    if (formStatus) formStatus.textContent = 'Opening your email app. If it does not open, email ' + CONTACT_EMAIL + ' directly.';
    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
}

const year = $('#year');
if (year) year.textContent = String(new Date().getFullYear());
