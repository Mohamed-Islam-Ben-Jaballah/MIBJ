# MIBJ Portfolio — Architecture

Full technical breakdown of the portfolio website at [mibj.tech](https://mibj.tech).

---

## Overview

```
┌─────────────────────────────────────────────────────────┐
│                      Browser                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐   │
│  │ main.js  │  │ i18n.js  │  │     chatbot.js       │   │
│  │ Particles│  │ 6 langs  │  │ Gemini AI Assistant   │   │
│  │ Modals   │  │ RTL/AR   │  │ (fetches /api/chat)  │   │
│  │ Form     │  │          │  │                      │   │
│  └────┬─────┘  └──────────┘  └──────────┬───────────┘   │
│       │                                  │               │
└───────┼──────────────────────────────────┼───────────────┘
        │                                  │
        ▼                                  ▼
┌─────────────────────────────────────────────────────────┐
│              Express Server (server/index.js)             │
│  ┌──────────────────┐       ┌────────────────────────┐  │
│  │  POST /api/contact│       │  POST /api/chat        │  │
│  │  → Resend API    │       │  → Gemini API          │  │
│  │  → Email to you  │       │  (key from .env)       │  │
│  └──────────────────┘       └────────────────────────┘  │
│                                                          │
│  GET * → serves static files from dist/                  │
└─────────────────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────┐
│               Caddy (reverse proxy)                       │
│  mibj.tech:443  ─────►  app:3000                         │
│  Auto SSL via Let's Encrypt                               │
└─────────────────────────────────────────────────────────┘
```

---

## Frontend

### `index.html` — Single-page layout

15 sections, in order:

| # | Section | Element | Purpose |
|---|---------|---------|---------|
| 1 | Particle Background | `<canvas id="particles">` | Animated particle system |
| 2 | Navbar | `<nav class="navbar">` | Logo, nav links, language pill, hamburger |
| 3 | Hero | `<section id="hero">` | Greeting, name, tagline, CTA |
| 4 | About | `<section id="about">` | Bio, tech list, stats cards |
| 5 | Services | `<section id="services">` | 6 service cards (Unity, Three.js, AI, VR, Branding) |
| 6 | Process | `<section id="process">` | 5-step timeline + team banner |
| 7 | Portfolio | `<section id="portfolio">` | 6 project cards + document cards |
| 8 | Testimonials | `<section id="testimonials">` | 3 client testimonials |
| 9 | Contact | `<section class="contact-section">` | CTA with email/phone |
| 10 | Footer | `<footer>` | Copyright |
| 11 | Lightbox Modal | `<div id="lightbox">` | Video/image/PDF viewer overlay |
| 12 | Contact Modal | `<div id="contactOverlay">` | Project inquiry form |
| 13 | Scroll to Top | `<button id="scrollTop">` | Scroll-to-top button |
| 14 | Floating Language | `<div id="floatLang">` | 6-language switcher pill |
| 15 | Scripts | `<script>` tags | YouTube iframe loading + JS files |

### `css/styles.css` — Design system

- **Primary**: Deep navy `#0a192f`, card `#112240`
- **Accent**: Cyan `#64ffda` with varying opacity layers
- **Font**: Inter (body) + JetBrains Mono (code)
- 1510 lines, organised by component with CSS custom properties
- Key patterns: `.reveal`/`.visible` for scroll animations, `.section--alt` for alternating backgrounds

### `js/main.js` — Behaviour (5 IIFEs)

| Module | Responsibility |
|---|---|
| **Particle Background** | Canvas-based animated particles with proximity connections (`requestAnimationFrame` loop) |
| **Navbar Scroll** | Hide/show on scroll direction, float-lang visibility at 150px threshold |
| **Floating Language** | Toggle `.open` state, close on outside click / Escape |
| **Mobile Menu** | Logo tap + hamburger toggle, close on link click / outside click |
| **Scroll Reveal** | `IntersectionObserver` on `.reveal` elements — adds `.visible` class |
| **Active Nav Highlight** | Highlights current section link on scroll |
| **Scroll to Top** | Show button after 400px, smooth scroll to top |
| **Contact Modal** | Open/close triggers, form validation (blur + input), timeline slider, character count, fetch POST to `/api/contact` |
| **Lightbox** | Opens video (YouTube embed + direct), image, PDF, iframe content from portfolio cards |

### `js/i18n.js` — Internationalisation (860 lines)

- **6 languages**: English, French, Arabic, Spanish, Chinese, Russian
- **65+ translation keys** per language covering all sections
- **Engine** (lines 772–860):
  - Reads `data-i18n` / `data-i18n-html` attributes
  - Applies translations from `TRANSLATIONS[lang]`
  - Handles RTL direction for Arabic (`dir="rtl"`)
  - Conditionally loads Cairo font for Arabic
  - Persists language choice in `localStorage`
  - Updates floating language pill label
  - Detects language from browser on first visit
- All 6 languages share an identical key set

### `js/chatbot.js` — Gemini AI Chatbot (599 lines)

- Floating action button (FAB) that opens a chat panel
- **System prompt**: Custom persona ("Islam's assistant") with professional/casual modes + embedded Knowledge Base
- **Gemini call**: Sends conversation history to `POST /api/chat` with `systemInstruction`, `contents`, `generationConfig`, `safetySettings`
- **Per-language UI**: Welcome messages, quick replies (6 chips), placeholders, error messages in all 6 languages
- **Features**: Typing indicator, conversation history (capped at 4 exchanges), auto-language switch via `MutationObserver` on `<html data-lang>`

---

## Backend

### `server/index.js` — Express server (96 lines)

**Middleware:** `cors()` (all origins), `express.json()` (50kb limit)

**Static files:** Serves everything under `dist/` — the built frontend.

#### `POST /api/contact`

Accepts:
```json
{
  "name": "string (required)",
  "email": "string (required, validated)",
  "projectType": "string",
  "industry": "string",
  "budget": "string",
  "timeline": "string",
  "message": "string (required)"
}
```

Flow:
1. Validate required fields (name, email regex, message)
2. Build plain-text email body
3. Send via **Resend API** — no SMTP/password required
4. Return `{ success: true }` or `{ error: "..." }` with status 400/500

Uses `REPLY_TO` set to the submitter's email so you can reply directly.

#### `POST /api/chat`

Acts as a proxy to the **Google Gemini API** — keeps the API key server-side.

Flow:
1. Extract `model` from request body (defaults to `gemini-1.5-flash`)
2. Forward remaining body to `https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_API_KEY}`
3. Return Gemini's response as-is (including error objects)

### `server/Dockerfile` — Multi-stage build

```
Stage 1 (builder):  npm ci + node build.js  →  dist/
Stage 2 (prod):     npm ci --only=production + server/ code + copy dist/  →  /app/
```

Base image: `node:20-alpine`

---

## Deployment

### Docker Compose

```yaml
services:
  app:        # Your Node.js server (built from server/Dockerfile)
  caddy:      # Reverse proxy, auto SSL
```

Caddy watches for `Caddyfile` at the root level and automatically provisions **Let's Encrypt** certificates for `mibj.tech`.

### Environment variables (`server/.env`)

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key for email sending |
| `GEMINI_API_KEY` | Yes | Google AI Studio API key for Gemini |
| `FROM_EMAIL` | No | Sender address for contact emails |
| `CONTACT_EMAIL` | No | Where contact form submissions go |
| `PORT` | No | Internal port (default 3000) |

### `.dockerignore`

Excludes `.git/`, `node_modules/`, `dist/`, `proxy/`, `*.md` from the Docker build context.

---

## Build Process

`build.js` (Node script, no framework):

1. Clean `dist/` directory
2. Copy `assets/` (images, docs)
3. Minify CSS with `clean-css-cli` → `dist/css/styles.css`
4. Minify JS files (`main.js`, `i18n.js`, `chatbot.js`) with `terser` → `dist/js/`
5. Minify HTML with `html-minifier-terser` → `dist/index.html`

```bash
npm run build
```

---

## Data Flow Examples

### Contact Form Submission

```
User fills form → clicks Send
  ↓
main.js validates fields (blur + submit)
  ↓
fetch POST /api/contact  { name, email, projectType, industry, budget, timeline, message }
  ↓
server validates → sends email via Resend API
  ↓
{ success: true } → closes modal, resets form
```

### Chatbot Conversation

```
User types question → clicks Send
  ↓
chatbot.js builds conversation history (last 4 exchanges)
  ↓
fetch POST /api/chat  { model, systemInstruction, contents, generationConfig, safetySettings }
  ↓
server forwards to Gemini API with key from .env
  ↓
Gemini returns generated text → chatbot displays in chat panel
```

---

## Deprecated Components

### `proxy/` — Cloudflare Worker

Previously routed `POST` requests to Gemini API using a Cloudflare Worker to hide the API key. Replaced by the built-in `/api/chat` endpoint in the Express server. The worker code remains for reference but is no longer deployed or called from the frontend.

---

## Key Design Decisions

| Decision | Rationale |
|---|---|
| **Vanilla JS (no framework)** | Portfolio site — no SPA complexity needed; faster load, zero build tooling overhead for development |
| **Custom i18n engine** | Full control over translations without a heavy library; RTL handling for Arabic |
| **Server-side AI proxy** | Keeps Gemini API key secret; same pattern as the Contact form |
| **Docker multi-stage** | Self-contained build — no need to install Node on the host VM |
| **Caddy as reverse proxy** | Automatic Let's Encrypt SSL, zero-config, single binary |
| **Resend over SMTP** | API key (revocable, scoped) instead of Gmail password |

---

## Security

- **API keys** (Resend, Gemini) live in `server/.env` — never committed (`.gitignore` ignores `.env`)
- **Gemini proxy** — frontend calls `/api/chat`; the API key never leaves the server
- **Caddy** terminates TLS with auto-renewing Let's Encrypt certificates
- **Docker** container runs as non-root (Node.js default)
