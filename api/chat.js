module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method === 'GET') {
    return res.json({ status: 'ok', note: 'Send a POST with the Gemini request body.' });
  }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    var key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.error('Missing GEMINI_API_KEY env var');
      return res.status(500).json({ error: { message: 'Server misconfiguration: GEMINI_API_KEY not set' } });
    }

    var { model, ...body } = req.body;
    var geminiModel = model || 'gemini-1.5-flash';

    var geminiRes = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/' + geminiModel + ':generateContent?key=' + key,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );

    var data = await geminiRes.json();
    res.status(geminiRes.status).json(data);
  } catch (err) {
    console.error('Gemini proxy error:', err);
    res.status(500).json({ error: { message: 'Internal server error: ' + (err.message || '') } });
  }
};
