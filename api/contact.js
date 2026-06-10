const { Resend } = require('resend');
const { notificationHTML, confirmationHTML } = require('./_email');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    var { name, email, projectType, industry, budget, timeline, message } = req.body;

    if (!name || !name.trim()) return res.status(400).json({ error: 'Name is required.' });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Valid email is required.' });
    if (!message || !message.trim()) return res.status(400).json({ error: 'Message is required.' });

    var resend = new Resend(process.env.RESEND_API_KEY);
    var from = process.env.FROM_EMAIL || 'MIBJ Contact <onboarding@resend.dev>';
    var to = process.env.CONTACT_EMAIL || 'medislambenjaballah1@gmail.com';

    var data = {
      name: name.trim(),
      email: email.trim(),
      projectType: projectType || 'N/A',
      industry: industry || 'N/A',
      budget: budget || 'N/A',
      timeline: timeline || 'N/A',
      message: message.trim()
    };

    // 1. Notification to user (pretty HTML)
    await resend.emails.send({
      from: from,
      to: to,
      subject: 'New Project Inquiry from ' + data.name,
      html: notificationHTML(data),
      reply_to: data.email
    });

    // 2. Confirmation to client (pretty HTML)
    await resend.emails.send({
      from: from,
      to: data.email,
      subject: 'Thank you for reaching out, ' + data.name + '!',
      html: confirmationHTML(data)
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send. Check server logs.' });
  }
};
