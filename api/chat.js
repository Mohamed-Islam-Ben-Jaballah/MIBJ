module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Send a POST request.' } });
  }

  try {
    var key = process.env.DEEPSEEK_API_KEY;
    if (!key) {
      return res.status(500).json({ error: { message: 'DEEPSEEK_API_KEY not set in Vercel env vars.' } });
    }

    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ error: { message: 'Request body is required.' } });
    }

    var controller = new AbortController();
    var timeoutId = setTimeout(function () { controller.abort(); }, 9500);

    var dsRes;
    try {
      dsRes = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + key,
        },
        body: JSON.stringify(req.body),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    var data = await dsRes.json();

    if (!dsRes.ok) {
      var msg = (data.error && data.error.message) || 'DeepSeek API error ' + dsRes.status;
      console.error('[chat] DeepSeek error:', msg);
      return res.status(502).json({ error: { message: msg } });
    }

    res.json(data);
  } catch (err) {
    console.error('[chat] Unexpected error:', err);
    res.status(500).json({ error: { message: err.message || 'Internal error' } });
  }
};
