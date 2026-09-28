# Mmesoma Juliet Umejionu — Portfolio

A clean, modern portfolio website for a Data Analyst & AI Automation Specialist. Showcasing projects, skills, and featured video content with a professional, responsive design.

## Features

- **Professional Design**: Clean, neutral palette with a polished aesthetic
- **Hero Section**: Eye-catching introduction with profile image and call-to-action buttons
- **Project Showcase**: 3 featured projects with descriptions and key outcomes
- **Video Gallery**: Embedded YouTube videos with category filtering (Analytics/Automation)
- **Contact Form**: Simple, functional form for getting in touch
- **Responsive Layout**: Fully responsive design for desktop, tablet, and mobile
- **Smooth Animations**: Reveal-on-scroll effects for better engagement
- **Separate Files**: HTML, CSS, and JavaScript properly separated

## Project Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # All CSS styling
├── script.js       # JavaScript interactivity
└── README.md       # This file
```

## Quick Start

### Option 1: Open Directly
Simply open `index.html` in your browser.

### Option 2: Local Server
For better performance, use a local server:

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

```bash
# Python 2
python -m SimpleHTTPServer 8000
```

```bash
# Node.js (if you have http-server installed)
http-server
```

## Customization

### Update Profile Image
Replace the image URL in the hero section:
```html
<img src="https://your-image-url.jpg" alt="Your Name" />
```

### Change Contact Email
Update in the contact section:
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
```

### Add More Projects
Duplicate a `.project-card` and update the content:
```html
<article class="project-card reveal">
  <div class="project-tag">Category</div>
  <h3>Project Title</h3>
  <p>Description</p>
  <ul class="outcomes">
    <li>Result 1</li>
    <li>Result 2</li>
  </ul>
</article>
```

### Add More Videos
Duplicate a `.video-card` with the desired category:
```html
<article class="video-card reveal" data-category="analytics">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
  </div>
  <div class="video-info">
    <h3>Video Title</h3>
    <p>Category • Subcategory</p>
  </div>
</article>
```

## Color Scheme

- **Primary Dark**: `#0f1419`
- **Accent Blue**: `#2563eb`
- **Text Primary**: `#1a1a2e`
- **Text Secondary**: `#6b7280`
- **Background Light**: `#f9fafb`
- **Background White**: `#ffffff`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Images**: Use optimized images or services like Imgix, Cloudinary for hero images
2. **Videos**: YouTube embeds are optimized; consider lazy loading for off-screen videos
3. **CSS**: The CSS file is minimal (~8KB) and loads quickly
4. **JavaScript**: Only ~2KB of vanilla JS; no frameworks or dependencies

## License

This portfolio template is created for Mmesoma Juliet Umejionu.

## Questions?

For support or customization, reach out to the portfolio owner.
