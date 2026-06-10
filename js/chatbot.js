// ========================================
//  MIBJ Portfolio — AI Chatbot
//  Powered by Google Gemini (proxied through server)
//  Data (prompts, translations, SVGs) lives in chatbot-data.js
// ========================================

(function () {

  var D = CHATBOT_DATA;

  var isOpen = false;
  var conversationHistory = [];
  var isLoading = false;
  var welcomeSent = false;

  // ── DOM refs (populated in buildUI) ─────────────────────────────────
  var chatBtn, chatPanel, messagesEl, inputEl, sendBtn, quickRepliesEl;
  var headerNameEl, headerStatusEl;

  // ── Language helpers ───────────────────────────────────────────────────
  function getCurrentLang() {
    var lang = document.documentElement.getAttribute('data-lang') || 'en';
    return D.LANG_UI[lang] ? lang : 'en';
  }

  function getLangUI() { return D.LANG_UI[getCurrentLang()]; }

  function renderQuickReplies() {
    if (!quickRepliesEl) return;
    quickRepliesEl.innerHTML = '';
    getLangUI().quickReplies.forEach(function (qr) {
      var btn = document.createElement('button');
      btn.className = 'chat-quick-reply';
      btn.textContent = qr.label;
      btn.addEventListener('click', function () { handleSend(qr.text); });
      quickRepliesEl.appendChild(btn);
    });
    quickRepliesEl.style.display = '';
  }

  function updateChatbotLang(lang) {
    var ui = D.LANG_UI[lang] || D.LANG_UI.en;
    if (headerNameEl)   headerNameEl.textContent = ui.headerName;
    if (headerStatusEl) headerStatusEl.innerHTML =
      '<span class="chat-status-dot" aria-hidden="true"></span>' + ui.statusOnline;
    if (inputEl)        inputEl.placeholder = ui.placeholder;
    renderQuickReplies();
    conversationHistory = [];
    welcomeSent = false;
    if (messagesEl) messagesEl.innerHTML = '';
    if (isOpen) {
      setTimeout(function () {
        var freshUI = D.LANG_UI[lang] || D.LANG_UI.en;
        appendMessage(freshUI.welcome, 'bot');
        welcomeSent = true;
      }, 100);
    }
  }

  // ── Call Gemini API ──────────────────────────────────────────────
  var cachedSystemText = {};

  function callGemini(userMessage) {
    var lang = getCurrentLang();

    if (!cachedSystemText[lang]) {
      var ui = D.LANG_UI[lang];
      cachedSystemText[lang] =
        'IMPORTANT: You MUST respond entirely in ' + ui.langName +
        '. Every word must be in ' + ui.langName + '.\n\n' +
        D.BASE_SYSTEM_PROMPT.replace('{KNOWLEDGE_BASE}', D.KNOWLEDGE_BASE);
    }

    conversationHistory.push({ role: 'user', parts: [{ text: userMessage }] });

    var contents = [
      { role: 'user', parts: [{ text: cachedSystemText[lang] }] },
      { role: 'model', parts: [{ text: 'Understood.' }] },
    ].concat(conversationHistory.slice(-8));

    var body = {
      model: D.CONFIG.model,
      contents: contents,
      generationConfig: {
        temperature: 0.5,
        maxOutputTokens: 512
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT',        threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
      ]
    };

    console.log('[Chatbot] Sending request to', D.CONFIG.proxyUrl, 'with model:', D.CONFIG.model);
    console.log('[Chatbot] Request body:', JSON.stringify(body, null, 2));

    return fetch(D.CONFIG.proxyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    .then(function (res) {
      console.log('[Chatbot] Response status:', res.status);
      return res.json().then(function (data) {
        console.log('[Chatbot] Response data:', JSON.stringify(data, null, 2));
        if (!res.ok) {
          var errorMsg = (data.error && data.error.message) || 'API error ' + res.status;
          console.error('[Chatbot] API error:', errorMsg);
          throw new Error(errorMsg);
        }
        return data;
      });
    })
    .then(function (data) {
      var reply = (data.candidates
        && data.candidates[0]
        && data.candidates[0].content
        && data.candidates[0].content.parts
        && data.candidates[0].content.parts[0]
        && data.candidates[0].content.parts[0].text)
        || 'Sorry, I could not generate a response.';

      console.log('[Chatbot] Extracted reply:', reply);
      conversationHistory.push({ role: 'model', parts: [{ text: reply }] });
      return reply;
    });
  }

  // ── Render helpers ───────────────────────────────────────────────────
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function formatText(raw) {
    return escapeHtml(raw)
      .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`\n]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

  function appendMessage(text, role) {
    var wrap = document.createElement('div');
    wrap.className = 'chat-message chat-message--' + role;

    if (role === 'bot') {
      wrap.innerHTML =
        '<div class="chat-bubble">' +
          '<div class="chat-bot-avatar">' + D.BOT_SVG_SMALL + '</div>' +
          '<div class="chat-text">' + formatText(text) + '</div>' +
        '</div>';
    } else {
      wrap.innerHTML =
        '<div class="chat-bubble">' +
          '<div class="chat-text">' + formatText(text) + '</div>' +
        '</div>';
    }

    messagesEl.appendChild(wrap);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    var el = document.createElement('div');
    el.id = 'chatTyping';
    el.className = 'chat-message chat-message--bot';
    el.innerHTML =
      '<div class="chat-bubble">' +
        '<div class="chat-bot-avatar">' + D.BOT_SVG_SMALL + '</div>' +
        '<div class="typing-dots"><span></span><span></span><span></span></div>' +
      '</div>';
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function hideTyping() {
    var el = document.getElementById('chatTyping');
    if (el) el.remove();
  }

  // ── Handle user send ─────────────────────────────────────────────────
  function handleSend(overrideText) {
    var message = typeof overrideText === 'string'
      ? overrideText.trim()
      : inputEl.value.trim();

    if (!message || isLoading) return;

    inputEl.value = '';

    if (quickRepliesEl && quickRepliesEl.style.display !== 'none') {
      quickRepliesEl.style.display = 'none';
    }

    appendMessage(message, 'user');
    isLoading = true;
    sendBtn.disabled = true;
    inputEl.disabled = true;
    showTyping();

    callGemini(message)
      .then(function (reply) {
        hideTyping();
        appendMessage(reply, 'bot');
      })
      .catch(function (err) {
        hideTyping();
        conversationHistory.pop();
        console.error('[Chatbot] API error:', err && err.message);
        appendMessage(getLangUI().error, 'bot');
      })
      .then(function () {
        isLoading = false;
        sendBtn.disabled = false;
        inputEl.disabled = false;
        inputEl.focus();
      });
  }

  // ── Open / close panel ───────────────────────────────────────────────
  function openChat() {
    isOpen = true;
    chatPanel.classList.add('open');
    chatBtn.classList.add('active');
    chatBtn.setAttribute('aria-expanded', 'true');

    if (!welcomeSent) {
      welcomeSent = true;
      setTimeout(function () {
        appendMessage(getLangUI().welcome, 'bot');
      }, 180);
    }

    setTimeout(function () { if (inputEl) inputEl.focus(); }, 350);
  }

  function closeChat() {
    isOpen = false;
    chatPanel.classList.remove('open');
    chatBtn.classList.remove('active');
    chatBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleChat() { isOpen ? closeChat() : openChat(); }

  // ── Build DOM ────────────────────────────────────────────────────────
  function buildUI() {

    // ---- FAB button ----
    chatBtn = document.createElement('button');
    chatBtn.id = 'chatFab';
    chatBtn.className = 'chat-fab';
    chatBtn.setAttribute('aria-label', 'Open AI assistant');
    chatBtn.setAttribute('aria-expanded', 'false');
    chatBtn.setAttribute('aria-controls', 'chatPanel');
    chatBtn.innerHTML = D.BOT_SVG_FAB + D.BOT_SVG_CLOSE + '<span class="chat-fab__ping" aria-hidden="true"></span>';
    chatBtn.addEventListener('click', toggleChat);
    document.body.appendChild(chatBtn);

    // ---- Chat panel ----
    chatPanel = document.createElement('div');
    chatPanel.id = 'chatPanel';
    chatPanel.className = 'chat-panel';
    chatPanel.setAttribute('role', 'dialog');
    chatPanel.setAttribute('aria-modal', 'false');
    chatPanel.setAttribute('aria-label', 'MIBJ AI Assistant');

    chatPanel.innerHTML =
      '<div class="chat-header">' +
        '<div class="chat-header__info">' +
          '<div class="chat-header__avatar">' + D.BOT_SVG_HEADER + '</div>' +
          '<div>' +
            '<div class="chat-header__name">MIBJ Assistant</div>' +
            '<div class="chat-header__status"><span class="chat-status-dot" aria-hidden="true"></span>Online</div>' +
          '</div>' +
        '</div>' +
        '<button class="chat-header__close" id="chatClose" aria-label="Close assistant">&times;</button>' +
      '</div>' +
      '<div class="chat-messages" id="chatMessages" role="log" aria-live="polite" aria-label="Chat messages"></div>' +
      '<div class="chat-quick-replies" id="chatQuickReplies" aria-label="Suggested questions"></div>' +
      '<div class="chat-input-bar">' +
        '<input type="text" class="chat-input" id="chatInput" placeholder="Ask me anything…" autocomplete="off" autocorrect="off" spellcheck="false" maxlength="600" aria-label="Type your message"/>' +
        '<button class="chat-send" id="chatSend" aria-label="Send message">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
        '</button>' +
      '</div>';

    document.body.appendChild(chatPanel);

    // ---- Cache refs ----
    messagesEl     = document.getElementById('chatMessages');
    inputEl        = document.getElementById('chatInput');
    sendBtn        = document.getElementById('chatSend');
    quickRepliesEl = document.getElementById('chatQuickReplies');
    headerNameEl   = chatPanel.querySelector('.chat-header__name');
    headerStatusEl = chatPanel.querySelector('.chat-header__status');

    // ---- Apply current language ----
    var initUI = getLangUI();
    headerNameEl.textContent  = initUI.headerName;
    headerStatusEl.innerHTML  = '<span class="chat-status-dot" aria-hidden="true"></span>' + initUI.statusOnline;
    inputEl.placeholder       = initUI.placeholder;
    renderQuickReplies();

    // ---- Wire events ----
    document.getElementById('chatClose').addEventListener('click', closeChat);

    sendBtn.addEventListener('click', function () { handleSend(); });

    inputEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) closeChat();
    });
  }

  // ── Init ─────────────────────────────────────────────────────────────
  function init() {
    buildUI();
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.attributeName === 'data-lang') {
          updateChatbotLang(document.documentElement.getAttribute('data-lang') || 'en');
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
