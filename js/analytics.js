(function () {
  var va = window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

  function track(name, data) {
    if (!name) return;
    try { va('event', { name: name, data: data || {} }); } catch (e) {}
  }
  window.mibjTrack = track;

  var startedAt = Date.now();
  var maxScroll = 0;
  var scrollMarks = {};
  var sectionsSeen = {};
  var timeSent = false;
  var clickCount = 0;

  function scrollPercent() {
    var doc = document.documentElement;
    var body = document.body;
    var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop || 0;
    var height = Math.max(
      body.scrollHeight, doc.scrollHeight,
      body.offsetHeight, doc.offsetHeight
    ) - window.innerHeight;
    if (height <= 0) return 100;
    return Math.min(100, Math.round((scrollTop / height) * 100));
  }

  function onScroll() {
    var p = scrollPercent();
    if (p > maxScroll) maxScroll = p;
    [25, 50, 75, 100].forEach(function (mark) {
      if (p >= mark && !scrollMarks[mark]) {
        scrollMarks[mark] = true;
        track('scroll_depth', { percent: mark });
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.addEventListener('click', function (e) {
    var target = e.target;
    if (!target || !target.closest) return;
    clickCount++;

    if (target.closest('#chatFab')) { track('chatbot_open'); return; }
    if (target.closest('#chatSend')) { track('chatbot_message'); return; }

    var contactTrigger = target.closest('.contact-trigger');
    if (contactTrigger) {
      track('contact_open', { source: contactTrigger.classList.contains('cta-btn') ? 'nav' : 'section' });
      return;
    }

    if (target.closest('.booking-trigger, .bubble-click')) { track('booking_open'); return; }

    var langBtn = target.closest('.lang-btn');
    if (langBtn && langBtn.dataset && langBtn.dataset.lang) {
      track('language_change', { language: langBtn.dataset.lang });
      return;
    }

    var card = target.closest('.portfolio-card[data-media-src]');
    if (card) {
      track('project_open', {
        project: card.dataset.project || '',
        title: (card.dataset.mediaTitle || '').slice(0, 120)
      });
      return;
    }

    var docBtn = target.closest('.pdf-trigger, .pdf-preview-thumb');
    if (docBtn) {
      var title = docBtn.dataset.mediaTitle || '';
      if (!title) {
        var wrap = docBtn.closest('.doc-card__inner, .doc-card');
        var trig = wrap ? wrap.querySelector('.pdf-trigger') : null;
        if (trig) title = trig.dataset.mediaTitle || '';
      }
      track('document_open', { title: title.slice(0, 120) });
      return;
    }

    var anchor = target.closest('a');
    if (!anchor) return;
    var href = anchor.getAttribute('href') || '';

    if (href.indexOf('mailto:') === 0) { track('email_click'); return; }
    if (href.indexOf('tel:') === 0) { track('phone_click'); return; }

    if (href.charAt(0) === '#' && href.length > 1) {
      track('section_nav', { section: href.slice(1) });
      return;
    }

    if (/^https?:\/\//i.test(href)) {
      var host = '';
      try { host = new URL(anchor.href).hostname.replace(/^www\./, ''); } catch (err) {}
      if (host && host !== window.location.hostname) {
        track('outbound_click', { host: host, url: href.slice(0, 180) });
      }
    }
  }, true);

  function observeSections() {
    if (!('IntersectionObserver' in window)) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        if (!id || sectionsSeen[id]) return;
        sectionsSeen[id] = true;
        track('section_view', { section: id });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('section[id]').forEach(function (s) { observer.observe(s); });
  }

  function observeSubmit(buttonId, eventName) {
    var btn = document.getElementById(buttonId);
    if (!btn) return;
    var observer = new MutationObserver(function () {
      if (btn.classList.contains('success')) {
        track(eventName);
        observer.disconnect();
      }
    });
    observer.observe(btn, { attributes: true, attributeFilter: ['class'] });
  }

  function sendTimeOnPage() {
    if (timeSent) return;
    timeSent = true;
    track('time_on_page', {
      seconds: Math.round((Date.now() - startedAt) / 1000),
      scroll: maxScroll,
      clicks: clickCount
    });
  }

  function init() {
    observeSections();
    observeSubmit('formSubmit', 'contact_submit');
    observeSubmit('bookSubmit', 'booking_submit');
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') sendTimeOnPage();
    });
    window.addEventListener('pagehide', sendTimeOnPage);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
