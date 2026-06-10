require('dotenv').config();
const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50kb' }));

// Serve built frontend
const distPath = path.resolve(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
} else {
  console.warn('Warning: dist/ not found. Run "npm run build" first.');
}

// Resend (email via API key — no password exposed)
const resend = new Resend(process.env.RESEND_API_KEY);

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, projectType, industry, budget, timeline, message } = req.body;

    if (!name || !name.trim()) return res.status(400).json({ error: 'Name is required.' });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Valid email is required.' });
    if (!message || !message.trim()) return res.status(400).json({ error: 'Message is required.' });

    const to = process.env.CONTACT_EMAIL || 'medislambenjaballah1@gmail.com';
    const subject = `New Project Inquiry from ${name.trim()}`;
    const text = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Project Type: ${projectType || 'N/A'}`,
      `Industry: ${industry || 'N/A'}`,
      `Budget: ${budget || 'N/A'}`,
      `Timeline: ${timeline || 'N/A'}`,
      '',
      `Message:`,
      message.trim(),
    ].join('\n');

    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'MIBJ Contact <onboarding@resend.dev>',
      to,
      subject,
      text,
      reply_to: email.trim(),
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send. Check server logs.' });
  }
});

// SPA fallback
app.get('*', (req, res) => {
  const index = path.join(distPath, 'index.html');
  if (fs.existsSync(index)) return res.sendFile(index);
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`MIBJ server running on http://localhost:${PORT}`);
});
