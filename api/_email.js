function mailHTML(opts) {
  var accent = '#64ffda';
  var bg = '#0a192f';
  var card = '#112240';
  var text = '#ccd6f6';
  var dim = '#8892b0';

  return '<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="margin:0;padding:0;background:' + bg + ';font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">' +
    '<table width="100%" cellpadding="0" cellspacing="0" style="background:' + bg + ';padding:40px 20px">' +
      '<tr><td align="center">' +
        '<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">' +
          '<tr><td style="padding:0 0 30px;text-align:center">' +
            '<span style="color:' + accent + ';font-size:22px;font-weight:700;letter-spacing:1px">&lt;MIBJ /&gt;</span>' +
          '</td></tr>' +
          '<tr><td style="background:' + card + ';border-radius:10px;padding:35px;text-align:' + (opts.rtl ? 'right' : 'left') + '">' +
            '<h1 style="margin:0 0 8px;color:' + text + ';font-size:24px;font-weight:600">' + esc(opts.heading) + '</h1>' +
            (opts.subheading ? '<p style="margin:0 0 25px;color:' + dim + ';font-size:15px;line-height:1.5">' + esc(opts.subheading) + '</p>' : '') +
            opts.body +
          '</td></tr>' +
          '<tr><td style="padding:25px 0 0;text-align:center;color:' + dim + ';font-size:13px">' +
            '<p style="margin:0 0 5px">Mohamed Islem Ben Jaballah &mdash; mibj.tech</p>' +
            '<p style="margin:0">' + esc(opts.footer || '') + '</p>' +
          '</td></tr>' +
        '</table>' +
      '</td></tr>' +
    '</table></body></html>';
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function fieldRow(label, value) {
  var dim = '#8892b0';
  var text = '#ccd6f6';
  return '<tr><td style="padding:10px 0 4px;color:' + dim + ';font-size:12px;text-transform:uppercase;letter-spacing:0.5px">' + esc(label) + '</td></tr>' +
    '<tr><td style="padding:0 0 6px;color:' + text + ';font-size:15px;line-height:1.4">' + esc(value || 'N/A') + '</td></tr>';
}

function notificationBody(data) {
  var accent = '#64ffda';
  var dim = '#8892b0';
  var text = '#ccd6f6';
  var card = '#1a2f4e';
  var rows = '';
  var fields = [
    ['Name', data.name],
    ['Email', data.email],
    ['Project Type', data.projectType],
    ['Industry', data.industry],
    ['Budget', data.budget],
    ['Timeline', data.timeline]
  ];
  fields.forEach(function (f) { rows += fieldRow(f[0], f[1]); });
  rows += '<tr><td style="padding:16px 0 4px;color:' + accent + ';font-size:13px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase">Message</td></tr>' +
    '<tr><td style="padding:0 0 6px;color:' + text + ';font-size:15px;line-height:1.6;background:' + card + ';border-radius:6px;padding:14px 16px">' + esc(data.message) + '</td></tr>';
  return '<table width="100%" cellpadding="0" cellspacing="0">' + rows + '</table>';
}

function confirmationBody(data) {
  var accent = '#64ffda';
  var dim = '#8892b0';
  var text = '#ccd6f6';
  var card = '#1a2f4e';
  var rows = '';
  var fields = [
    ['Project Type', data.projectType],
    ['Industry', data.industry],
    ['Budget', data.budget],
    ['Timeline', data.timeline]
  ];
  fields.forEach(function (f) { rows += fieldRow(f[0], f[1]); });
  return '' +
    '<p style="margin:0 0 20px;color:' + text + ';font-size:15px;line-height:1.7">Hi <strong>' + esc(data.name) + '</strong>,</p>' +
    '<p style="margin:0 0 20px;color:' + text + ';font-size:15px;line-height:1.7">Thank you for reaching out! I\'ve received your inquiry and I\'ll review it personally. You can expect a response within <strong>24 hours</strong>.</p>' +
    '<p style="margin:0 0 20px;color:' + dim + ';font-size:14px;line-height:1.6">Here\'s a summary of what you submitted:</p>' +
    '<table width="100%" cellpadding="0" cellspacing="0" style="background:' + card + ';border-radius:8px;padding:16px;margin-bottom:20px">' + rows +
      '<tr><td style="padding:10px 0 4px;color:' + accent + ';font-size:12px;text-transform:uppercase;letter-spacing:0.5px">Your Message</td></tr>' +
      '<tr><td style="padding:0 0 6px;color:' + text + ';font-size:15px;line-height:1.6">' + esc(data.message) + '</td></tr>' +
    '</table>' +
    '<p style="margin:0 0 6px;color:' + text + ';font-size:15px;line-height:1.7">Best regards,</p>' +
    '<p style="margin:0;color:' + accent + ';font-size:16px;font-weight:600">Mohamed Islem Ben Jaballah</p>' +
    '<p style="margin:6px 0 0;color:' + dim + ';font-size:13px">Technical Project Manager &amp; Software Engineer</p>' +
    '<p style="margin:2px 0 0;color:' + dim + ';font-size:13px"><a href="https://mibj.tech" style="color:' + accent + ';text-decoration:none">mibj.tech</a> &nbsp;·&nbsp; medislambenjaballah1@gmail.com &nbsp;·&nbsp; +971 54 327 5998</p>';
}

function bookingBody(data, isConfirmation) {
  var accent = '#64ffda';
  var dim = '#8892b0';
  var text = '#ccd6f6';
  var card = '#1a2f4e';
  var rows = '';
  var fields = [
    ['Appointment Date', data.date],
    ['Appointment Time', data.time]
  ];
  fields.forEach(function (f) { rows += fieldRow(f[0], f[1]); });
  if (!isConfirmation) {
    rows += fieldRow('Phone', data.phone);
  }
  rows += '<tr><td style="padding:10px 0 4px;color:' + accent + ';font-size:12px;text-transform:uppercase;letter-spacing:0.5px">Message</td></tr>' +
    '<tr><td style="padding:0 0 6px;color:' + text + ';font-size:15px;line-height:1.6;background:' + card + ';border-radius:6px;padding:14px 16px">' + esc(data.message) + '</td></tr>';
  return '<table width="100%" cellpadding="0" cellspacing="0">' + rows + '</table>';
}

module.exports = {
  notificationHTML: function (data) {
    return mailHTML({
      heading: 'New Project Inquiry',
      subheading: 'From ' + data.name + ' (' + data.email + ')',
      body: notificationBody(data),
      footer: 'You received this because your contact form is set up at mibj.tech'
    });
  },
  confirmationHTML: function (data) {
    return mailHTML({
      heading: 'Thank you for reaching out!',
      subheading: 'I\'ll get back to you within 24 hours',
      body: confirmationBody(data),
      footer: 'This is an automated confirmation. Replies to this email go directly to Islem.',
      rtl: data.lang === 'ar'
    });
  },
  bookingNotificationHTML: function (data) {
    return mailHTML({
      heading: 'New Booking Request',
      subheading: 'From ' + data.name + ' (' + data.email + ')',
      body: bookingBody(data, false),
      footer: 'Booking request from mibj.tech'
    });
  },
  bookingConfirmationHTML: function (data) {
    return mailHTML({
      heading: 'Your Appointment is Booked!',
      subheading: 'Here\'s what I\'ve scheduled for you, ' + esc(data.name),
      body: '' +
        '<p style="margin:0 0 20px;color:#ccd6f6;font-size:15px;line-height:1.7">Hi <strong>' + esc(data.name) + '</strong>,</p>' +
        '<p style="margin:0 0 20px;color:#ccd6f6;font-size:15px;line-height:1.7">Your appointment has been booked successfully! I look forward to our conversation.</p>' +
        bookingBody(data, true) +
        '<p style="margin:0 0 6px;color:#ccd6f6;font-size:15px;line-height:1.7">Best regards,</p>' +
        '<p style="margin:0;color:#64ffda;font-size:16px;font-weight:600">Mohamed Islem Ben Jaballah</p>',
      footer: 'This is an automated confirmation. Replies go directly to Islem.'
    });
  }
};
