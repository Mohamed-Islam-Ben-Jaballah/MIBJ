// ========================================
//  MIBJ Portfolio — Booking Appointment
//  Modal with contact form + date/time picker
// ========================================

(function () {
  var overlay = document.getElementById('bookingOverlay');
  var closeBtn = document.getElementById('bookingClose');
  var form = document.getElementById('bookingForm');
  var triggers = document.querySelectorAll('.booking-trigger');

  if (!overlay || !form) return;

  var nameEl = document.getElementById('bookName');
  var emailEl = document.getElementById('bookEmail');
  var phoneEl = document.getElementById('bookPhone');
  var msgEl = document.getElementById('bookMessage');
  var dateEl = document.getElementById('bookDate');
  var timeEl = document.getElementById('bookTime');
  var submitBtn = document.getElementById('bookSubmit');

  // Set min date to today
  if (dateEl) {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    dateEl.setAttribute('min', yyyy + '-' + mm + '-' + dd);
    // Default to tomorrow
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    var ty = tomorrow.getFullYear();
    var tm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    var td = String(tomorrow.getDate()).padStart(2, '0');
    dateEl.value = ty + '-' + tm + '-' + td;
  }

  function openModal() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Triggers
  triggers.forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  // Also trigger from congrats bubble click
  document.addEventListener('click', function (e) {
    var ct = e.target.closest('.bubble-click');
    if (ct) {
      e.preventDefault();
      var bubble = document.getElementById('profileBubble');
      if (bubble) bubble.classList.remove('visible');
      openModal();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
  });

  // Validation helpers
  function setError(el, msg) {
    el.classList.add('error');
    var existing = el.parentNode.querySelector('.book-error-msg');
    if (!existing) {
      var err = document.createElement('div');
      err.className = 'book-error-msg';
      el.parentNode.appendChild(err);
    }
    el.parentNode.querySelector('.book-error-msg').textContent = msg;
  }

  function clearError(el) {
    el.classList.remove('error');
    var err = el.parentNode.querySelector('.book-error-msg');
    if (err) err.remove();
  }

  function validateField(el) {
    if (!el.value.trim()) {
      setError(el, 'This field is required');
      return false;
    }
    if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())) {
      setError(el, 'Please enter a valid email');
      return false;
    }
    clearError(el);
    return true;
  }

  [nameEl, emailEl, phoneEl].forEach(function (el) {
    if (!el) return;
    el.addEventListener('blur', function () { validateField(el); });
    el.addEventListener('input', function () { if (el.classList.contains('error')) validateField(el); });
  });

  function resetForm() {
    form.reset();
    submitBtn.disabled = false;
    submitBtn.classList.remove('success');
    form.querySelectorAll('.book-error-msg').forEach(function (e) { e.remove(); });
    form.querySelectorAll('.error').forEach(function (e) { e.classList.remove('error'); });
  }

  // Submit
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var valid = [nameEl, emailEl].every(function (el) {
      return el ? validateField(el) : true;
    });
    if (!valid) return;

    var payload = {
      name: nameEl.value.trim(),
      email: emailEl.value.trim(),
      phone: phoneEl ? phoneEl.value.trim() : '',
      date: dateEl ? dateEl.value : '',
      time: timeEl ? timeEl.value : '',
      message: msgEl ? msgEl.value.trim() : ''
    };

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data.error) throw new Error(data.error);
      submitBtn.classList.remove('loading');
      submitBtn.classList.add('success');
      setTimeout(function () {
        resetForm();
        closeModal();
      }, 2000);
    })
    .catch(function (err) {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      alert('Failed to book: ' + err.message);
    });
  });
})();
