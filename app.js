// TupãIA - Lógica Principal do Assistente Web

let conversationHistory = [];

// Elementos da interface
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
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

// Carregar configurações do localStorage
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
    statusText.innerText = 'Modo Base Local (Sem chave API)';
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
  
  appendBotMessage(`⚙️ **Configurações salvas!** ${key ? 'Conexão com Google Gemini ativada.' : 'Operando em modo base de dados local.'}`);
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

// Limpar conversa
btnClearChat.addEventListener('click', () => {
  if (confirm('Deseja limpar todo o histórico da conversa?')) {
    conversationHistory = [];
    chatMessages.innerHTML = '';
    renderWelcomeMessage();
  }
});

// Mensagem inicial de boas-vindas
function renderWelcomeMessage() {
  appendBotMessage(
    `👋 **Olá! Eu sou o TupãIA**, seu especialista na Estância Turística de **Tupã - SP**!\n\n` +
    `Estou aqui para tirar dúvidas sobre a história da cidade, turismo, cultura, distritos (como Varpa), ` +
    `faculdades (como a **UniFADAP** e a **UNESP**), economia e serviços municipais.\n\n` +
    `Como posso ajudar você hoje? Clique em um dos tópicos ao lado ou digite sua pergunta abaixo!`
  );
}

// Renderização simples e segura de Markdown
function formatMarkdown(text) {
  let html = text
    .replace(/^### (.*$)/gim, '<h3 style="margin: 8px 0; color: #ffcc66;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="margin: 10px 0; color: #ffcc66;">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 style="margin: 12px 0; color: #ffcc66;">$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/```([\s\S]*?)```/gim, '<pre style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 6px; overflow-x: auto;"><code>$1</code></pre>')
    .replace(/`([^`]+)`/gim, '<code style="background: rgba(0,0,0,0.3); padding: 2px 5px; border-radius: 4px;">$1</code>')
    .replace(/^\s*-\s+(.*$)/gim, '<li style="margin-left: 18px;">$1</li>')
    .replace(/\n\n/gim, '<br><br>')
    .replace(/\n/gim, '<br>');
  return html;
}

// Inserir mensagem do usuário
function appendUserMessage(text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message user';
  msgDiv.innerHTML = `
    <div class="message-avatar">👤</div>
    <div class="message-bubble">${formatMarkdown(text)}</div>
  `;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Inserir mensagem do bot
function appendBotMessage(text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message bot';
  msgDiv.innerHTML = `
    <div class="message-avatar">⚡</div>
    <div class="message-bubble">${formatMarkdown(text)}</div>
  `;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return msgDiv;
}

// Enviar requisição para a API do Gemini
async function callGeminiAPI(prompt, apiKey, model) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  
  // Monta histórico de conteúdo
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
      temperature: 0.7,
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
  if (!botText) throw new Error('A IA não retornou texto na resposta.');
  
  return botText;
}

// Lidar com o envio de mensagens
chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;

  userInput.value = '';
  appendUserMessage(text);

  const apiKey = localStorage.getItem('tupa_gemini_api_key');
  const model = localStorage.getItem('tupa_gemini_model') || 'gemini-1.5-flash';

  const loadingBubble = appendBotMessage('⌛ *Pesquisando sobre Tupã...*');

  try {
    if (apiKey && apiKey.trim().length > 10) {
      // Usar a API do Gemini
      const reply = await callGeminiAPI(text, apiKey, model);
      loadingBubble.querySelector('.message-bubble').innerHTML = formatMarkdown(reply);
      
      conversationHistory.push({ role: 'user', text: text });
      conversationHistory.push({ role: 'model', text: reply });
    } else {
      // Modo Base Local Inteligente
      setTimeout(() => {
        const localMatch = findLocalKnowledge(text);
        if (localMatch) {
          const reply = `### ${localMatch.title}\n\n${localMatch.content}\n\n---\n*💡 Dica: Para fazer perguntas livres e personalizadas com IA em tempo real, adicione sua chave gratuita do Google Gemini nas Configurações ⚙️.*`;
          loadingBubble.querySelector('.message-bubble').innerHTML = formatMarkdown(reply);
        } else {
          const fallbackReply = `Não encontrei essa informação específica na minha base rápida offline.\n\n` +
            `👉 **Como ativar o modo completo:**\n` +
            `Você pode obter uma chave de API gratuita no [Google AI Studio](https://aistudio.google.com/app/apikey) e colá-la no botão **⚙️ Configurar API** ao lado. ` +
            `Com ela, posso responder qualquer pergunta sobre Tupã com a inteligência do Gemini!`;
          loadingBubble.querySelector('.message-bubble').innerHTML = formatMarkdown(fallbackReply);
        }
      }, 500);
    }
  } catch (err) {
    console.error(err);
    const localMatch = findLocalKnowledge(text);
    let errorMsg = `⚠️ **Ops, ocorreu um erro ao conectar com a API:** ${err.message}\n\n`;
    if (localMatch) {
      errorMsg += `*Recuperando resposta da base local de Tupã:*\n\n### ${localMatch.title}\n\n${localMatch.content}`;
    } else {
      errorMsg += `Verifique se sua chave de API está correta no menu **Configurações ⚙️**.`;
    }
    loadingBubble.querySelector('.message-bubble').innerHTML = formatMarkdown(errorMsg);
  }

  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Clique nos tópicos sugeridos
document.querySelectorAll('.topic-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const query = chip.getAttribute('data-query');
    if (query) {
      userInput.value = query;
      chatForm.dispatchEvent(new Event('submit'));
      if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    }
  });
});

// Inicialização
loadSettings();
renderWelcomeMessage();
