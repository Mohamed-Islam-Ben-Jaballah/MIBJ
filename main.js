// ========================================
//  MIBJ Portfolio — Main JavaScript
// ========================================


// ---- Particle Background ----
(function () {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.floor((w * h) / 18000);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(100, 255, 218, 0.5)';
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    });

    // Draw connections between nearby particles
    ctx.strokeStyle = 'rgba(100, 255, 218, 0.06)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = dx * dx + dy * dy;
        if (dist < 14000) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
})();


// ---- Navbar Hide/Show on Scroll ----
(function () {
  let lastScroll = 0;
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    const curr = window.scrollY;
    if (curr > lastScroll && curr > 80) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastScroll = curr;
  });
})();


// ---- Mobile Menu ----
(function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
})();


// ---- Scroll Reveal ----
(function () {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
})();


// ---- Active Nav Highlight ----
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a:not(.cta-btn)');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 200) current = sec.getAttribute('id');
    });
    navAs.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });
})();


// ---- Lightbox / Modal ----
(function () {
  const overlay = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  const titleEl = document.getElementById('lightboxTitle');
  const typeEl  = document.getElementById('lightboxType');
  const closeBtn = document.getElementById('lightboxClose');

  const typeLabels = {
    video: '▶  Video',
    image: '🖼  Image',
    pdf: '📄  PDF Document',
    presentation: '📊  Presentation',
    iframe: '🌐  External Content'
  };

  function openLightbox(card) {
    const type = card.dataset.mediaType;
    const src  = card.dataset.mediaSrc;
    const title = card.dataset.mediaTitle || '';

    content.innerHTML = '';
    titleEl.textContent = title;
    typeEl.textContent = typeLabels[type] || type;

    // Helper: extract YouTube video ID
    function getYouTubeId(url) {
      const shortMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
      const longMatch  = url.match(/[?&]v=([A-Za-z0-9_-]{11})/);
      return (shortMatch && shortMatch[1]) || (longMatch && longMatch[1]) || null;
    }

    let el;
    switch (type) {
      case 'video': {
        const ytId = getYouTubeId(src);
        if (ytId) {
          el = document.createElement('iframe');
          el.src = `https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1&playsinline=1`;
          el.title = title;
          el.allowFullscreen = true;
          el.setAttribute('frameborder', '0');
          el.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
          el.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        } else {
          el = document.createElement('video');
          el.src = src;
          el.controls = true;
          el.autoplay = true;
          el.playsInline = true;
        }
        break;
      }

      case 'image':
        el = document.createElement('img');
        el.src = src;
        el.alt = title;
        break;

      case 'pdf':
        el = document.createElement('iframe');
        el.src = src + '#toolbar=0&navpanes=0&scrollbar=0';
        el.setAttribute('frameborder', '0');
        break;

      case 'presentation':
      case 'iframe':
        el = document.createElement('iframe');
        el.src = src;
        el.allowFullscreen = true;
        el.setAttribute('frameborder', '0');
        break;

      default:
        el = document.createElement('iframe');
        el.src = src;
        break;
    }

    content.appendChild(el);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Stop media playback
    setTimeout(() => { content.innerHTML = ''; }, 350);
  }

  // Click handlers on portfolio cards
  document.querySelectorAll('.portfolio-card[data-media-src]').forEach(card => {
    card.addEventListener('click', () => openLightbox(card));
  });

  // Click handlers on PDF trigger buttons (resume & docs)
  document.querySelectorAll('.pdf-trigger').forEach(btn => {
    btn.addEventListener('click', () => openLightbox(btn));
  });

  // Clicking the PDF preview thumbnail also opens the lightbox
  document.querySelectorAll('.pdf-preview-thumb').forEach(thumb => {
    thumb.classList.add('clickable');
    thumb.addEventListener('click', () => {
      const trigger = thumb.closest('.doc-card__inner, .doc-card')
                           .querySelector('.pdf-trigger');
      if (trigger) openLightbox(trigger);
    });
  });

  // Close handlers
  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeLightbox();
  });
})();
