// TupãIA - Lógica Principal do Assistente Web
// Design Moderno & Respostas Diretas sobre Tupã - SP

let conversationHistory = [];

// Elementos da interface
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const heroCard = document.getElementById('heroCard');
const settingsModal = document.getElementById('settingsModal');
const btnOpenSettings = document.getElementById('btnOpenSettings');
const btnCloseSettings = document.getElementById('btnCloseSettings');
const settingsForm = document.getElementById('settingsForm');
const apiKeyInput = document.getElementById('apiKeyInput');
const modelSelect = document.getElementById('modelSelect');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');
const btnClearChat = document.getElementById('btnClearChat');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

// Carregar configurações
function loadSettings() {
  const savedKey = localStorage.getItem('tupa_gemini_api_key') || '';
  const savedModel = localStorage.getItem('tupa_gemini_model') || 'gemini-1.5-flash';
  
  apiKeyInput.value = savedKey;
  modelSelect.value = savedModel;
  
  updateStatus(savedKey, savedModel);
}

function updateStatus(key, model) {
  if (key && key.trim().length > 10) {
    statusDot.className = 'status-dot';
    statusText.innerText = `Online: ${model}`;
  } else {
    statusDot.className = 'status-dot local';
    statusText.innerText = 'Base Local Ativa';
  }
}

// Salvar configurações
settingsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const key = apiKeyInput.value.trim();
  const model = modelSelect.value;
  
  localStorage.setItem('tupa_gemini_api_key', key);
  localStorage.setItem('tupa_gemini_model', model);
  
  updateStatus(key, model);
  settingsModal.classList.remove('active');
  
  if (heroCard) heroCard.style.display = 'none';
  appendBotMessage(
    `⚙️ **Configurações salvas!**\n\n` +
    (key ? `🟢 Conexão com Google Gemini ativada! Pode perguntar qualquer assunto.` 
         : `⚡ Operando no modo Base Local Inteligente.`)
  );
});

// Modal toggle
btnOpenSettings.addEventListener('click', () => settingsModal.classList.add('active'));
btnCloseSettings.addEventListener('click', () => settingsModal.classList.remove('active'));
window.addEventListener('click', (e) => {
  if (e.target === settingsModal) settingsModal.classList.remove('active');
});

// Mobile menu toggle
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

// Nova conversa / Limpar chat
btnClearChat.addEventListener('click', () => {
  conversationHistory = [];
  chatMessages.innerHTML = '';
  if (heroCard) {
    chatMessages.appendChild(heroCard);
    heroCard.style.display = 'block';
  }
});

// Renderização limpa de Markdown
function formatMarkdown(text) {
  let html = text
    .replace(/^### (.*$)/gim, '<h4 style="margin: 8px 0 4px 0; color: #60a5fa; font-weight: 700;">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 style="margin: 10px 0 6px 0; color: #60a5fa; font-weight: 700;">$1</h3>')
    .replace(/^# (.*$)/gim, '<h2 style="margin: 12px 0 8px 0; color: #60a5fa; font-weight: 700;">$1</h2>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/```([\s\S]*?)```/gim, '<pre style="background: rgba(0,0,0,0.4); padding: 8px; border-radius: 6px; overflow-x: auto; margin: 6px 0;"><code>$1</code></pre>')
    .replace(/`([^`]+)`/gim, '<code style="background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px; color: #f59e0b;">$1</code>')
    .replace(/^\s*-\s+(.*$)/gim, '<li style="margin-left: 18px; margin-bottom: 4px;">$1</li>')
    .replace(/\n\n/gim, '<br><br>')
    .replace(/\n/gim, '<br>');
  return html;
}

// Mensagem do usuário
function appendUserMessage(text) {
  if (heroCard) heroCard.style.display = 'none';

  const msgDiv = document.createElement('div');
  msgDiv.className = 'message user';
  msgDiv.innerHTML = `
    <div class="msg-avatar">👤</div>
    <div class="msg-bubble">${formatMarkdown(text)}</div>
  `;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Mensagem do bot
function appendBotMessage(text, isInstant = false) {
  if (heroCard) heroCard.style.display = 'none';

  const msgDiv = document.createElement('div');
  msgDiv.className = 'message bot';
  const badge = isInstant ? `<div class="badge-tag">⚡ Resposta Instantânea</div>` : '';
  msgDiv.innerHTML = `
    <div class="msg-avatar">⚡</div>
    <div class="msg-bubble">
      ${badge}
      ${formatMarkdown(text)}
    </div>
  `;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return msgDiv;
}

// Chamada para a API do Google Gemini
async function callGeminiAPI(prompt, apiKey, model) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  
  const contents = conversationHistory.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));
  
  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });

  const payload = {
    system_instruction: {
      parts: [{ text: TUPA_SYSTEM_PROMPT }]
    },
    contents: contents,
    generationConfig: {
      temperature: 0.6,
      maxOutputTokens: 1000
    }
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Erro HTTP ${response.status}`);
  }

  const data = await response.json();
  const botText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!botText) throw new Error('A IA não retornou texto.');
  
  return botText;
}

// Envio de formulário
chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;

  userInput.value = '';
  appendUserMessage(text);

  const apiKey = localStorage.getItem('tupa_gemini_api_key');
  const model = localStorage.getItem('tupa_gemini_model') || 'gemini-1.5-flash';

  if (apiKey && apiKey.trim().length > 10) {
    const loadingBubble = appendBotMessage('⌛ *Pesquisando sobre Tupã...*');
    try {
      const reply = await callGeminiAPI(text, apiKey, model);
      loadingBubble.querySelector('.msg-bubble').innerHTML = formatMarkdown(reply);
      conversationHistory.push({ role: 'user', text: text });
      conversationHistory.push({ role: 'model', text: reply });
    } catch (err) {
      console.warn('Erro API Gemini:', err);
      const match = findLocalKnowledge(text);
      if (match) {
        loadingBubble.querySelector('.msg-bubble').innerHTML = formatMarkdown(`### ${match.title}\n\n${match.reply}`);
      } else {
        loadingBubble.querySelector('.msg-bubble').innerHTML = formatMarkdown(`⚠️ **Erro na conexão:** ${err.message}\n\nVerifique sua chave no botão **Configurações ⚙️**.`);
      }
    }
  } else {
    // Modo Base Local Super Preciso
    const match = findLocalKnowledge(text);

    if (match) {
      appendBotMessage(`### ${match.title}\n\n${match.reply}`, true);
    } else {
      const fallback = `Não encontrei informações específicas sobre esse termo na busca rápida.\n\n` +
        `💡 **Experimente perguntar sobre temas como:**\n` +
        `- **Gastronomia:** Onde comer, restaurantes, lanches\n` +
        `- **Lazer:** Eco Thermas, Museu Índia Vanuíre, Varpa\n` +
        `- **Educação:** UniFADAP, UNESP, ETEC\n` +
        `- **Serviços:** IPTU, Prefeitura, Saúde, Zoonoses, PAT\n\n` +
        `*Ou clique nas opções do menu lateral para navegar diretamente!*`;
      appendBotMessage(fallback, true);
    }
  }

  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Clique nos botões de tópicos da sidebar e nos botões do Hero
function attachClickHandlers(selector) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query');
      if (query) {
        userInput.value = query;
        chatForm.dispatchEvent(new Event('submit'));
        if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
          sidebar.classList.remove('open');
        }
      }
    });
  });
}

attachClickHandlers('.topic-item');
attachClickHandlers('.hero-btn');

// Inicialização
loadSettings();
