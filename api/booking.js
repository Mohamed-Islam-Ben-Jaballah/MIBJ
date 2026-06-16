const { Resend } = require('resend');
const { bookingNotificationHTML, bookingConfirmationHTML } = require('./_email');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    var { name, email, phone, date, time, message } = req.body;

    if (!name || !name.trim()) return res.status(400).json({ error: 'Name is required.' });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Valid email is required.' });

    var resend = new Resend(process.env.RESEND_API_KEY);
    var from = process.env.FROM_EMAIL || 'MIBJ Booking <onboarding@resend.dev>';
    var to = process.env.CONTACT_EMAIL || 'medislambenjaballah1@gmail.com';

    var data = {
      name: name.trim(),
      email: email.trim(),
      phone: phone || 'N/A',
      date: date || 'N/A',
      time: time || 'N/A',
      message: message || 'N/A'
    };

    // 1. Notification to user
    await resend.emails.send({
      from: from,
      to: to,
      subject: 'New Booking Request from ' + data.name,
      html: bookingNotificationHTML(data),
      reply_to: data.email
    });

    // 2. Confirmation to client
    await resend.emails.send({
      from: from,
      to: data.email,
      subject: 'Booking Confirmed — ' + data.name + ', I\'ll see you soon!',
      html: bookingConfirmationHTML(data)
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ error: 'Failed to book. Check server logs.' });
  }
};
