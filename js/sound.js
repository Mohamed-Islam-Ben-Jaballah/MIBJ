// ========================================
//  MIBJ Portfolio — Web Audio: glitch SFX + ambient drone
// ========================================

(function () {

  var ctx = null;
  var ambientGain = null;
  var ambientStarted = false;

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }

  // ── Glitch burst ──────────────────────────────────────────────
  function playGlitch() {
    try {
      var c = getCtx();
      var sr = c.sampleRate;
      var len = sr * 0.06;
      var buf = c.createBuffer(1, len, sr);
      var d = buf.getChannelData(0);
      for (var i = 0; i < len; i++) {
        var t = i / len;
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 4) * (Math.random() > 0.7 ? -1 : 1);
      }
      var src = c.createBufferSource();
      src.buffer = buf;
      var gain = c.createGain();
      gain.gain.value = 0.06;
      var filter = c.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 800;
      src.connect(filter).connect(gain).connect(c.destination);
      src.start();
    } catch (_) {}
  }

  // ── Ambient drone ─────────────────────────────────────────────
  function startAmbient() {
    if (ambientStarted) return;
    ambientStarted = true;
    try {
      var c = getCtx();
      ambientGain = c.createGain();
      ambientGain.gain.value = 0;
      ambientGain.connect(c.destination);

      // Low hum
      var osc1 = c.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.value = 55;
      var g1 = c.createGain();
      g1.gain.value = 0.04;
      osc1.connect(g1).connect(ambientGain);

      // Mid pad
      var osc2 = c.createOscillator();
      osc2.type = 'sawtooth';
      osc2.frequency.value = 110;
      var g2 = c.createGain();
      g2.gain.value = 0.015;
      var f2 = c.createBiquadFilter();
      f2.type = 'lowpass';
      f2.frequency.value = 300;
      osc2.connect(g2).connect(f2).connect(ambientGain);

      // Subtle LFO modulation on gain
      var lfo = c.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 0.15;
      var lfoGain = c.createGain();
      lfoGain.gain.value = 0.008;
      lfo.connect(lfoGain).connect(ambientGain.gain);
      lfo.start();

      osc1.start();
      osc2.start();

      // Fade in
      ambientGain.gain.setValueAtTime(0, c.currentTime);
      ambientGain.gain.linearRampToValueAtTime(0.35, c.currentTime + 3);
    } catch (_) {}
  }

  // ── Random glitch timer ───────────────────────────────────────
  var glitchTimer = null;

  function startGlitchLoop() {
    if (glitchTimer) return;
    function schedule() {
      var delay = 2000 + Math.random() * 5000;
      glitchTimer = setTimeout(function () {
        playGlitch();
        schedule();
      }, delay);
    }
    schedule();
  }

  // ── Init on first user interaction ────────────────────────────
  function init() {
    startAmbient();
    startGlitchLoop();
  }

  var listened = false;
  function ensureInit() {
    if (listened) return;
    listened = true;
    var ev = 'click touchstart keydown scroll';
    var handler = function () {
      document.removeEventListener(ev, handler);
      init();
    };
    document.addEventListener(ev, handler, { once: true, passive: true });
  }
  ensureInit();

})();