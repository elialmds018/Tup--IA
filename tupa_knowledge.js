// =====================================================================
// TupãIA - Motor de Conhecimento e Respostas Precisas sobre Tupã - SP
// Respostas diretas, sem desconexão, com classificação inteligente de intenção
// =====================================================================

const TUPA_SYSTEM_PROMPT = `Você é o "TupãIA", o assistente oficial inteligente e moderno da cidade de Tupã, interior de São Paulo.
Sua missão é responder de forma direta, precisa, amigável e conversacional.

Diretrizes essenciais:
1. Seja DIRETO ao ponto: evite enrolação ou respostas longas demais.
2. Responda exatamente o que o usuário perguntou. Se ele perguntou de comida, fale de comida. Se perguntou de IPTU, fale de IPTU.
3. Use formatação limpa (negrito e listas curtas).
4. Você domina: História (1929, Luiz de Souza Leão), UniFADAP, UNESP, Eco Thermas, Varpa, Índia Vanuíre, Gastronomia, IPTU, 1Doc, Saúde (Santa Casa/UPA) e Prefeito Renan Pontelli.`;

// Base categorizada com respostas diretas e objetivas
const TUPA_TOPICS = [
  // --- GASTRONOMIA E RESTAURANTES ---
  {
    id: "gastronomia",
    matchers: ["comer", "comida", "restaurante", "restaurantes", "almoco", "almoçar", "jantar", "janta", "pizzaria", "pizza", "lanche", "lanches", "espetinho", "agua doce", "cachaca", "cafe", "ki-pao", "pastel", "japonesa", "bar", "noite", "onde comer"],
    title: "🍽️ Onde Comer e Gastronomia em Tupã",
    reply: `Aqui estão as melhores opções de gastronomia e onde comer em Tupã:

- **Água Doce Cachaçaria & Museu da Cachaça:** O ponto gastronômico mais famoso da cidade (Rua México, Jd. América). Pratos típicos brasileiros, porções e um acervo impressionante de cachaças.
- **Lanches e Trailers Tradicionais:** A cultura dos lanches prensados e espetinhos é fortíssima na **Avenida Tamoios** e ao redor da **Praça da Bandeira**.
- **Culinária de Varpa:** Confeitarias e pousadas rurais no distrito de Varpa servindo o autêntico **pão preto letão**, queijo com cominho e tortas artesanais.
- **Comida Oriental e Pastelarias:** Pela forte presença da colônia japonesa, há ótimas opções de sushis e pasteis caprichados nas feiras livres e centros gastronômicos.
- **Cafeterias e Padarias:** A tradicional **Ki-Pão** e confeitarias do centro para cafés da manhã e lanches da tarde.`
  },

  // --- ECO THERMAS (PARQUE AQUÁTICO) ---
  {
    id: "eco_thermas",
    matchers: ["eco thermas", "ecothermas", "parque aquatico", "piscina", "aguas quentes", "toboga", "termas", "clube", "banho", "baia do pirata", "chale", "resort"],
    title: "🌊 Eco Thermas Tupã (Parque Aquático de Águas Quentes)",
    reply: `O **Eco Thermas Tupã** é o grande parque aquático e de lazer da Alta Paulista:

- **Águas Quentes Naturais:** Piscinas termais aquecidas, toboáguas para todas as idades, ofurôs de relaxamento e cascatas.
- **Para Crianças:** A famosa *Baía do Pirata*, playground aquático infantil com navio e balde gigante.
- **Natureza e Chalés:** Trilhas em seringais, minifazenda com animais e chalés rústicos para hospedagem.
- **Localização:** Estrada Tupã ao Bairro São Bento, km 7. Aberto para day-use com ingressos antecipados.`
  },

  // --- UNIFADAP ---
  {
    id: "unifadap",
    matchers: ["unifadap", "fadap", "fap", "faccat", "faculdade", "direito", "faculdades", "vestibular", "cursos superiores", "enfermagem", "veterinaria", "psicologia", "odontologia"],
    title: "🎓 UniFADAP - Centro Universitário da Alta Paulista",
    content: "UniFADAP",
    reply: `A **UniFADAP** (FADAP / FAP / Faccat) é a mais tradicional instituição de ensino superior da Alta Paulista em Tupã:

- **Cursos Renomados:** Direito (um dos mais antigos e conceituados do interior paulista), Enfermagem, Medicina Veterinária, Psicologia, Engenharia Civil, Administração, Pedagogia, Odontologia e Educação Física.
- **Estrutura:** Campus amplo, Hospital Veterinário próprio, Núcleo de Prática Jurídica (NPJ), clínicas de odontologia e psicologia abertas à população.
- **História:** Fundada há mais de 50 anos, transformou Tupã em um polo educacional que atrai estudantes de todo o estado.`
  },

  // --- UNESP ---
  {
    id: "unesp",
    matchers: ["unesp", "universidade publica", "campus tupa", "biossistemas", "engenharia de biossistemas", "faculdade publica"],
    title: "🔬 UNESP - Câmpus Experimental de Tupã",
    reply: `A **UNESP Tupã** oferece ensino superior público, gratuito e de altíssimo nível:

- **Cursos de Graduação:**
  - **Administração com Ênfase em Agronegócio:** Focado na gestão de cooperativas e cadeias produtivas agroindustriais.
  - **Engenharia de Biossistemas:** Engenharia moderna que une tecnologia, produção agropecuária e sustentabilidade ambiental.
- **Pós-Graduação:** Mestrado em Agronegócio e Desenvolvimento.
- **Endereço:** Av. Domingos da Costa Lopes, 780 - Jardim Itaipu.`
  },

  // --- IPTU, IMPOSTOS E ISENÇÃO ---
  {
    id: "iptu",
    matchers: ["iptu", "segunda via iptu", "carne", "imposto", "impostos", "isencao", "idoso", "aposentado", "divida ativa", "itbi", "tributo"],
    title: "💰 IPTU e Isenção de Impostos em Tupã",
    reply: `Informações sobre IPTU e tributos na Prefeitura de Tupã:

- **2ª Via do IPTU:** Pode ser emitida pela internet no portal oficial ([tupa.sp.gov.br](https://www.tupa.sp.gov.br)) ou na Central 1Doc com o número da inscrição cadastral.
- **Isenção para Idosos e Aposentados:** Moradores com 65 anos ou mais, ou aposentados com renda comprovada e imóvel único, têm direito à isenção anual do IPTU mediante requerimento na Prefeitura ou pelo 1Doc.
- **Parcelamento e Dívida Ativa:** Pode ser negociado presencialmente no Paço Municipal ou via protocolo digital.`
  },

  // --- PREFEITURA E CENTRAL 1DOC ---
  {
    id: "prefeitura",
    matchers: ["prefeitura", "paco municipal", "horario prefeitura", "telefone prefeitura", "1doc", "protocolo", "palacio das nacoes", "prefeito", "renan pontelli"],
    title: "🏛️ Prefeitura Municipal de Tupã",
    reply: `Dados da Prefeitura da Estância Turística de Tupã:

- **Prefeito Atual:** **Renan Pontelli** (mandato 2025-2028), com a vice-prefeita Joice Berni.
- **Sede (Paço Municipal):** Praça da Bandeira, nº 800 - Centro.
- **Telefone Geral:** (14) 3404-1000 | **Atendimento:** Segunda a sexta, das 7h30 às 17h.
- **Central Digital 1Doc ([tupa.1doc.com.br](https://tupa.1doc.com.br/atendimento)):** Para abrir chamados, pedir certidões e acompanhar protocolos online sem sair de casa.`
  },

  // --- SAÚDE, HOSPITAIS E UPA ---
  {
    id: "saude",
    matchers: ["hospital", "santa casa", "upa", "medico", "saude", "pronto socorro", "remedio", "farmacia", "samu", "posto de saude", "ubs", "ame"],
    title: "🏥 Saúde e Hospitais em Tupã",
    reply: `Principais unidades de atendimento médico e urgência em Tupã:

- **Santa Casa de Tupã:** Hospital geral de referência regional para internações, cirurgias e alta complexidade.
- **UPA 24 Horas:** Atendimento médico clínico de urgência e emergência 24h por dia.
- **Hospital São Francisco:** Atendimento hospitalar privado e convênios.
- **AME Tupã:** Ambulatório Médico com consultas em diversas especialidades e exames.
- **Secretaria de Saúde:** Rua Caetés, 1200 | WhatsApp: (14) 99854-9157.
- **Emergências:** SAMU: **192** | Bombeiros: **193**.`
  },

  // --- VARPA E CULTURA LETÃ ---
  {
    id: "varpa",
    matchers: ["varpa", "letonia", "letoes", "letao", "distrito de varpa", "museu janis", "pao preto", "queijo letao", "balneario", "7 de setembro"],
    title: "🌾 Distrito de Varpa e a Cultura da Letônia",
    reply: `**Varpa** é o distrito histórico mais famoso de Tupã, a 25 km do centro:

- **Origem:** Fundado em 1922 por imigrantes da Letônia que trouxeram sua fé batista, arquitetura de madeira e hábitos europeus.
- **Gastronomia Típica:** Pão preto de centeio artesanal, queijo letão com sementes de cominho, biscoitos de mel e tortas caseiras.
- **Pontos Turísticos:**
  - *Museu dos Pioneiros de Varpa (Janis Erdbergs):* Acervo e fotos dos pioneiros.
  - *Balneário 7 de Setembro:* Área verde de lazer natural, riacho para banho e quiosques.`
  },

  // --- MUSEU ÍNDIA VANUÍRE ---
  {
    id: "museu",
    matchers: ["museu", "india vanuire", "indigena", "kaingang", "krenak", "terena", "rua coroados", "vanuire"],
    title: "🏺 Museu Histórico e Pedagógico Índia Vanuíre",
    reply: `O **Museu Índia Vanuíre** é um dos mais importantes museus etnográficos da América Latina:

- **Acervo:** Milhares de peças e artefatos dos povos indígenas Kaingang, Krenak e Terena que habitavam a Alta Paulista.
- **Visitação:** Entrada **gratuita** de terça a domingo.
- **Endereço:** Rua Coroados, 521 - Centro de Tupã.`
  },

  // --- HISTÓRIA E FUNDADOR ---
  {
    id: "historia",
    matchers: ["historia", "fundacao", "fundador", "luiz de souza leao", "1929", "quando nasceu", "origem", "12 de outubro"],
    title: "🏛️ História e Fundação de Tupã",
    reply: `A história de **Tupã**:

- **Fundação:** Fundada em **12 de outubro de 1929** pelo desbravador **Luiz de Souza Leão**.
- **Planejamento:** Nasceu com ruas largas desenhadas em formato de tabuleiro de xadrez para receber a ferrovia.
- **Nome:** Homenageia o Deus do Trovão dos povos Tupi-Guarani e as populações indígenas locais.
- **Estância Turística:** Conquistou o título em 1997 pela riqueza cultural e atrativos naturais.`
  },

  // --- RUAS COM NOMES INDÍGENAS ---
  {
    id: "ruas_indigenas",
    matchers: ["ruas", "rua", "nomes indigenas", "tamoios", "aimores", "cherentes", "mandaguaris", "nhambiquaras", "avenida tamoios"],
    title: "🏹 Ruas com Nomes Indígenas em Tupã",
    reply: `Em Tupã, as ruas e avenidas do centro histórico homenageiam tribos indígenas do Brasil:

- **Avenida Tamoios:** A principal avenida comercial e financeira da cidade.
- **Avenida Aimorés:** Grande avenida paralela.
- **Ruas:** Cherentes, Mandaguaris, Nhambiquaras, Coroados, Caingangs, Potiguaras, Guaranis, Goitacazes, Ubirajaras e Timborés.`
  },

  // --- EXAPIT E EVENTOS ---
  {
    id: "eventos",
    matchers: ["exapit", "eventos", "festa", "rodeio", "shows", "recinto", "carnaval", "tupa folia", "sao pedro", "quermesse"],
    title: "🎪 EXAPIT e Grandes Eventos de Tupã",
    reply: `Os maiores eventos do calendário de Tupã:

- **EXAPIT (Exposição Agropecuária e Industrial):** Realizada todo mês de agosto no Recinto Octávio Barros Castanheira, com rodeio em touros, grandes shows e parque.
- **Quermesse de São Pedro (29 de Junho):** Tradicional festa do padroeiro na Praça da Matriz.
- **Tupã Folia:** Um dos maiores carnavais de rua gratuitos do interior paulista na Av. Tamoios.`
  },

  // --- ECONOMIA E AMENDOIM ---
  {
    id: "economia",
    matchers: ["amendoim", "economia", "agronegocio", "capital do amendoim", "industria", "cana", "usina", "agricultura"],
    title: "🥜 Capital Nacional do Amendoim e Economia",
    reply: `Tupã é conhecida nacionalmente como a **Capital do Amendoim**:

- É o maior polo de cultivo, processamento e exportação de amendoim do Brasil.
- Destaca-se também na produção de cana-de-açúcar, grãos, café e comércio regional consolidado.`
  },

  // --- PAT, EMPREGOS E BANCO DO POVO ---
  {
    id: "trabalho_pat",
    matchers: ["pat", "emprego", "vagas de emprego", "trabalho", "curriculo", "banco do povo", "procon", "emprestimo"],
    title: "💼 PAT (Vagas de Emprego), Banco do Povo e Procon",
    reply: `Serviços ao trabalhador e ao consumidor em Tupã:

- **PAT (Posto de Atendimento ao Trabalhador):** Divulga vagas abertas diariamente e auxilia no seguro-desemprego e carteira de trabalho digital.
- **Banco do Povo Paulista:** Microcrédito e empréstimos produtivos com juros reduzidos para MEIs e autônomos.
- **Procon de Tupã:** Defesa do consumidor e resolução de conflitos com empresas.`
  },

  // --- ZOONOSES E CASTRAÇÃO ---
  {
    id: "zoonoses",
    matchers: ["castracao", "castrar", "zoonoses", "cachorro", "gato", "animais", "vacina cachorro", "dengue"],
    title: "🐾 Zoonoses e Castração Gratuita de Animais",
    reply: `Serviços de proteção animal e zoonoses da Prefeitura:

- **Castração Gratuita:** Programa municipal de esterilização de cães e gatos. Solicitação pelo portal **[tupa.1doc.com.br](https://tupa.1doc.com.br/atendimento)**.
- **Vacinação Antirrábica:** Campanhas anuais gratuitas na cidade e distritos.
- **Vigilância e Dengue:** Equipes de combate a focos de mosquitos e escorpiões.`
  },

  // --- ILUMINAÇÃO PÚBLICA ---
  {
    id: "iluminacao",
    matchers: ["lampada", "poste", "iluminacao", "luz queimada", "troca de lampada", "escuridao", "lampada queimada"],
    title: "💡 Iluminação Pública (Troca de Lâmpadas)",
    reply: `Como solicitar troca de lâmpadas de postes em Tupã:

1. Acesse o portal **[tupa.1doc.com.br](https://tupa.1doc.com.br/atendimento)** ou ligue para a Prefeitura: **(14) 3404-1000**.
2. Forneça o nome da rua, número da casa em frente ao poste e bairro.
3. A equipe de manutenção realiza o conserto no cronograma de rotas dos bairros.`
  },

  // --- DADOS GERAIS, POPULAÇÃO E LOCALIZAÇÃO ---
  {
    id: "dados_gerais",
    matchers: ["populacao", "habitantes", "quantos moradores", "onde fica", "localizacao", "cep", "ddd", "clima", "distancia"],
    title: "📍 Dados Gerais e População de Tupã",
    reply: `Principais dados sobre a cidade:

- **População:** Cerca de 65.000 habitantes.
- **Localização:** Região da Alta Paulista / Centro-Oeste de SP (a 514 km da capital pela SP-294).
- **DDD:** 14 | **CEP Geral:** 17600-000 | **Altitude:** 510 metros.
- **Distritos:** Varpa, Parnaso e Universo.`
  }
];

// Motor de busca inteligente por intenção (evita desconexão)
function findLocalKnowledge(query) {
  if (!query || typeof query !== "string") return null;

  const clean = (str) =>
    str.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .trim();

  const cleanQuery = clean(query);
  const words = cleanQuery.split(/\s+/).filter(w => w.length >= 2);

  let bestMatch = null;
  let maxScore = 0;

  for (const topic of TUPA_TOPICS) {
    let score = 0;

    for (const matcher of topic.matchers) {
      const cleanM = clean(matcher);
      // Se a pergunta contém exatamente o termo chave
      if (cleanQuery.includes(cleanM)) {
        score += 8;
      }
      // Se palavras individuais coincidem
      for (const w of words) {
        if (w === cleanM) {
          score += 4;
        }
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestMatch = topic;
    }
  }

  // Só retorna se tiver confiança real (evita respostas desconexas!)
  return maxScore >= 6 ? bestMatch : null;
}
