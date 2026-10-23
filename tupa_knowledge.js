// Base de Conhecimento e Prompt Especialista sobre Tupã - SP
// Desenvolvido para o projeto TupãIA

const TUPA_SYSTEM_PROMPT = `Você é o "TupãIA", uma inteligência artificial especialista na cidade de Tupã, município do interior do estado de São Paulo (região da Alta Paulista / Centro-Oeste Paulista).
Seu objetivo é ser a maior referência e assistente sobre tudo relacionado a Tupã: história, turismo, cultura, instituições de ensino (como UniFADAP e UNESP), economia, distritos, serviços e personalidades locais.

Diretrizes de resposta:
- Responda em português com tom acolhedor, conhecedor, simpático e orgulhoso da cultura tupãense e paulista.
- Seja preciso com datas históricas, nomes de pontos turísticos, instituições e tradições locais.
- Formate suas respostas com markdown limpo (tópicos, negrito e seções) para facilitar a leitura.
- Se perguntado sobre assuntos fora de Tupã, responda com gentileza, mas sempre que possível faça um paralelo interessante ou mencione a conexão com a cidade.`;

const TUPA_LOCAL_DATABASE = [
  {
    category: "História",
    keywords: ["fundacao", "fundador", "historia", "luiz de souza leao", "1929", "origem", "quando foi fundada", "aniversario", "outubro"],
    title: "🏛️ Fundação e História de Tupã",
    content: `**Tupã** foi fundada em **12 de outubro de 1929** pelo desbravador **Luiz de Souza Leão**.
    
- **Planejamento Moderno:** Foi uma das pioneiras na região planejadas em malha ortogonal (formato de tabuleiro de xadrez), com ruas e avenidas largas.
- **Origem do Nome:** Homenageia o Deus do Trovão na mitologia Tupi-Guarani, além de honrar os povos indígenas originários (Kaingang, Krenak e Terena) que povoavam a Alta Paulista.
- **Emancipação e Turismo:** Conquistou autonomia política em 1938 e foi titulada **Estância Turística** em **1997** pelo governo estadual.
- **Padroeiro:** São Pedro (comemorado com grandiosa quermesse e festa em 29 de junho).`
  },
  {
    category: "Dados Gerais e População",
    keywords: ["populacao", "habitantes", "quantos moradores", "onde fica", "localizacao", "cep", "ddd", "clima", "regiao"],
    title: "📍 Dados Gerais e Geografia de Tupã",
    content: `Principais informações geográficas e demográficas de Tupã - SP:

- **Localização:** Região Centro-Oeste / Alta Paulista do Estado de São Paulo (a cerca de 430 km da capital paulista).
- **População:** Aproximadamente **64.000 a 66.000 habitantes** (censo IBGE).
- **DDD:** 14 | **CEP Geral:** 17600-000.
- **Distritos:** Varpa, Universo e Parnaso.
- **Cidades Vizinhas:** Bastos, Marília, Rinópolis, Herculândia, Quintana, Quatá, Iacri e Arco-Íris.
- **Clima:** Tropical de altitude, com verões quentes/chuvosos e invernos amenos e secos.`
  },
  {
    category: "Educação Superior",
    keywords: ["unifadap", "fadap", "fap", "faccat", "faculdade", "universidade", "cursos superiores", "estudos", "graduacao"],
    title: "🎓 UniFADAP - Centro Universitário da Alta Paulista",
    content: `A **UniFADAP** (FADAP / FAP / Faccat) é a mais tradicional e influente instituição de ensino superior de Tupã e da Alta Paulista!

- **Relevância:** Há décadas forma advogados, médicos veterinários, enfermeiros, engenheiros, gestores, psicólogos e educadores renomados em todo o país.
- **Cursos Tradicionais:** Direito (um dos mais conceituados do interior), Enfermagem, Psicologia, Engenharia Civil, Administração, Pedagogia, Educação Física, Ciências Contábeis e Odontologia.
- **Estrutura:** Campus amplo, biblioteca completa, clínicas-escola, laboratórios especializados e corpo docente com mestres e doutores.`
  },
  {
    category: "Universidade Pública",
    keywords: ["unesp", "universidade estadual", "engenharia de biossistemas", "campus tupa", "publica"],
    title: "🔬 UNESP - Câmpus de Tupã",
    content: `A **UNESP (Universidade Estadual Paulista)** possui câmpus avançado em Tupã com ensino público, gratuito e de ponta:

- **Cursos de Graduação:** Administração (com ênfase e tradição em Agronegócio) e Engenharia de Biossistemas.
- **Pesquisa e Pós-Graduação:** Mestrado e programas de inovação tecnológica no campo agroindustrial e sustentabilidade.
- **Localização:** Avenida Domingos da Costa Lopes, 780 - Jardim Itaipu.`
  },
  {
    category: "Museus e Indígenas",
    keywords: ["museu", "india vanuire", "indigena", "kaingang", "krenak", "terena", "cultura", "exposicao", "rua coroados"],
    title: "🏺 Museu Histórico e Pedagógico Índia Vanuíre",
    content: `O **Museu Índia Vanuíre** é um dos mais importantes museus etnográficos da América Latina:

- **Acervo Inestimável:** Dedicado à preservação da memória, artefatos, armas, plumárias e histórias das etnias Kaingang, Krenak e Terena.
- **Homenagem:** Leva o nome de Vanuíre, lendária líder indígena Kaingang que mediou a convivência pacífica na Alta Paulista.
- **Gestão:** Administrado pela ACAM Portinari / Governo do Estado de SP. Entrada gratuita!
- **Endereço:** Rua Coroados, 521 - Centro.`
  },
  {
    category: "Turismo Rural e Letônia",
    keywords: ["varpa", "letoes", "letonia", "letao", "museu janis", "balneario", "artesanato letao", "pao preto", "queijo letao"],
    title: "🌾 Distrito de Varpa e a Cultura Letã",
    content: `**Varpa** é um pedacinho da Europa no interior paulista, fundada em 1922 por imigrantes da **Letônia**:

- **Gastronomia Típica:** Famosa pelo autêntico pão preto de centeio, queijo letão com cominho, bolos de mel, tortas e biscoitos caseiros.
- **Museu Janis Erdbergs:** Guarda ferramentas rústicas, roupas, documentos e objetos dos pioneiros letões.
- **Balneário 7 de Setembro:** Ponto de ecoturismo com área verde, riacho para banho e área de piquenique.
- **Igreja Batista de Varpa:** Construção histórica que preserva a fé dos colonos originais.`
  },
  {
    category: "Turismo e Lazer",
    keywords: ["o que fazer", "pontos turisticos", "praca da bandeira", "igreja matriz", "solar luiz de souza", "bosque", "passeio"],
    title: "🌳 O que fazer em Tupã - Pontos Turísticos",
    content: `Roteiro turístico essencial em Tupã:

1. **Praça da Bandeira:** O ponto de encontro de Tupã, com espelho d'água, fontes luminosas e quiosques.
2. **Igreja Matriz de São Pedro:** Monumental templo no centro histórico, ao lado da praça.
3. **Solar Luiz de Souza Leão & Bosque:** Mansão histórica do fundador e reserva florestal urbana tombada.
4. **Museu Índia Vanuíre:** Parada cultural obrigatória sobre a herança indígena.
5. **Passeio em Varpa:** Turismo rural, balneário e gastronomia letã.
6. **Avenida dos Universitários:** Pista de cooper, ciclismo e vida noturna jovem.`
  },
  {
    category: "Economia e Produção",
    keywords: ["economia", "amendoim", "agricultura", "agronegocio", "industria", "comercio", "capital do amendoim"],
    title: "🥜 Capital do Amendoim e Agronegócio",
    content: `Tupã tem uma economia pujante e diversificada:

- **Capital do Amendoim:** É o principal centro de cultivo, beneficiamento e exportação de amendoim do Brasil, abastecendo indústrias de confeitos e mercados globais.
- **Agronegócio:** Destaque para a cana-de-açúcar, avicultura, pecuária bovina, grãos (soja e milho) e café.
- **Comércio e Serviços:** Cidade-polo que atrai consumidores e pacientes médicos de dezenas de cidades menores da Alta Paulista.`
  },
  {
    category: "Eventos",
    keywords: ["eventos", "exapit", "festa", "quermesse", "show", "sao pedro", "festa das nacoes", "exposicao agropecuaria"],
    title: "🎉 Principais Eventos e Festas de Tupã",
    content: `As festas mais aguardadas do calendário tupãense:

- **EXAPIT (Exposição Agropecuária e Industrial de Tupã):** A maior festa da cidade, realizada no Recinto de Exposições com shows nacionais, rodeio e exposições.
- **Festa do Padroeiro São Pedro (Junho):** Tradicional quermesse junina na Praça da Matriz com barracas gastronômicas e confraternização.
- **Semana Índia Vanuíre:** Atividades pedagógicas e artísticas valorizando a presença indígena.
- **Festividades em Varpa:** Comemorações tradicionais da colônia letã (Līgo e festas da colheita).`
  },
  {
    category: "Saúde e Emergências",
    keywords: ["hospital", "santa casa", "upa", "saude", "medico", "pronto socorro", "farmacia", "emergencia", "telefones"],
    title: "🏥 Saúde e Serviços de Emergência em Tupã",
    content: `Principais referências de saúde e atendimento em Tupã:

- **Santa Casa de Misericórdia de Tupã:** Hospital regional de referência para cirurgias e atendimentos de alta complexidade.
- **Hospital São Francisco:** Atendimento hospitalar privado e conveniado.
- **UPA 24 Horas:** Atendimento a urgências e emergências clínicas.
- **Telefones Úteis de Emergência:**
  - SAMU: 192
  - Corpo de Bombeiros: 193
  - Polícia Militar: 190
  - Guarda Municipal / Trânsito: (14) 3496-3380`
  },
  {
    category: "Administração e Prefeitura",
    keywords: ["prefeitura", "prefeito", "camara", "palacio das nacoes", "governo", "secretarias"],
    title: "🏛️ Prefeitura e Gestão Municipal",
    content: `A sede do Poder Executivo de Tupã é o **Palácio das Nações**:

- **Endereço da Prefeitura:** Praça da Bandeira, 800 - Centro.
- **Telefone Geral:** (14) 3404-1000.
- **Portal Oficial:** [tupa.sp.gov.br](https://www.tupa.sp.gov.br)
- **Câmara Municipal de Tupã:** Localizada na Praça da Bandeira, 222.`
  }
];

// Busca aprimorada na base de conhecimento local
function findLocalKnowledge(query) {
  const clean = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ");
  
  const normalizedQuery = clean(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length >= 3);

  let bestMatch = null;
  let maxScore = 0;

  for (const entry of TUPA_LOCAL_DATABASE) {
    let score = 0;

    // Pontuação por palavras-chave diretas
    for (const kw of entry.keywords) {
      const cleanKw = clean(kw);
      if (normalizedQuery.includes(cleanKw)) {
        score += 5;
      }
    }

    // Pontuação por palavras nos textos
    const fullText = clean(entry.title + " " + entry.category + " " + entry.content);
    for (const word of queryWords) {
      if (fullText.includes(word)) {
        score += 2;
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestMatch = entry;
    }
  }

  return maxScore >= 3 ? bestMatch : null;
}
