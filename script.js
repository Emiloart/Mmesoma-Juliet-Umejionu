/* Portfolio of Mmesoma Juliet Umejionu
   1. Content settings
   2. Navigation, scroll progress and section highlighting
   3. Reveal on scroll
   4. Hero image fallback
   5. Video gallery
   6. Contact actions
*/

'use strict';

/* ------------------------------------------------------------------ */
/* 1. Content settings                                                 */
/* ------------------------------------------------------------------ */

const CONTACT_EMAIL = 'umejionummesoma@gmail.com';
const INITIAL_VIDEOS = 6;

/* Project videos.
   Replace each placeholder title when the final titles are ready.
   Add an optional category (for example 'analytics' or 'automation') to a
   video and filter buttons appear automatically once two or more different
   categories exist. */
const VIDEOS = [
  { id: '6cr7xY70Gbw', title: 'Data Project 01' },
  { id: 'FGUepxM2JPc', title: 'Data Project 02' },
  { id: 'BPMeYmodfII', title: 'Data Project 03' },
  { id: 'Ae2dbQKA-n0', title: 'Data Project 04' },
  { id: 'Mnw5T2CoOK8', title: 'Data Project 05' },
  { id: '0i11C_XlCMc', title: 'Data Project 06' },
  { id: 'aZPALVSfRQc', title: 'Data Project 07' },
  { id: '4d7VwF-kYRM', title: 'Data Project 08' },
  { id: 'oYPmA08tTwI', title: 'Data Project 09' },
  { id: '6BRyiOO3ajM', title: 'Data Project 10' },
  { id: '_QHAimIUeEw', title: 'Data Project 11' },
  { id: 'yXS4RyGsw_E', title: 'Data Project 12' },
  { id: 'TXB3xIbZ6Rk', title: 'Data Project 13' },
  { id: 'CEQBIbH-llE', title: 'Data Project 14' },
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));

/* ------------------------------------------------------------------ */
/* 2. Navigation, scroll progress and section highlighting             */
/* ------------------------------------------------------------------ */

const header = $('.site-header');
const navToggle = $('.nav-toggle');
const navMenu = $('#nav-menu');
const navBackdrop = $('.nav-backdrop');
const progressBar = $('.scroll-progress span');
const toTop = $('.to-top');
const MOBILE_BREAKPOINT = 860;

function setMenu(open) {
  if (!navToggle || !navMenu) return;
  navMenu.classList.toggle('open', open);
  if (navBackdrop) navBackdrop.classList.toggle('show', open);
  document.body.classList.toggle('menu-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    setMenu(!navMenu.classList.contains('open'));
  });

  $$('a', navMenu).forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  if (navBackdrop) navBackdrop.addEventListener('click', () => setMenu(false));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('open')) {
      setMenu(false);
      navToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) setMenu(false);
  });
}

/* Scroll progress, header shadow and back to top button */
let scrollQueued = false;

function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;

  if (progressBar) {
    progressBar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
  }
  if (header) header.classList.toggle('scrolled', y > 8);
  if (toTop) toTop.classList.toggle('show', y > 700);

  /* The last section is short on some screens, so highlight it at the page end */
  if (max > 0 && y >= max - 4) setActiveLink('contact');

  scrollQueued = false;
}

window.addEventListener(
  'scroll',
  () => {
    if (!scrollQueued) {
      scrollQueued = true;
      window.requestAnimationFrame(onScroll);
    }
  },
  { passive: true }
);

if (toTop) {
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Highlight the nav link for the section currently in view */
const navLinks = new Map(
  $$('.nav-link').map((link) => [link.getAttribute('href').slice(1), link])
);

function setActiveLink(id) {
  navLinks.forEach((link, key) => {
    const active = key === id;
    link.classList.toggle('active', active);
    if (active) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  ['hero', 'about', 'experience', 'work', 'videos', 'contact'].forEach((id) => {
    const section = document.getElementById(id);
    if (section) spy.observe(section);
  });
}

onScroll();

/* ------------------------------------------------------------------ */
/* 3. Reveal on scroll                                                 */
/* ------------------------------------------------------------------ */

const revealElements = $$('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

/* ------------------------------------------------------------------ */
/* 4. Hero image fallback                                              */
/* ------------------------------------------------------------------ */

const heroImage = $('#heroImage');
const portraitFrame = $('#portraitFrame');

if (heroImage && portraitFrame) {
  let triedFallback = false;

  const handleImageFailure = () => {
    const fallback = heroImage.dataset.fallback;
    if (!triedFallback && fallback) {
      triedFallback = true;
      heroImage.src = fallback;
    } else {
      portraitFrame.classList.add('img-failed');
    }
  };

  heroImage.addEventListener('error', handleImageFailure);

  /* The error may already have fired before this script ran */
  if (heroImage.complete && heroImage.naturalWidth === 0) handleImageFailure();
}

/* ------------------------------------------------------------------ */
/* 5. Video gallery                                                    */
/* ------------------------------------------------------------------ */

const videoGrid = $('#videoGrid');
const videoFilters = $('#videoFilters');
const videoMore = $('#videoMore');
const videoCount = $('#videoCount');

if (videoGrid) {
  const state = { filter: 'all', expanded: false };
  const capitalise = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  const cards = VIDEOS.map((video) => {
    const card = document.createElement('article');
    card.className = 'video-card';
    if (video.category) card.dataset.category = video.category;

    const title = escapeHtml(video.title);
    const kind = video.category ? capitalise(video.category) : 'Project walkthrough';

    card.innerHTML =
      '<div class="video-embed">' +
      '<button type="button" class="video-play" data-id="' + video.id + '" data-title="' + title + '" aria-label="Play video: ' + title + '">' +
      '<img src="https://i.ytimg.com/vi/' + video.id + '/hqdefault.jpg" alt="" loading="lazy" decoding="async" />' +
      '<span class="play-icon" aria-hidden="true"></span>' +
      '</button>' +
      '</div>' +
      '<div class="video-info">' +
      '<h3>' + title + '</h3>' +
      '<p>' + escapeHtml(kind) + '</p>' +
      '<a class="video-link" href="https://youtu.be/' + video.id + '" target="_blank" rel="noopener">Watch on YouTube</a>' +
      '</div>';

    const thumb = card.querySelector('img');
    thumb.addEventListener('error', () => thumb.remove());

    videoGrid.appendChild(card);
    return card;
  });

  /* Load the player only when a video is chosen, one at a time */
  let activeEmbed = null;

  videoGrid.addEventListener('click', (event) => {
    const button = event.target.closest('.video-play');
    if (!button) return;

    if (activeEmbed) {
      activeEmbed.container.replaceChildren(activeEmbed.button);
      activeEmbed = null;
    }

    const container = button.parentElement;
    const frame = document.createElement('iframe');
    frame.src =
      'https://www.youtube-nocookie.com/embed/' + button.dataset.id + '?autoplay=1&rel=0&playsinline=1';
    frame.title = button.dataset.title;
    frame.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;

    container.replaceChildren(frame);
    activeEmbed = { container, button };
  });

  /* Filters appear only when videos carry two or more categories */
  const categories = Array.from(new Set(VIDEOS.map((v) => v.category).filter(Boolean)));

  if (videoFilters && categories.length > 1) {
    videoFilters.hidden = false;
    videoFilters.innerHTML = ['all'].concat(categories)
      .map(
        (name) =>
          '<button type="button" class="filter-btn' + (name === 'all' ? ' active' : '') +
          '" data-filter="' + escapeHtml(name) + '">' +
          (name === 'all' ? 'All' : escapeHtml(capitalise(name))) + '</button>'
      )
      .join('');

    videoFilters.addEventListener('click', (event) => {
      const button = event.target.closest('.filter-btn');
      if (!button) return;
      state.filter = button.dataset.filter;
      state.expanded = false;
      $$('.filter-btn', videoFilters).forEach((btn) => btn.classList.toggle('active', btn === button));
      applyVideoView();
    });
  }

  function applyVideoView() {
    const matching = cards.filter(
      (card) => state.filter === 'all' || card.dataset.category === state.filter
    );

    cards.forEach((card) => {
      card.hidden = true;
    });

    let shown = 0;
    matching.forEach((card, index) => {
      const visible = state.expanded || index < INITIAL_VIDEOS;
      card.hidden = !visible;
      if (visible) shown += 1;
    });

    if (videoMore) {
      const needsToggle = matching.length > INITIAL_VIDEOS;
      videoMore.hidden = !needsToggle;
      videoMore.setAttribute('aria-expanded', String(state.expanded));
      videoMore.textContent = state.expanded
        ? 'Show fewer videos'
        : 'Show all ' + matching.length + ' videos';
    }

    if (videoCount) {
      videoCount.textContent = 'Showing ' + shown + ' of ' + matching.length + ' videos';
    }
  }

  if (videoMore) {
    videoMore.addEventListener('click', () => {
      state.expanded = !state.expanded;
      applyVideoView();
      if (!state.expanded) {
        const section = document.getElementById('videos');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  applyVideoView();
}

/* ------------------------------------------------------------------ */
/* 6. Contact actions                                                  */
/* ------------------------------------------------------------------ */

const yearEl = $('#year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const copyButton = $('#copyEmail');

if (copyButton) {
  const originalLabel = copyButton.textContent;

  const flash = (message) => {
    copyButton.textContent = message;
    window.setTimeout(() => {
      copyButton.textContent = originalLabel;
    }, 2000);
  };

  copyButton.addEventListener('click', () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(CONTACT_EMAIL).then(
        () => flash('Copied'),
        () => flash('Copy failed')
      );
      return;
    }

    const field = document.createElement('textarea');
    field.value = CONTACT_EMAIL;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    let copied = false;
    try {
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    }
    document.body.removeChild(field);
    flash(copied ? 'Copied' : 'Copy failed');
  });
}

const contactForm = $('.contact-form');
const formStatus = $('#formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const message = $('#message').value.trim();

    const subject = 'Portfolio enquiry from ' + name;
    const body = message + '\n\nFrom: ' + name + '\nReply to: ' + email;

    window.location.href =
      'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    if (formStatus) {
      formStatus.textContent =
        'Your email app should open with the message ready to send. If it does not, write to ' +
        CONTACT_EMAIL + ' directly.';
    }
  });
}
