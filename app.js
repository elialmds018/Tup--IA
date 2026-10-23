// TupãIA - Lógica Principal do Assistente Web
// Especialista na Estância Turística de Tupã - SP

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

// Carregar configurações salvas
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
    statusText.innerText = '⚡ Base Local Ativa (Respostas Instantâneas)';
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
  
  appendBotMessage(
    `⚙️ **Configurações salvas com sucesso!**\n\n` +
    (key ? `🟢 **Conexão com Google Gemini ativada!** Agora o TupãIA pode responder qualquer pergunta livre com raciocínio contextual.` 
         : `⚡ **Modo Base Local ativo.** Você pode consultar tudo sobre Tupã instantaneamente!`)
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
    `👋 **Olá! Eu sou o TupãIA**, a maior inteligência e enciclopédia sobre a Estância Turística de **Tupã - SP**!\n\n` +
    `Fui alimentado com dados completos sobre tudo o que existe na nossa cidade:\n` +
    `- 🏛️ **História & Fundação** (Luiz de Souza Leão, 1929, ruas com nomes indígenas)\n` +
    `- 🎓 **Ensino Superior** (**UniFADAP** / Faccat, UNESP Câmpus de Tupã e ETEC)\n` +
    `- 🌊 **Turismo & Lazer** (Eco Thermas com águas quentes, Museu Índia Vanuíre, Bosque e Praça da Bandeira)\n` +
    `- 🌾 **Distritos** (Varpa e a colônia da Letônia, Universo e Parnaso)\n` +
    `- 🥜 **Economia & Agronegócio** (Capital Nacional do Amendoim, comércio e indústrias)\n` +
    `- 🍽️ **Gastronomia & Eventos** (Água Doce / Museu da Cachaça, EXAPIT e Quermesse de São Pedro)\n` +
    `- 🏥 **Saúde & Telefones** (Santa Casa, UPA 24h, SAMU e Prefeitura)\n\n` +
    `Pergunte o que desejar sobre Tupã abaixo ou clique em um dos temas ao lado!`
  );
}

// Renderização de Markdown para HTML
function formatMarkdown(text) {
  let html = text
    .replace(/^### (.*$)/gim, '<h3 style="margin: 10px 0 6px 0; color: #ffcc66; font-size: 1.1rem;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="margin: 12px 0 8px 0; color: #ffcc66; font-size: 1.25rem;">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 style="margin: 14px 0 10px 0; color: #ffcc66; font-size: 1.4rem;">$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/```([\s\S]*?)```/gim, '<pre style="background: rgba(0,0,0,0.35); padding: 10px; border-radius: 6px; overflow-x: auto; margin: 8px 0;"><code>$1</code></pre>')
    .replace(/`([^`]+)`/gim, '<code style="background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px; color: #f39c12;">$1</code>')
    .replace(/^\s*-\s+(.*$)/gim, '<li style="margin-left: 20px; margin-bottom: 4px;">$1</li>')
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
function appendBotMessage(text, isInstant = false) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message bot';
  const instantBadge = isInstant ? `<div style="font-size: 0.72rem; color: #f39c12; margin-bottom: 6px; font-weight: 600;">⚡ RESPOSTA INSTANTÂNEA DA BASE LOCAL</div>` : '';
  msgDiv.innerHTML = `
    <div class="message-avatar">⚡</div>
    <div class="message-bubble">
      ${instantBadge}
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
      temperature: 0.7,
      maxOutputTokens: 1200
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

// Lidar com envio de mensagens
chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;

  userInput.value = '';
  appendUserMessage(text);

  const apiKey = localStorage.getItem('tupa_gemini_api_key');
  const model = localStorage.getItem('tupa_gemini_model') || 'gemini-1.5-flash';

  // Se tiver API Key, consulta o Gemini
  if (apiKey && apiKey.trim().length > 10) {
    const loadingBubble = appendBotMessage('⌛ *Consultando o cérebro de IA sobre Tupã...*');
    try {
      const reply = await callGeminiAPI(text, apiKey, model);
      loadingBubble.querySelector('.message-bubble').innerHTML = formatMarkdown(reply);
      conversationHistory.push({ role: 'user', text: text });
      conversationHistory.push({ role: 'model', text: reply });
    } catch (err) {
      console.warn('Erro na API Gemini, buscando na base local:', err);
      const localMatch = findLocalKnowledge(text);
      let replyContent = '';
      if (localMatch) {
        replyContent = `⚠️ *Erro na chave da API, recuperando dados da base local offline:*\n\n` +
                       `### ${localMatch.title}\n\n${localMatch.content}`;
      } else {
        replyContent = `⚠️ **Erro na conexão com a API:** ${err.message}\n\nVerifique sua chave no menu de configurações ⚙️.`;
      }
      loadingBubble.querySelector('.message-bubble').innerHTML = formatMarkdown(replyContent);
    }
  } else {
    // Modo Base Local Super Veloz (Instantâneo)
    const localMatch = findLocalKnowledge(text);

    if (localMatch) {
      const reply = `### ${localMatch.title}\n\n${localMatch.content}\n\n---\n*💡 Dica: Para conversar livremente em tempo real com raciocínio expandido, você pode adicionar a chave gratuita do Google Gemini nas Configurações ⚙️.*`;
      appendBotMessage(reply, true);
    } else {
      // Resumo inteligente orientando sobre o que pesquisar
      const guideReply = `Não encontrei um tópico exato para esse termo específico na busca rápida.\n\n` +
        `📚 **Você pode me perguntar sobre:**\n` +
        `- **História:** Fundação em 1929, Luiz de Souza Leão, ruas com nomes indígenas\n` +
        `- **Educação:** UniFADAP, UNESP, ETEC Massuyuki Kawano\n` +
        `- **Turismo & Lazer:** Eco Thermas (parque aquático), Museu Índia Vanuíre, Bosque, Praça da Bandeira\n` +
        `- **Distritos:** Varpa (cultura letã, queijo e pão preto), Universo, Parnaso\n` +
        `- **Economia:** Capital do Amendoim, cana-de-açúcar, avicultura\n` +
        `- **Saúde & Telefones:** Santa Casa, UPA 24h, Bombeiros (193), SAMU (192)\n` +
        `- **Prefeitura:** Prefeito Renan Pontelli, Palácio das Nações\n\n` +
        `👉 *Dica de ouro:* Adicione sua chave gratuita do [Google AI Studio](https://aistudio.google.com/app/apikey) nas **Configurações ⚙️** para a IA responder absolutamente qualquer pergunta sem limites!`;
      appendBotMessage(guideReply, true);
    }
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
