// ========================================
//  MIBJ Portfolio — Interactive Effects
//  Mouse ripple, profile follow, hidden
//  emoji hunt, text bubble, token counter
// ========================================

// ---- Randomize float icon positions on each load ----
(function () {
  var icons = document.querySelectorAll('.float-icon');
  if (!icons.length) return;
  var angles = [0, 60, 120, 180, 240, 300];
  icons.forEach(function (el, i) {
    var angle = ((angles[i] !== undefined ? angles[i] : i * 60) + (Math.random() - 0.5) * 30) * Math.PI / 180;
    var r = 38 + Math.random() * 10;
    var left = 50 + r * Math.sin(angle);
    var top = 50 - r * Math.cos(angle);
    el.style.left = left + '%';
    el.style.top = top + '%';
  });
})();


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


// ---- Hidden Emojis (40 preset positions, 7 random per load) + Token Counter + Profile Bubble ----
(function () {
  var profileImg = document.getElementById('profileImg');
  var bubble = document.getElementById('profileBubble');
  var bubbleText = document.getElementById('bubbleText');
  var bubbleClose = document.getElementById('bubbleClose');
  var tokenCounter = document.getElementById('tokenCounter');
  var tokenCountEl = document.getElementById('tokenCount');
  var MAX_TOKENS = 7;

  var tokensFound = 0;
  var hasSeenBubble = false;
  var emojis = [];
  var allUnlocked = false;

  // 40 preset positions (top%, left%) — spread from hero to footer, edges only
  var POSITIONS = [
    [14,5],   [45,92],  [85,4],                         // hero (3)
    [108,88], [135,6],  [165,92], [195,7],               // about (4)
    [215,5],  [245,90], [268,8],  [290,92],              // services (4)
    [310,6],  [340,88], [365,7],  [388,90],              // process (4)
    [410,5],  [432,92], [455,6],  [478,88], [498,8],     // portfolio top (5)
    [515,90], [535,5],  [555,88], [575,7],               // portfolio bottom + docs (4)
    [595,92], [618,6],  [638,90], [658,8],               // testimonials (4)
    [678,88], [700,5],  [718,92], [735,7],               // contact (4)
    [750,88], [768,10], [785,90], [800,5],  [812,92]     // footer + beyond (5)
  ];

  // Randomly pick 7 unique positions
  function pickPositions(count) {
    var shuffled = POSITIONS.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
    }
    return shuffled.slice(0, count);
  }

  // Create hidden emoji elements
  function createEmojis() {
    var chosen = pickPositions(MAX_TOKENS);
    for (var i = 0; i < MAX_TOKENS; i++) {
      var el = document.createElement('span');
      el.className = 'hidden-emoji';
      var pos = chosen[i];
      el.style.top = pos[0] + '%';
      el.style.left = pos[1] + '%';
      el.textContent = '🪙';
      document.body.appendChild(el);
      emojis.push(el);
      setupEmoji(el);
    }
  }

  function setupEmoji(el) {
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
  }

  createEmojis();

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

  // Close bubble when language changes
  var langObserver = new MutationObserver(function () {
    if (bubble && bubble.classList.contains('visible')) closeBubble();
  });
  langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });

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
        var msg = (t.tokens_left || 'Nice work! You\'ve collected {X} of 7 tokens so far. Keep your eyes peeled — the tokens are hiding in plain sight!').replace('{X}', tokensFound);
        showBubble(msg);
      }
    });
  }
})();
