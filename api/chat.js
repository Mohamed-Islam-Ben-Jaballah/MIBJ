module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Send a POST request.' } });
  }

  try {
    var key = process.env.GEMINI_API_KEY;
    if (!key) {
      return res.status(500).json({ error: { message: 'GEMINI_API_KEY not set in Vercel env vars.' } });
    }

    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ error: { message: 'Request body is required.' } });
    }

    var model = req.body.model || 'gemini-3.5-flash';

    var body = {};
    Object.keys(req.body).forEach(function (k) {
      if (k !== 'model') body[k] = req.body[k];
    });

    var controller = new AbortController();
    var timeoutId = setTimeout(function () { controller.abort(); }, 8000);

    var geminiRes;
    try {
      geminiRes = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + key,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          signal: controller.signal,
        }
      );
    } finally {
      clearTimeout(timeoutId);
    }

    var data = await geminiRes.json();

    if (!geminiRes.ok) {
      var msg = (data.error && data.error.message) || 'Gemini API error ' + geminiRes.status;
      console.error('[chat] Gemini error:', msg);
      return res.status(502).json({ error: { message: msg } });
    }

    res.json(data);
  } catch (err) {
    console.error('[chat] Unexpected error:', err);
    res.status(500).json({ error: { message: err.message || 'Internal error' } });
  }
};
