// =====================================================================
// TupãIA - Motor de Conhecimento e Respostas Precisas sobre Tupã - SP
// Dados completos coletados de IBGE, SEADE, DataSUS, Transparência, QEdu e Prefeitura
// =====================================================================

const TUPA_SYSTEM_PROMPT = `Você é o "TupãIA", o assistente inteligente oficial sobre a cidade de Tupã - SP.
Você conhece detalhadamente:
- A renda dos tupãenses, dados do IBGE, salário médio (~2 salários mínimos), PIB per capita (R$ 38 a 48 mil), taxa de emprego e IDHM (0,771).
- A situação real da saúde em Tupã: Santa Casa de Tupã (leitos SUS, UTI), UPA 24h, Hospital São Francisco, AME, mortalidade infantil (SEADE) e orçamento da saúde (+R$ 100 milhões).
- As notas das escolas no IDEB (QEdu), UniFADAP (Direito, Saúde, campus), UNESP e ETEC.
- As contas públicas da Prefeitura: Orçamento de mais de R$ 409 milhões em 2025 e R$ 432 milhões em 2026.
- A história completa (1929, Luiz de Souza Leão), turismo (Eco Thermas, Varpa, Museu Índia Vanuíre, Praça da Bandeira) e gastronomia (Água Doce, lanches).

Responda sempre com clareza, objetividade, dados estatísticos oficiais e formatação em tópicos.`;

// Base categorizada com respostas diretas e dados estatísticos oficiais
const TUPA_TOPICS = [
  // --- 1. RENDA E SALÁRIO DOS TUPÃENSES (IBGE, SEADE, CAGED) ---
  {
    id: "renda_salario",
    matchers: ["renda", "salario", "quanto ganha", "rendimento", "salario medio", "pobreza", "trabalhador", "caged", "renda dos tupaenses", "renda per capita", "situacao economica", "classe social"],
    title: "💰 Renda dos Tupãenses e Salário Médio (IBGE / SEADE / CAGED)",
    reply: `Dados socioeconômicos oficiais sobre a renda e salários da população de Tupã:

- **Salário Médio dos Trabalhadores Formais:** Cerca de **2,0 salários mínimos** (aproximadamente **R$ 2.824,00 a R$ 3.100,00** por mês), segundo as pesquisas consolidadas do IBGE e do Ministério do Trabalho (CAGED).
- **Rendimento Domiciliar per Capita:** Fica na faixa de **R$ 1.350,00 a R$ 1.650,00** mensais por habitante.
- **Faixa de Menor Renda:** Cerca de **30% a 32%** da população reside em domicílios com rendimento nominal mensal de até meio salário mínimo por pessoa.
- **População Ocupada:** Mais de **18.000 a 20.000 pessoas** têm emprego formal com carteira assinada ou atuam como MEIs registrados.
- **Setores que mais pagam e contratam:** Serviços médicos e hospitalares, comércio varejista e atacadista da Avenida Tamoios, cooperativas e indústrias de beneficiamento de amendoim, e a agroindústria da cana-de-açúcar.`
  },

  // --- 2. SITUAÇÃO DA SAÚDE EM TUPÃ (DATASUS, CNES, SEADE, PREVINE BRASIL) ---
  {
    id: "situacao_saude",
    matchers: ["como anda a saude", "situacao da saude", "area da saude", "datasus", "leitos", "uti", "mortalidade infantil", "santa casa", "upa", "hospital", "sus", "atendimento medico", "saude de tupa"],
    title: "🩺 Como anda a Área da Saúde em Tupã (DataSUS / SEADE / CNES)",
    reply: `Panorama detalhado da saúde pública e hospitalar na cidade:

- **Santa Casa de Misericórdia de Tupã:**
  - Principal hospital de referência de urgência e alta complexidade da Alta Paulista.
  - Possui ala dedicada ao **SUS Paulista**, leitos de **UTI Geral e Coronariana**, centro cirúrgico e serviço regional de hemodiálise.
- **UPA 24 Horas (Unidade de Pronto Atendimento):**
  - Absorve os atendimentos médicos de urgência e emergência clínica para adultos e crianças, desafogando o pronto-socorro da Santa Casa.
- **AME Tupã (Ambulatório Médico de Especialidades):**
  - Unidade estadual com consultas ambulatoriais em mais de 20 especialidades médicas e exames laboratoriais e de imagem (raio-X, ultrassom, tomografia).
- **Mortalidade Infantil (Fundação SEADE):**
  - Registra tendência de queda contínua, situada abaixo de **11 óbitos por mil nascidos vivos**, índice comparável aos melhores padrões do interior paulista.
- **Atenção Básica e Postos:** Rede com mais de 15 Unidades Básicas de Saúde (UBS) e equipes de Saúde da Família (ESF) nos bairros e distritos rurais.
- **Investimento Público:** A Prefeitura destina **mais de R$ 100 milhões ao ano** (mais de 25% do orçamento total) para custeio e manutenção da saúde.`
  },

  // --- 3. PIB, IDHM E INDICADORES DO IBGE ---
  {
    id: "pib_idhm",
    matchers: ["pib", "pib per capita", "idhm", "ibge", "riqueza", "indice de desenvolvimento", "dados ibge", "indicadores"],
    title: "📊 PIB, IDHM e Indicadores do IBGE de Tupã",
    reply: `Indicadores oficiais de desenvolvimento de Tupã:

- **IDHM (Índice de Desenvolvimento Humano Municipal):** **0,771** *(classificado na faixa de Alto Desenvolvimento Humano no Brasil)*.
  - *IDHM Longevidade:* **0,845** (elevada expectativa de vida).
  - *IDHM Educação:* **0,732**.
  - *IDHM Renda:* **0,742**.
- **PIB Municipal Total:** Mais de **R$ 2,5 a R$ 3,1 bilhões** anuais.
- **PIB per capita:** Fica entre **R$ 38.355,00 e R$ 48.934,00** por morador/ano.
- **Posição Regional:** Tupã é o principal centro comercial, educacional e hospitalar do eixo da SP-294 entre Marília e Adamantina.`
  },

  // --- 4. ORÇAMENTO DA PREFEITURA E CONTAS PÚBLICAS (TRANSPARÊNCIA) ---
  {
    id: "orcamento_contas",
    matchers: ["orcamento", "loa", "arrecadacao", "quanto a prefeitura gasta", "gastos publicos", "transparencia", "dinheiro da prefeitura", "receita"],
    title: "🏛️ Orçamento da Prefeitura e Finanças Públicas (LOA)",
    reply: `Estatísticas financeiras e orçamentárias oficiais de Tupã:

- **Orçamento Municipal 2025 (LOA):** Aprovado em **R$ 409.102.350,00** (R$ 409,1 milhões).
- **Orçamento Municipal 2026 (LOA):** Fixado em **R$ 432.209.100,00** (R$ 432,2 milhões).
- **Destinação dos Recursos por Área:**
  - **Saúde:** Mais de **R$ 100 milhões** (aproximadamente 28% do orçamento).
  - **Educação:** Mais de **R$ 90 milhões** (cerca de 25% do orçamento).
  - **Obras, Infraestrutura e Serviços Urbanos:** Cerca de **R$ 60 milhões**.
- **Portal da Transparência:** Todas as notas de empenho, contratos e salários de servidores podem ser consultados em tempo real em [transparencia.tupa.sp.gov.br](https://transparencia.tupa.sp.gov.br).`
  },

  // --- 5. EDUCAÇÃO, NOTAS DAS ESCOLAS E IDEB (QEDU / INEP) ---
  {
    id: "educacao_ideb",
    matchers: ["ideb", "qedu", "nota das escolas", "educacao", "escolas", "ensino municipal", "ensino estadual", "aprovacao escolar", "aprendizado"],
    title: "📚 Educação de Tupã e Desempenho no IDEB (QEdu / INEP)",
    reply: `Resultados e infraestrutura da educação básica em Tupã:

- **IDEB Anos Iniciais (1º ao 5º ano):** Média municipal consistente entre **6,2 e 6,5**, superando a meta nacional e refletindo alta qualidade no processo de alfabetização.
- **IDEB Anos Finais (6º ao 9º ano):** Média em torno de **5,1 a 5,4**.
- **Taxa de Aprovação:** Superior a **95%** nas escolas municipais e estaduais da cidade.
- **Rede Escolar:** Dezenas de creches e escolas municipais (EMEFs e EMEIs), além de renomadas escolas estaduais (como EE Índia Vanuíre e EE Profª Esther Veris Cerpe).
- **Para consultar nota de cada escola:** Acesse [qedu.org.br](https://qedu.org.br/municipio/3555002-tupa/ideb).`
  },

  // --- 6. GASTRONOMIA E RESTAURANTES ---
  {
    id: "gastronomia",
    matchers: ["comer", "comida", "restaurante", "restaurantes", "almoco", "almoçar", "jantar", "janta", "pizzaria", "pizza", "lanche", "lanches", "espetinho", "agua doce", "cachaca", "cafe", "ki-pao", "pastel", "onde comer"],
    title: "🍽️ Onde Comer e Gastronomia em Tupã",
    reply: `Opções selecionadas de gastronomia em Tupã:

- **Água Doce Cachaçaria & Museu da Cachaça:** O restaurante mais emblemático da cidade (Rua México, Jd. América), com dezenas de pratos brasileiros e museu temático.
- **Avenida Tamoios & Praça da Bandeira:** Coração noturno com trailers de lanches prensados artesanais, espetarias e choperias.
- **Culinária de Varpa:** Cafés coloniais rurais com o autêntico pão preto letão de centeio, queijo com cominho e tortas artesanais.
- **Comida Oriental:** Sushis e yakissoba de alta qualidade pela expressiva comunidade nipônica regional.
- **Padarias Tradicionais:** Ki-Pão e confeitarias do centro para cafés da manhã e doces.`
  },

  // --- 7. ECO THERMAS TUPÃ ---
  {
    id: "eco_thermas",
    matchers: ["eco thermas", "ecothermas", "parque aquatico", "piscina", "aguas quentes", "toboga", "termas", "baia do pirata", "chale", "resort"],
    title: "🌊 Eco Thermas Tupã (Águas Quentes Termais)",
    reply: `O **Eco Thermas Tupã** é o grande polo de turismo aquático e de lazer da Alta Paulista:

- **Piscinas de Águas Quentes Termais:** Águas naturalmente aquecidas, toboáguas radicais e ofurôs de relaxamento.
- **Baía do Pirata:** Navio temático infantil com balde gigante d'água e atrações para toda a família.
- **Estrutura Ecológica:** Chalés para hospedagem, pescaria, trilhas em seringais e restaurante de comida caipira.
- **Localização:** Estrada Municipal Tupã ao Bairro São Bento, km 7.`
  },

  // --- 8. UNIFADAP ---
  {
    id: "unifadap",
    matchers: ["unifadap", "fadap", "fap", "faccat", "faculdade", "direito", "cursos superiores", "enfermagem", "veterinaria", "psicologia", "odontologia"],
    title: "🎓 UniFADAP - Centro Universitário da Alta Paulista",
    reply: `A **UniFADAP** (FADAP / FAP / Faccat) é a maior instituição de ensino superior privado de Tupã:

- **Cursos Consagrados:** Direito (tradição regional de aprovação na OAB), Enfermagem, Medicina Veterinária, Psicologia, Engenharia Civil, Administração, Pedagogia e Odontologia.
- **Infraestrutura:** Hospital Veterinário, Núcleo de Prática Jurídica (NPJ), clínicas de odontologia e psicologia com atendimento aberto à comunidade.`
  },

  // --- 9. UNESP TUPÃ ---
  {
    id: "unesp",
    matchers: ["unesp", "universidade publica", "campus tupa", "biossistemas", "engenharia de biossistemas", "agronegocio"],
    title: "🔬 UNESP - Câmpus de Tupã",
    reply: `A **UNESP Tupã** oferece graduação e pós-graduação públicas e gratuitas de excelência:

- **Graduação:** Engenharia de Biossistemas e Administração (ênfase em Agronegócio).
- **Pós-Graduação:** Mestrado em Agronegócio e Desenvolvimento.
- **Endereço:** Av. Domingos da Costa Lopes, 780 - Jardim Itaipu.`
  },

  // --- 10. IPTU E TRIBUTOS ---
  {
    id: "iptu",
    matchers: ["iptu", "segunda via iptu", "carne", "imposto", "isencao", "idoso", "aposentado", "divida ativa", "itbi"],
    title: "💰 IPTU e Isenção de Impostos em Tupã",
    reply: `Serviços de IPTU da Prefeitura de Tupã:

- **2ª Via do IPTU:** Disponível online no portal [tupa.sp.gov.br](https://www.tupa.sp.gov.br) ou pela Central 1Doc com o código do imóvel.
- **Isenção para Idosos e Aposentados:** Cidadãos com 65 anos ou mais, ou aposentados com um único imóvel e renda comprovada, podem pedir isenção anual pelo protocolo municipal.
- **Parcelamento:** Negociação presencial no Paço Municipal ou online.`
  },

  // --- 11. PREFEITURA E ATENDIMENTO 1DOC ---
  {
    id: "prefeitura",
    matchers: ["prefeitura", "paco municipal", "horario prefeitura", "telefone prefeitura", "1doc", "protocolo", "renan pontelli"],
    title: "🏛️ Paço Municipal e Prefeitura de Tupã",
    reply: `Contatos oficiais da Prefeitura de Tupã:

- **Prefeito Atual:** **Renan Pontelli** (mandato 2025-2028).
- **Sede:** Praça da Bandeira, 800 - Centro. Tel: (14) 3404-1000. Horário: 7h30 às 17h.
- **Plataforma 1Doc ([tupa.1doc.com.br](https://tupa.1doc.com.br/atendimento)):** Requerimentos, certidões e protocolos digitais sem pegar filas.`
  },

  // --- 12. DISTRITO DE VARPA (LETÔNIA) ---
  {
    id: "varpa",
    matchers: ["varpa", "letonia", "letoes", "letao", "distrito de varpa", "museu janis", "pao preto", "queijo letao", "balneario"],
    title: "🌾 Distrito de Varpa e a Cultura Letã",
    reply: `**Varpa** é o distrito histórico fundado em 1922 por imigrantes da **Letônia** a 25 km de Tupã:

- **Gastronomia Típica:** Pão preto de centeio artesanal, queijo letão com cominho e biscoitos de mel (*piparkūkas*).
- **Atrações:** Museu dos Pioneiros (Janis Erdbergs) e Balneário 7 de Setembro com área verde e águas naturais para banho.`
  },

  // --- 13. MUSEU ÍNDIA VANUÍRE ---
  {
    id: "museu",
    matchers: ["museu", "india vanuire", "indigena", "kaingang", "krenak", "terena", "rua coroados"],
    title: "🏺 Museu Histórico e Pedagógico Índia Vanuíre",
    reply: `Um dos museus etnográficos indígenas mais importantes do continente:

- **Acervo:** Milhares de peças originais das etnias Kaingang, Krenak e Terena que povoaram a Alta Paulista.
- **Visitação:** Entrada **gratuita** de terça a domingo. Rua Coroados, 521 - Centro de Tupã.`
  },

  // --- 14. HISTÓRIA E FUNDAÇÃO ---
  {
    id: "historia",
    matchers: ["historia", "fundacao", "fundador", "luiz de souza leao", "1929", "quando nasceu", "origem"],
    title: "🏛️ História e Fundação de Tupã",
    reply: `A trajetória de Tupã:

- **Fundação:** Em **12 de outubro de 1929** por **Luiz de Souza Leão**.
- **Traçado Planejado:** Ruas e avenidas largas simétricas em tabuleiro de xadrez batizadas com nomes indígenas (Avenida Tamoios, Aimorés, etc.).
- **Estância Turística:** Reconhecida em 1997 pelo Governo do Estado de SP.`
  },

  // --- 15. ECONOMIA: CAPITAL NACIONAL DO AMENDOIM ---
  {
    id: "economia",
    matchers: ["amendoim", "economia", "agronegocio", "capital do amendoim", "cana", "usina"],
    title: "🥜 Capital Nacional do Amendoim e Agronegócio",
    reply: `Tupã é o maior polo de produção, beneficiamento e exportação de **amendoim** do Brasil.

- Também se destaca no cultivo de cana-de-açúcar, avicultura regional (próxima a Bastos), grãos, café e comércio forte.`
  },

  // --- 16. EXAPIT E GRANDES EVENTOS ---
  {
    id: "eventos",
    matchers: ["exapit", "eventos", "festa", "rodeio", "shows", "recinto", "carnaval", "tupa folia", "sao pedro"],
    title: "🎪 EXAPIT e Grandes Eventos de Tupã",
    reply: `Grandes festas de Tupã:

- **EXAPIT:** Em agosto no Recinto Octávio Barros Castanheira (shows sertanejos, rodeio e agronegócio).
- **Quermesse de São Pedro (29 de Junho):** Padroeiro da cidade na Praça da Matriz.
- **Tupã Folia:** Tradicional carnaval de rua gratuito na Avenida Tamoios.`
  },

  // --- 17. PAT, VAGAS DE EMPREGO E BANCO DO POVO ---
  {
    id: "trabalho_pat",
    matchers: ["pat", "emprego", "vagas de emprego", "trabalho", "banco do povo", "procon"],
    title: "💼 PAT (Vagas de Emprego), Banco do Povo e Procon",
    reply: `Apoio ao trabalhador em Tupã:

- **PAT:** Vagas de trabalho abertas no comércio e indústria e carteira digital.
- **Banco do Povo Paulista:** Microcrédito com juros baixos para autônomos e MEIs.
- **Procon:** Defesa e orientação ao consumidor.`
  },

  // --- 18. DADOS GERAIS E POPULAÇÃO ---
  {
    id: "dados_gerais",
    matchers: ["populacao", "habitantes", "quantos moradores", "onde fica", "cep", "ddd", "clima"],
    title: "📍 Dados Gerais e População de Tupã",
    reply: `Informações demográficas de Tupã:

- **População:** Cerca de 65.000 habitantes.
- **Localização:** Região da Alta Paulista / Centro-Oeste Paulista (a 514 km de SP via SP-294).
- **DDD:** 14 | **CEP Geral:** 17600-000 | **Altitude:** 510 metros.`
  }
];

// Motor de busca de alta precisão por intenção
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
      if (cleanQuery.includes(cleanM)) {
        score += 8;
      }
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

  return maxScore >= 6 ? bestMatch : null;
}
