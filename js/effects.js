// ========================================
//  MIBJ Portfolio — Interactive Effects
//  Mouse ripple, profile follow, hidden
//  emoji hunt, text bubble, token counter
// ========================================

// ---- Profile Follows Mouse ----
(function () {
  var orbit = document.getElementById('profileOrbit');
  var visual = document.getElementById('heroVisual');
  if (!orbit || !visual) return;

  var strength = 15;
  var targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  var rafId = null;

  function tick() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    orbit.style.transform = 'translate(' + currentX.toFixed(2) + 'px, ' + currentY.toFixed(2) + 'px)';
    if (Math.abs(currentX - targetX) > 0.05 || Math.abs(currentY - targetY) > 0.05) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
    }
  }

  visual.addEventListener('mousemove', function (e) {
    var rect = visual.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    targetX = ((e.clientX - cx) / rect.width) * strength;
    targetY = ((e.clientY - cy) / rect.height) * strength;
    if (!rafId) rafId = requestAnimationFrame(tick);
  }, { passive: true });

  visual.addEventListener('mouseleave', function () {
    targetX = 0; targetY = 0;
    if (!rafId) rafId = requestAnimationFrame(tick);
  }, { passive: true });
})();


// ---- Hidden Emojis + Token Counter + Profile Bubble ----
(function () {
  var profileImg = document.getElementById('profileImg');
  var bubble = document.getElementById('profileBubble');
  var bubbleText = document.getElementById('bubbleText');
  var bubbleClose = document.getElementById('bubbleClose');
  var tokenCounter = document.getElementById('tokenCounter');
  var tokenCountEl = document.getElementById('tokenCount');
  var MAX_TOKENS = 7;

  var tokensFound = 0;
  var hasSeenBubble = false;  // tracks if first-time bubble was shown
  var emojis = [];
  var allUnlocked = false;

  // Collect hidden emoji elements
  document.querySelectorAll('.hidden-emoji').forEach(function (el) {
    emojis.push(el);
    el.addEventListener('click', function () {
      if (el.classList.contains('found')) return;
      el.classList.add('found');
      tokensFound++;
      updateCounter();
      if (tokensFound >= MAX_TOKENS) {
        allUnlocked = true;
        showCongrats();
      }
    });
    // Hover glow
    el.addEventListener('mouseenter', function () {
      el.style.opacity = '1';
      el.style.textShadow = '0 0 20px #64ffda, 0 0 40px #64ffda';
    });
    el.addEventListener('mouseleave', function () {
      if (!el.classList.contains('found')) {
        el.style.opacity = '0.25';
        el.style.textShadow = 'none';
      }
    });
  });

  function updateCounter() {
    if (tokenCountEl) tokenCountEl.textContent = tokensFound;
    if (tokenCounter) {
      tokenCounter.classList.add('visible');
      tokenCounter.classList.toggle('complete', allUnlocked);
    }
  }

  function showCongrats() {
    // Auto scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Show bubble with congrats
    var lang = document.documentElement.getAttribute('data-lang') || 'en';
    var t = window.__i18nHidden || {};
    showBubble(t.congrats || 'CONGRATS! You sure got a keen eye for hidden gems — makes sense why you found this website. Click here and schedule a free 1 hour face to face consultation with me.', true);
  }

  // ---- Text bubble logic ----
  function showBubble(text, isCongrats) {
    if (!bubble) return;
    bubbleText.textContent = '';
    bubble.classList.add('visible');
    bubble.classList.toggle('congrats-bubble', !!isCongrats);

    // Focus the bubble for keyboard accessibility
    bubble.setAttribute('tabindex', '-1');
    bubble.focus({ preventScroll: true });

    var i = 0;
    var mid = Math.floor(text.length / 2);
    var clickPhrase = 'click here';
    var ci = isCongrats ? text.toLowerCase().indexOf(clickPhrase) : -1;

    function type() {
      if (i >= text.length) {
        // After typing finishes, wrap "click here" in a span for congrats
        if (isCongrats && ci >= 0) {
          var html = bubbleText.textContent;
          var before = html.substring(0, ci);
          var midHtml = html.substring(ci, ci + clickPhrase.length);
          var after = html.substring(ci + clickPhrase.length);
          bubbleText.innerHTML = before + '<span class="bubble-click">' + midHtml + '</span>' + after;
        }
        return;
      }
      var ch = text[i];
      i++;
      bubbleText.textContent += ch;
      bubbleText.scrollTop = bubbleText.scrollHeight;
      var delay = i <= mid ? 25 : 40;
      setTimeout(type, delay);
    }
    type();
  }

  function closeBubble() {
    if (bubble) bubble.classList.remove('visible');
  }

  if (bubbleClose) bubbleClose.addEventListener('click', closeBubble);

  // ---- Profile click handler ----
  if (profileImg) {
    profileImg.addEventListener('click', function (e) {
      e.stopPropagation();
      var lang = document.documentElement.getAttribute('data-lang') || 'en';
      var t = window.__i18nHidden || {};

      if (allUnlocked) {
        showBubble(t.congrats || 'CONGRATS! You sure got a keen eye for hidden gems — makes sense why you found this website. Click here and schedule a free 1 hour face to face consultation with me.', true);
        return;
      }

      if (!hasSeenBubble) {
        hasSeenBubble = true;
        showBubble(t.first_bubble || 'Find these hidden elements and get a secret gift from me');
      } else {
        var remaining = MAX_TOKENS - tokensFound;
        var msg = (t.tokens_left || 'Have you found all hidden tokens? You still have {X} tokens left.').replace('{X}', remaining);
        showBubble(msg);
      }
    });
  }
})();
