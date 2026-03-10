// MIBJ Portfolio — Gemini API Proxy
// Cloudflare Worker: keeps the API key secret server-side.
// Deploy with: wrangler deploy
// Set secret:  wrangler secret put GEMINI_API_KEY

const ALLOWED_ORIGIN = 'https://mohamed-islam-ben-jaballah.github.io';
const GEMINI_BASE    = 'https://generativelanguage.googleapis.com/v1beta/models/';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      if (origin === ALLOWED_ORIGIN) {
        return new Response(null, { status: 204, headers: CORS_HEADERS });
      }
      return new Response('Forbidden', { status: 403 });
    }

    // Only accept POST from the portfolio origin
    if (request.method !== 'POST' || origin !== ALLOWED_ORIGIN) {
      return new Response('Forbidden', { status: 403 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Bad Request', { status: 400 });
    }

    // Extract model from body (client sends it), then remove before forwarding
    const model = body.model || 'gemini-2.5-flash';
    delete body.model;

    const geminiUrl = `${GEMINI_BASE}${model}:generateContent?key=${env.GEMINI_API_KEY}`;

    const geminiRes = await fetch(geminiUrl, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
    });

    const data = await geminiRes.json();
    return new Response(JSON.stringify(data), {
      status:  geminiRes.status,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  },
};
