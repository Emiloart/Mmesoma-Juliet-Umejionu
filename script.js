* {
  box-sizing: border-box;
}

:root {
  --bg: #f5f1eb;
  --bg-soft: #f8f6f1;
  --surface: #ffffff;
  --surface-alt: #f2efe9;
  --ink: #191c2a;
  --muted: #5b6476;
  --line: rgba(25, 28, 42, 0.08);
  --navy: #14213d;
  --navy-deep: #0e172d;
  --blue: #2a5bd7;
  --blue-soft: rgba(42, 91, 215, 0.1);
  --gold: #d4b26a;
  --gold-soft: rgba(212, 178, 106, 0.12);
  --shadow: 0 24px 60px rgba(14, 23, 45, 0.12);
  --radius-lg: 22px;
  --radius-md: 16px;
  --radius-sm: 12px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: "Inter", sans-serif;
  line-height: 1.7;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 112px 0;
}

.eyebrow {
  margin: 0 0 18px;
  font-size: 0.76rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--gold);
}

.eyebrow.dark {
  color: var(--blue);
}

.section-heading {
  margin-bottom: 42px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--navy);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(20, 33, 61, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), #f1d59d);
  color: var(--navy-deep);
  font-size: 0.8rem;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-menu a {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.92rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-menu a:hover {
  color: #fff;
}

.nav-button,
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-button,
.button.primary {
  background: linear-gradient(135deg, var(--blue), #1f4dc9);
  color: #fff;
  box-shadow: 0 18px 30px rgba(42, 91, 215, 0.25);
}

.button.secondary {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}

.button:hover,
.nav-button:hover {
  transform: translateY(-1px);
}

.nav-toggle {
  display: none;
  width: 46px;
  height: 46px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: #fff;
  margin: 5px auto;
  border-radius: 999px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--navy-deep), var(--navy));
  padding: 96px 0 80px;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.5;
  pointer-events: none;
}

.hero-glow-one {
  width: 480px;
  height: 480px;
  right: -80px;
  top: -80px;
  background: rgba(42, 91, 215, 0.31);
}

.hero-glow-two {
  width: 420px;
  height: 420px;
  left: -30px;
  bottom: -60px;
  background: rgba(212, 178, 106, 0.2);
}

.hero-layout {
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.hero-copy h1 {
  margin: 0;
  color: #fff;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.hero-copy h1 span {
  color: var(--gold);
}

.lead {
  max-width: 620px;
  margin: 22px 0 0;
  color: rgba(255, 255, 255, 0.74);
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.hero-metrics {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  padding: 0;
  margin: 36px 0 0;
}

.hero-metrics li {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 120px;
  color: rgba(255, 255, 255, 0.8);
}

.hero-metrics strong {
  font-size: 1.7rem;
  color: #fff;
  line-height: 1.1;
}

.hero-panel {
  position: relative;
  z-index: 1;
}

.profile-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-lg);
  padding: 22px;
  box-shadow: var(--shadow);
}

.profile-photo-wrap {
  overflow: hidden;
  border-radius: 18px;
  background: #dfe8fb;
  aspect-ratio: 4 / 5;
}

.profile-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-details {
  padding-top: 18px;
}

.status {
  display: inline-block;
  background: rgba(212, 178, 106, 0.12);
  border: 1px solid rgba(212, 178, 106, 0.25);
  color: #f7d99a;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.profile-details h2 {
  margin: 14px 0 0;
  color: #fff;
  font-size: clamp(1.7rem, 3vw, 2.2rem);
  line-height: 1.15;
}

.profile-details p {
  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.7);
}

.about {
  background: var(--bg-soft);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: start;
}

.about-copy p {
  margin: 0 0 20px;
  color: var(--muted);
  font-size: 1.02rem;
}

.info-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 28px;
  box-shadow: 0 18px 40px rgba(17, 24, 39, 0.04);
}

.info-card h3 {
  margin: 0 0 20px;
  color: var(--navy);
  font-size: 1.2rem;
}

.info-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
  color: var(--muted);
}

.info-card li {
  position: relative;
  padding-left: 18px;
}

.info-card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--blue);
}

.experience {
  background: var(--surface);
}

.timeline {
  display: grid;
  gap: 28px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 28px;
  padding: 28px 26px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: linear-gradient(180deg, #fff, #faf8f4);
}

.timeline-date {
  color: var(--blue);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.timeline-content h3 {
  margin: 0;
  color: var(--navy);
  font-size: 1.38rem;
}

.timeline-meta {
  margin: 8px 0 16px;
  color: var(--muted);
  font-weight: 600;
}

.timeline-content ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
}

.timeline-content li + li {
  margin-top: 10px;
}

.projects {
  background: var(--bg-soft);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.project-card {
  padding: 26px 22px;
  border-radius: var(--radius-md);
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: 0 18px 40px rgba(17, 24, 39, 0.03);
}

.project-tag {
  display: inline-block;
  background: var(--blue-soft);
  color: var(--blue);
  border-radius: 999px;
  padding: 0.4rem 0.7rem;
  font-size: 0.72rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 700;
}

.project-card h3 {
  margin: 18px 0 10px;
  color: var(--navy);
  font-size: 1.35rem;
}

.project-card p {
  margin: 0 0 18px;
  color: var(--muted);
}

.project-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
}

.project-card li + li {
  margin-top: 8px;
}

.media {
  background: var(--surface);
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
}

.filter-btn {
  border: 1px solid var(--line);
  background: var(--surface-alt);
  color: var(--navy);
  border-radius: 999px;
  padding: 0.7rem 1rem;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s ease;
}

.filter-btn.active {
  background: var(--navy);
  color: #fff;
  border-color: var(--navy);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.video-card {
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--surface);
  border: 1px solid var(--line);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(17, 24, 39, 0.06);
}

.video-card.hidden {
  display: none;
}

.video-frame {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: #000;
}

.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-info {
  padding: 20px 18px 22px;
}

.video-info h3 {
  margin: 0 0 8px;
  color: var(--navy);
  font-size: 1.1rem;
  line-height: 1.35;
}

.video-info p {
  margin: 0;
  color: var(--muted);
  font-size: 0.94rem;
}

.contact {
  background: linear-gradient(180deg, #f8f6f1, #f4efe9);
}

.contact-layout {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 28px;
}

.contact-card,
.contact-form {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 28px;
}

.contact-item {
  display: grid;
  gap: 8px;
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
}

.contact-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.contact-item label {
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-item a,
.contact-item span {
  color: var(--navy);
  font-weight: 600;
}

.contact-form {
  display: grid;
  gap: 18px;
}

.form-row {
  display: grid;
  gap: 8px;
}

.form-row label {
  color: var(--muted);
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.form-row input,
.form-row textarea {
  width: 100%;
  border: 1px solid var(--line);
  background: #f9f8f6;
  border-radius: 12px;
  padding: 0.9rem 1rem;
  color: var(--ink);
  resize: vertical;
  outline: none;
}

.form-row input:focus,
.form-row textarea:focus {
  border-color: rgba(42, 91, 215, 0.45);
  box-shadow: 0 0 0 4px rgba(42, 91, 215, 0.08);
}

.submit-button {
  border: none;
  width: fit-content;
  cursor: pointer;
}

.site-footer {
  background: var(--navy-deep);
  color: rgba(255, 255, 255, 0.7);
  padding: 20px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-inner p {
  margin: 0;
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .hero-layout,
  .about-grid,
  .contact-layout,
  .project-grid,
  .video-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

@media (max-width: 720px) {
  .nav-toggle {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(20, 33, 61, 0.98);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 18px 16px 24px;
    gap: 16px;
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-button {
    width: 100%;
    justify-content: center;
  }

  .hero {
    padding-top: 72px;
  }

  .section {
    padding: 88px 0;
  }
}

@media (max-width: 520px) {
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .button,
  .nav-button {
    width: 100%;
  }

  .hero-metrics {
    gap: 18px;
  }
}
