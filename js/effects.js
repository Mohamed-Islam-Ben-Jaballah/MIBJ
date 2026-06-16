// ========================================
//  MIBJ Portfolio — Interactive Effects
//  Mouse ripple, profile follow, hidden
//  emoji hunt, text bubble, token counter
// ========================================

// ---- Mouse Water Ripple Effect ----
(function () {
  var canvas = document.getElementById('rippleCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var ripples = [];
  var w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var mouseX = -100, mouseY = -100;
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  // Generate ripples continuously as mouse moves
  var lastRipple = 0;
  function spawnRipple() {
    var now = Date.now();
    if (now - lastRipple < 60) return;
    lastRipple = now;
    if (mouseX < 0) return;
    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    ripples.push({
      x: mouseX + (Math.random() - 0.5) * 8,
      y: mouseY + (Math.random() - 0.5) * 8,
      r: 2,
      maxR: 30 + Math.random() * 25,
      alpha: 0.5 + Math.random() * 0.3,
      speed: 0.4 + Math.random() * 0.3
    });
  }

  function animateRipples() {
    ctx.clearRect(0, 0, w, h);
    spawnRipple();
    for (var i = ripples.length - 1; i >= 0; i--) {
      var rip = ripples[i];
      rip.r += rip.speed;
      rip.alpha -= 0.008;
      if (rip.alpha <= 0 || rip.r > rip.maxR) {
        ripples.splice(i, 1);
        continue;
      }
      ctx.beginPath();
      ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(100, 255, 218, ' + rip.alpha.toFixed(3) + ')';
      ctx.lineWidth = 1.2;
      ctx.stroke();
      // Inner glow ripple
      ctx.beginPath();
      ctx.arc(rip.x, rip.y, rip.r * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(100, 255, 218, ' + (rip.alpha * 0.4).toFixed(3) + ')';
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }
    requestAnimationFrame(animateRipples);
  }
  animateRipples();
})();


// ---- Profile Follows Mouse (instead of avoid) ----
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
    bubbleText.innerHTML = '';
    bubble.classList.add('visible');
    bubble.classList.toggle('congrats-bubble', !!isCongrats);

    // Type text in two parts with a pause
    var mid = Math.floor(text.length / 2);
    var i = 0;
    var typing = true;

    function typeNext() {
      if (!typing) return;
      if (i < text.length) {
        bubbleText.innerHTML += '<span class="bubble-char">' + escapeChar(text[i]) + '</span>';
        i++;
        // Auto scroll text area
        bubbleText.scrollTop = bubbleText.scrollHeight;
        var speed = 20;
        setTimeout(typeNext, speed);
      } else {
        typing = false;
      }
    }

    // Type first half, pause, then second half
    function typeFirstHalf() {
      if (i < mid) {
        bubbleText.innerHTML += '<span class="bubble-char">' + escapeChar(text[i]) + '</span>';
        i++;
        setTimeout(typeFirstHalf, 20);
      } else {
        setTimeout(function () {
          typeSecondHalf();
        }, 1000);
      }
    }
    function typeSecondHalf() {
      if (i < text.length) {
        bubbleText.innerHTML += '<span class="bubble-char">' + escapeChar(text[i]) + '</span>';
        i++;
        bubbleText.scrollTop = bubbleText.scrollHeight;
        setTimeout(typeSecondHalf, 20);
      }
    }
    typeFirstHalf();
  }

  function escapeChar(c) {
    if (c === '<') return '&lt;';
    if (c === '>') return '&gt;';
    if (c === '&') return '&amp;';
    return c;
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
