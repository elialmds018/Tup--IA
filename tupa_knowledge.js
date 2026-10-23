// =====================================================================
// TupãIA - Cérebro Conversacional e Base Inteligente de Tupã - SP
// Responde como uma IA humana de verdade: saudações, perguntas cotidianas e dados oficiais
// =====================================================================

const TUPA_SYSTEM_PROMPT = `Você é o "TupãIA", um assistente de IA conversacional, inteligente, carismático e especialista absoluto na Estância Turística de Tupã - SP.
Você conversa naturalmente como uma pessoa conhecedora da cidade:
- Seja simpático, acolhedor e direto.
- Responda com naturalidade a cumprimentos ("olá", "tudo bem", "bom dia").
- Ao falar de dados (renda, saúde, PIB, história), cite números reais de forma fluida e fácil de ler.
- Conheça profundamente: UniFADAP, UNESP, Eco Thermas, Varpa, Museu Índia Vanuíre, Santa Casa, Prefeitura (Renan Pontelli), Avenida Tamoios, Água Doce, amendoim e história de Luiz de Souza Leão.`;

// Mecanismo Conversacional de Linguagem Natural
function getConversationalResponse(query) {
  if (!query || typeof query !== "string") return null;

  const clean = (str) =>
    str.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .trim();

  const q = clean(query);
  const words = q.split(/\s+/).filter(w => w.length > 0);

  // 1. SAUDAÇÕES E CONVERSA SOCIAL
  if (
    q === "oi" || q === "ola" || q === "olaa" || q === "oie" ||
    q.includes("tudo bem") || q.includes("como vai") || q.includes("bom dia") ||
    q.includes("boa tarde") || q.includes("boa noite") || q.includes("e ai") ||
    q.includes("fala ai") || q === "opa"
  ) {
    return {
      title: "👋 Olá! Seja muito bem-vindo!",
      reply: `Tudo ótimo por aqui no interior paulista! 😊\n\nEu sou o **TupãIA**, seu assistente especialista em tudo sobre **Tupã - SP**.\n\nVocê pode me perguntar sobre a cidade com naturalidade, por exemplo:\n- *"Como anda a saúde e os hospitais aqui?"*\n- *"Qual é a renda média dos tupãenses?"*\n- *"O que tem de bom para comer ou passear no fim de semana?"*\n- *"Fale sobre a UniFADAP ou o Eco Thermas"*\n\nComo posso te ajudar hoje?`
    };
  }

  // 2. AGRADECIMENTOS E DESPEDIDAS
  if (q.includes("obrigado") || q.includes("obrigada") || q.includes("valeu") || q.includes("agradeco") || q === "tchau" || q.includes("ate mais")) {
    return {
      title: "🤝 De nada!",
      reply: `Por nada! Fico sempre à disposição para ajudar com qualquer informação sobre a nossa querida Estância Turística de Tupã. Se precisar de mais alguma coisa, é só chamar! ⚡`
    };
  }

  // 3. QUEM É VOCÊ / IDENTIDADE
  if (q.includes("quem e voce") || q.includes("o que voce faz") || q.includes("quem te criou") || q.includes("seu nome")) {
    return {
      title: "⚡ Quem é o TupãIA?",
      reply: `Eu sou o **TupãIA**, uma inteligência artificial desenvolvida especialmente para reunir e compartilhar todo o conhecimento sobre a cidade de **Tupã (São Paulo)**.\n\nMinha base foi abastecida com dados do **IBGE, SEADE, DataSUS, Ministério da Educação (QEdu), Prefeitura Municipal (tupa.sp.gov.br)** e registros históricos locais.\n\nPosso te informar sobre economia, saúde, escolas, faculdades, pontos turísticos, história e serviços públicos!`
    };
  }

  // 4. O QUE FAZER / FIM DE SEMANA / TURISMO COTIDIANO
  if (q.includes("fim de semana") || q.includes("o que fazer") || q.includes("onde passear") || q.includes("o que tem de bom") || q.includes("lugares para ir") || q.includes("passeio")) {
    return {
      title: "🌳 O que fazer no fim de semana em Tupã",
      reply: `Tupã é uma Estância Turística com ótimos passeios para o fim de semana:\n\n1. **Dia de Lazer e Relaxamento:** Passar o dia nas piscinas de águas quentes termais do **Eco Thermas Tupã** (Estrada para São Bento).\n2. **Roteiro Cultural:** Visitar o **Museu Histórico e Pedagógico Índia Vanuíre** no centro (entrada gratuita, um dos maiores acervos indígenas da América Latina) e o **Solar Luiz de Souza Leão** com seu bosque centenário.\n3. **Turismo Rural em Varpa (a 25 km):** Conhecer a história da imigração letã, visitar o Museu Janis Erdbergs, tomar banho no **Balneário 7 de Setembro** e saborear o famoso pão preto e queijo letão.\n4. **Noite e Gastronomia:** Dar uma volta na **Praça da Bandeira**, comer os tradicionais lanches prensados da **Avenida Tamoios** ou jantar na famosa **Água Doce Cachaçaria** (Jd. América).`
    };
  }

  // 5. CINEMA, SHOPPING E LAZER URBANO
  if (q.includes("cinema") || q.includes("filme") || q.includes("shopping") || q.includes("lojas") || q.includes("compras")) {
    return {
      title: "🎬 Cinema e Comércio em Tupã",
      reply: `- **Cinema:** Tupã conta com o tradicional **Cine Espaço Tupã** (na Rua Cherentes, centro), que exibe os principais lançamentos do cinema nacional e internacional, além de exibições e mostras culturais periódicas no Museu Índia Vanuíre e Espaço Cultural.\n- **Shopping e Compras:** Tupã não possui um shopping center vertical fechado tradicional. O verdadeiro "shopping a céu aberto" da cidade é a **Avenida Tamoios** e suas ruas transversais, onde se concentram grandes redes varejistas, lojas de roupas, calçados, eletrodomésticos, bancos e cafés.`
    };
  }

  // 6. É BOM MORAR EM TUPÃ? SEGURANÇA E QUALIDADE DE VIDA
  if (q.includes("bom morar") || q.includes("qualidade de vida") || q.includes("seguranca") || q.includes("violencia") || q.includes("como e morar")) {
    return {
      title: "🏡 Como é morar em Tupã? (Qualidade de Vida e Segurança)",
      reply: `Morar em Tupã tem as vantagens clássicas de uma excelente cidade do interior paulista:\n\n- **Segurança e Tranquilidade:** Índices de criminalidade consideravelmente inferiores às regiões metropolitanas, permitindo caminhadas noturnas na Praça da Bandeira ou na Avenida dos Universitários.\n- **Polo Universitário e Jovem:** Por abrigar a **UniFADAP** e a **UNESP**, a cidade tem uma vida universitária ativa, atraindo estudantes e gerando movimentação econômica.\n- **Custo de Vida:** Mais acessível do que capitais e grandes centros, com facilidade de locomoção (pouco trânsito) e bons serviços de saúde e educação.\n- **Melhores Bairros para Morar:** Jardim América, Parque Universitário (ótimo para estudantes), Vila Marajoara, Jardim Itaipu e a região central.`
    };
  }

  // 7. RENDA E SALÁRIOS (IBGE / CAGED)
  if (q.includes("renda") || q.includes("salario") || q.includes("quanto ganha") || q.includes("trabalhador") || q.includes("dinheiro") || q.includes("pobreza")) {
    return {
      title: "💰 Como é a Renda dos Tupãenses (Dados Oficiais IBGE e CAGED)",
      reply: `De acordo com as estatísticas do IBGE e do Ministério do Trabalho:\n\n- **Salário Médio Formal:** A média salarial de quem trabalha com carteira assinada em Tupã é de **2,0 salários mínimos** (em torno de **R$ 2.824,00 a R$ 3.100,00** mensais).\n- **Renda Domiciliar per Capita:** A média por morador fica entre **R$ 1.350,00 e R$ 1.650,00** ao mês.\n- **Trabalho Formal:** Mais de **18.000 pessoas** têm emprego com carteira assinada ou são microempreendedores (MEIs) formais.\n- **Onde se ganha mais:** As melhores faixas salariais na cidade estão nos setores hospitalar/médico, no corpo docente universitário (UniFADAP/UNESP), nas indústrias de amendoim e cana-de-açúcar e no setor bancário.`
    };
  }

  // 8. COMO ANDA A SAÚDE EM TUPÃ (HOSPITAIS, UPA, SANTA CASA)
  if (q.includes("saude") || q.includes("hospital") || q.includes("santa casa") || q.includes("upa") || q.includes("medico") || q.includes("leitos") || q.includes("sus")) {
    return {
      title: "🩺 Como anda a Área da Saúde em Tupã (DataSUS / SEADE)",
      reply: `A área da saúde em Tupã funciona como centro de referência para várias cidades vizinhas da Alta Paulista:\n\n- **Santa Casa de Tupã:** É o hospital filantrópico central, com atendimento de urgência, centro cirúrgico e leitos de **UTI Geral e Coronariana** credenciados ao programa *SUS Paulista*.\n- **UPA 24 Horas:** Atende urgências e emergências clínicas do dia a dia adulto e infantil, desafogando o hospital.\n- **AME Tupã (Ambulatório de Especialidades):** Oferece consultas especializadas e exames avançados (tomografia, ultrassom, endoscopia) pelo SUS.\n- **Mortalidade Infantil (Fundação SEADE):** Está controlada abaixo de **11 por mil nascidos vivos**, índice positivo reflexo do acompanhamento pré-natal nos postos (UBS/ESF).\n- **Investimento:** A Prefeitura investe **mais de R$ 100 milhões anuais** na rede municipal de saúde.`
    };
  }

  // 9. ONDE COMER E GASTRONOMIA
  if (q.includes("comer") || q.includes("comida") || q.includes("restaurante") || q.includes("lanche") || q.includes("pizza") || q.includes("almoco") || q.includes("jantar") || q.includes("bar")) {
    return {
      title: "🍽️ Onde Comer em Tupã (Gastronomia Local)",
      reply: `A culinária tupãense agrada a todos os paladares:\n\n- **Água Doce Cachaçaria & Museu da Cachaça:** O restaurante mais clássico da cidade (Rua México, Jd. América), com dezenas de pratos brasileiros (escondidinho, carnes) e centenas de rótulos raros de cachaça.\n- **Lanches Prensados e Espetinhos:** Uma verdadeira tradição tupãense! Os trailers e lanchonetes na **Avenida Tamoios** e no entorno da **Praça da Bandeira** servem lanches enormes e saborosos.\n- **Culinária Letã (Varpa):** Não deixe de provar o autêntico pão preto de centeio e o queijo com sementes de cominho nas confeitarias coloniais de Varpa.\n- **Comida Japonesa:** Fortemente representada com sushis frescos e pratos orientais de qualidade.\n- **Cafés e Padarias:** A tradicional **Ki-Pão** e confeitarias do centro são perfeitas para o café da manhã.`
    };
  }

  // 10. ECO THERMAS TUPÃ
  if (q.includes("eco thermas") || q.includes("ecothermas") || q.includes("parque aquatico") || q.includes("aguas quentes") || q.includes("termas") || q.includes("piscina")) {
    return {
      title: "🌊 Eco Thermas Tupã (Parque Aquático Termal)",
      reply: `O **Eco Thermas Tupã** é a grande atração turística aquática da região:\n\n- **Piscinas de Águas Quentes:** Águas termais aquecidas naturalmente, toboáguas para adultos e crianças e ofurôs relaxantes.\n- **Baía do Pirata:** Playground infantil temático com navio e balde gigante d'água.\n- **Ambiente Natural:** Fica na zona rural (Estrada Tupã ao Bairro São Bento, km 7), cercado por seringais, com minifazenda, chalés para hospedagem e restaurante com comida caseira.`
    };
  }

  // 11. UNIFADAP E UNESP (ENSINO SUPERIOR)
  if (q.includes("unifadap") || q.includes("fadap") || q.includes("fap") || q.includes("faccat") || q.includes("unesp") || q.includes("faculdade") || q.includes("universidade") || q.includes("direito")) {
    return {
      title: "🎓 Universidades e Ensino Superior em Tupã",
      reply: `Tupã é um polo educacional universitário tradicional:\n\n- **UniFADAP (FADAP / FAP / Faccat):** O maior centro universitário privado da Alta Paulista. Destaque nacional para o curso de **Direito** (tradição em aprovações na OAB e concursos), além de Medicina Veterinária, Enfermagem, Psicologia, Engenharia Civil, Pedagogia e Odontologia.\n- **UNESP Tupã:** Câmpus público e gratuito da Universidade Estadual Paulista, com graduações em **Engenharia de Biossistemas** e **Administração em Agronegócio**, além de mestrado reconhecido internacionalmente.\n- **ETEC e FATEC:** Ensino técnico e tecnológico público de alta empregabilidade.`
    };
  }

  // 12. IPTU E PREFEITURA (1DOC)
  if (q.includes("iptu") || q.includes("prefeitura") || q.includes("1doc") || q.includes("isencao") || q.includes("prefeito") || q.includes("renan pontelli")) {
    return {
      title: "🏛️ Prefeitura de Tupã e IPTU",
      reply: `- **Prefeito Atual:** **Renan Pontelli** (gestão 2025-2028), com a vice-prefeita Joice Berni.\n- **Paço Municipal:** Praça da Bandeira, 800 - Centro. Telefone: (14) 3404-1000. Horário: 7h30 às 17h.\n- **2ª Via do IPTU e Protocolos:** Pelo portal digital **[tupa.1doc.com.br](https://tupa.1doc.com.br/atendimento)** você emite guias e acompanha processos sem pegar fila.\n- **Isenção de IPTU:** Idosos (65 anos ou mais) e aposentados com um único imóvel e renda comprovada podem solicitar isenção anual pelo protocolo da prefeitura.`
    };
  }

  // 13. VARPA E CULTURA DA LETÔNIA
  if (q.includes("varpa") || q.includes("letonia") || q.includes("letao") || q.includes("letoes") || q.includes("pao preto") || q.includes("queijo letao")) {
    return {
      title: "🌾 Distrito de Varpa e a Imigração da Letônia",
      reply: `**Varpa** fica a 25 km do centro de Tupã e é um pedaço autêntico da Europa no interior paulista:\n\n- Fundada em 1922 por imigrantes da Letônia que fugiam do pós-Primeira Guerra.\n- **O que experimentar:** O famoso pão preto de centeio com fermentação natural, o queijo com sementes de cominho e biscoitos de mel (*piparkūkas*).\n- **O que visitar:** O Museu dos Pioneiros (Janis Erdbergs) e o **Balneário 7 de Setembro**, com riacho natural para banho e quiosques.`
    };
  }

  // 14. HISTÓRIA E FUNDADOR
  if (q.includes("historia") || q.includes("fundador") || q.includes("fundacao") || q.includes("luiz de souza leao") || q.includes("1929") || q.includes("indigena") || q.includes("ruas")) {
    return {
      title: "🏛️ Fundação e História de Tupã",
      reply: `- **Fundada em:** **12 de outubro de 1929** por **Luiz de Souza Leão**.\n- **Cidade Planejada:** Planejada com ruas largas e simétricas em malha ortogonal (formato de tabuleiro de xadrez) antes da chegada da ferrovia.\n- **Ruas com Nomes Indígenas:** Souza Leão batizou as vias centrais em homenagem aos povos originários do Brasil (Avenida Tamoios, Aimorés, Cherentes, Mandaguaris, etc.).\n- **Nome:** Homenageia o Deus do Trovão na mitologia Tupi-Guarani.`
    };
  }

  // 15. DADOS GERAIS, POPULAÇÃO E LOCALIZAÇÃO
  if (q.includes("populacao") || q.includes("habitantes") || q.includes("onde fica") || q.includes("distancia") || q.includes("clima")) {
    return {
      title: "📍 Geografia e População de Tupã",
      reply: `- **População:** Cerca de **65.000 habitantes** (censo IBGE).\n- **Localização:** Região Centro-Oeste / Alta Paulista de São Paulo, a 514 km da capital pela rodovia SP-294.\n- **DDD:** 14 | **CEP Geral:** 17600-000.\n- **Distritos:** Varpa, Parnaso e Universo.`
    };
  }

  // SE NÃO FOR NENHUM DESSES, RESPONDE COM UMA ORIENTAÇÃO NATURAL E CONTEXTUALIZADA
  return {
    title: "💡 TupãIA • Posso te ajudar com isso!",
    reply: `Entendi a sua pergunta sobre **"${query}"**!\n\nComo sou focado na cidade de Tupã (SP), você pode me perguntar com suas próprias palavras sobre:\n- **Estatísticas reais:** Renda média dos tupãenses, como anda a saúde pública e hospitais, PIB e notas das escolas.\n- **Dia a dia:** Melhores lugares para comer, o que fazer no fim de semana, como é morar aqui, cinema e lojas.\n- **Atrações:** Eco Thermas, UniFADAP, UNESP, Distrito de Varpa e Museu Índia Vanuíre.\n- **Serviços:** IPTU, Prefeitura, Santa Casa e vagas do PAT.\n\nTente reformular com um desses temas que te respondo em detalhes!`
  };
}
