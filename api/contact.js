const { Resend } = require('resend');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, projectType, industry, budget, timeline, message } = req.body;

    if (!name || !name.trim()) return res.status(400).json({ error: 'Name is required.' });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Valid email is required.' });
    if (!message || !message.trim()) return res.status(400).json({ error: 'Message is required.' });

    const resend = new Resend(process.env.RESEND_API_KEY);
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
};
