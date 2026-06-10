<div align="center">
  <br/>
  <img src="assets/images/icon-512.png" alt="MIBJ Logo" width="120" height="120"/>
  <br/>
  <h1>&lt;MIBJ /&gt;</h1>
  <p><strong>Technical Project Manager &amp; Software Engineer</strong></p>
  <br/>

  <p>
    <a href="https://mibj.tech" target="_blank">
      <img src="https://img.shields.io/badge/Live-mibj.tech-64ffda?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Site"/>
    </a>
    <a href="https://github.com/Mohamed-Islam-Ben-Jaballah/MIBJ/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-8892b0?style=for-the-badge" alt="License"/>
    </a>
    <img src="https://img.shields.io/badge/Status-Active-64ffda?style=for-the-badge" alt="Status"/>
  </p>

  <br/>
</div>

**Immersive portfolio** — VR simulations, AI avatars, 3D web experiences, and interactive digital solutions. Built with vanilla JS, powered by Gemini AI, served with Docker.

---

## ✨ Features

| | |
|---|---|
| **AI Chatbot** | Gemini-powered assistant that knows everything about my work |
| **6 Languages** | EN / FR / AR / ES / ZH / RU — full i18n with RTL support |
| **Contact Form** | Project inquiry form with email delivery via Resend |
| **Interactive 3D** | Three.js / WebGL portfolio showcases with video lightbox |
| **Particle Background** | Animated canvas particle system |
| **Responsive** | Mobile-first, dark navy & cyan design system |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/Mohamed-Islam-Ben-Jaballah/MIBJ.git
cd MIBJ

# Install & build frontend
npm install
npm run build          # outputs to dist/

# Set up server
cp server/.env.example server/.env
# Edit server/.env with your Resend & Gemini API keys

# Install server deps & run
cd server
npm install
npm start              # http://localhost:3000
```

**With Docker:**

```bash
docker compose up -d   # builds + runs at http://localhost:3000
```

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Vanilla HTML / CSS / JS |
| **Backend** | Node.js + Express |
| **Email** | Resend API |
| **AI** | Google Gemini 1.5 Flash |
| **Container** | Docker + Docker Compose |
| **Reverse Proxy** | Caddy (auto SSL) |
| **Build** | Custom `build.js` (minifies CSS, JS, HTML) |
| **Design** | Dark navy (`#0a192f`) + Cyan (`#64ffda`) |

---

## 📁 Project Structure

```
MIBJ/
├── index.html              # Single-page portfolio
├── css/styles.css          # All styles (1.5k lines)
├── js/
│   ├── main.js             # Particles, modals, form, scroll
│   ├── i18n.js             # 6-language translation engine
│   └── chatbot.js          # Gemini AI chatbot
├── server/
│   ├── index.js            # Express API (contact + Gemini proxy)
│   ├── Dockerfile          # Multi-stage Docker build
│   └── package.json
├── proxy/                  # [Deprecated] Cloudflare Worker
├── assets/
│   ├── images/             # Favicons, OG image, testimonial photos
│   └── docs/               # Resume & project PDFs
├── build.js                # Production build script
├── docker-compose.yml      # Caddy + app orchestration
├── Caddyfile               # Reverse proxy config
└── .env.example            # Environment template
```

---

## 📜 API Endpoints

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/contact` | Submit project inquiry (→ email via Resend) |
| `POST` | `/api/chat` | Proxy to Gemini AI (keeps API key server-side) |

---

## 🤖 AI Chatbot

The floating chat button opens an AI assistant that answers questions about services, projects, tech stack, process, and more. Powered by **Gemini 1.5 Flash** through a server-side proxy — no API key exposed to the client.

---

## 🌐 Internationalisation

6 languages with automatic language detection and RTL support for Arabic. Translations cover every section of the site. Language preference is persisted in `localStorage`.

---

## 🐳 Deployment

```bash
# Build and run on any VM with Docker
docker compose up -d

# Update after code changes
git pull
docker compose up -d --build

# View logs
docker compose logs -f
```

Caddy automatically provisions **Let's Encrypt SSL certificates** and redirects HTTP → HTTPS.

---

## 📄 License

MIT

---

<div align="center">
  <sub>Built with ❄️ by <strong>Mohamed Islam Ben Jeballah</strong></sub>
  <br/>
  <a href="https://mibj.tech">mibj.tech</a> ·
  <a href="mailto:medislambenjaballah1@gmail.com">Email</a> ·
  <a href="https://github.com/Mohamed-Islam-Ben-Jaballah">GitHub</a>
</div>
