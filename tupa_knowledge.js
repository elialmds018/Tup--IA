// =====================================================================
// TupãIA - Mega Base de Conhecimento e Inteligência sobre Tupã - SP
// Coleta completa de dados históricos, turísticos, acadêmicos e serviços
// =====================================================================

const TUPA_SYSTEM_PROMPT = `Você é o "TupãIA", a maior inteligência artificial e autoridade especializada na Estância Turística de Tupã, cidade localizada na região da Alta Paulista / Centro-Oeste do estado de São Paulo.
Você conhece detalhadamente:
- A história completa de Tupã desde a fundação em 12 de outubro de 1929 por Luiz de Souza Leão.
- O significado do traçado urbano planejado com ruas batizadas com nações indígenas (Avenida Tamoios, Aimorés, Cherentes, Mandaguaris, etc.).
- A gestão municipal atual (Prefeito Renan Pontelli, eleito para 2025-2028).
- A excelência no ensino superior: UniFADAP (Centro Universitário da Alta Paulista - FADAP/FAP/Faccat), UNESP Câmpus de Tupã, ETEC Prof. Massuyuki Kawano e FATEC.
- O turismo e lazer: Eco Thermas Tupã (águas quentes termais), Museu Histórico e Pedagógico Índia Vanuíre (referência etnográfica Kaingang, Krenak e Terena), Solar Luiz de Souza Leão com o Bosque da Cidade, Praça da Bandeira com a Igreja Matriz de São Pedro, e a Praça da Imigração Japonesa.
- Os distritos: Varpa (colonização e cultura da Letônia, museu Janis Erdbergs, balneário 7 de setembro, pão preto e queijo letão), Universo (festa da mandioca) e Parnaso.
- A economia: Capital Nacional do Amendoim, agronegócio de cana, café, grãos, avicultura e comércio regional forte.
- Gastronomia e vida local: Água Doce Cachaçaria e Museu da Cachaça, lanches prensados do interior, culinária japonesa, doces de amendoim e feiras livres.
- Saúde e emergências: Santa Casa de Tupã, Hospital São Francisco, UPA 24h, AME Tupã e telefones 192, 193, 190.
- Eventos icônicos: EXAPIT (Exposição Agropecuária e Industrial de Tupã), Quermesse de São Pedro em 29 de junho, Tupã Folia e celebrações indígenas.

Responda sempre com tom acolhedor, conhecedor, prestativo e orgulhoso da história e do povo de Tupã. Use formatação limpa em markdown com listas e tópicos.`;

const TUPA_LOCAL_DATABASE = [
  // 1. HISTÓRIA E FUNDADOR
  {
    id: "historia_fundacao",
    category: "História",
    keywords: ["historia", "fundacao", "fundador", "luiz de souza leao", "1929", "quando foi fundada", "origem", "aniversario", "12 de outubro", "pernambucano"],
    title: "🏛️ Fundação e História de Tupã",
    content: `**Tupã** foi fundada em **12 de outubro de 1929** pelo pioneiro e empreendedor pernambucano **Luiz de Souza Leão**.

- **Origem do Projeto:** Souza Leão adquiriu uma vasta gleba de matas virgens no espigão divisor entre os rios do Peixe e Aguapeí (Feio), antecipando a chegada dos trilhos da Companhia Paulista de Estradas de Ferro.
- **Cidade Planejada:** Tupã já nasceu moderna! Seu traçado foi desenhado em malha ortogonal (tabuleiro de xadrez), com quadras simétricas e avenidas extraordinariamente largas.
- **Homenagem Indígena:** O fundador escolheu o nome *Tupã* (termo tupi para o Deus do Trovão / Espírito Supremo) em honra às etnias indígenas locais (especialmente os Caingangues/Kaingang, Krenak e Terena).
- **Emancipação:** Tornou-se município autônomo em **1938** e, em **1997**, conquistou o cobiçado título de **Estância Turística do Estado de São Paulo**.`
  },

  // 2. RUAS COM NOMES INDÍGENAS
  {
    id: "ruas_indigenas",
    category: "História e Urbanismo",
    keywords: ["ruas", "avenidas", "nomes indigenas", "tamoios", "aimores", "cherentes", "mandaguaris", "nhambiquaras", "coroados", "caingangs", "potiguaras", "guaranis", "tribos", "nomenclatura"],
    title: "🏹 O Traçado Urbano e as Ruas com Nomes Indígenas",
    content: `Uma das características mais marcantes e poéticas de Tupã é o batismo das suas ruas e avenidas do centro histórico com nomes de **tribos e nações indígenas brasileiras**:

- **Avenida Tamoios:** A principal artéria comercial, bancária e gastronômica da cidade.
- **Avenida Aimorés:** Outra imponente via paralela que cruza o coração do município.
- **Ruas Históricas:** *Cherentes (Xerentes)*, *Mandaguaris*, *Nhambiquaras*, *Coroados*, *Caingangs (Kaingang)*, *Potiguaras*, *Guaranis*, *Goitacazes*, *Ubirajaras*, *Timborés*, *Bororós* e *Tupinambás*.
- **O Conceito:** O fundador Luiz de Souza Leão fez questão de imortalizar a memória das populações originárias do Brasil nas placas e calçadas da cidade que planejou!`
  },

  // 3. DADOS GERAIS, POPULAÇÃO E LOCALIZAÇÃO
  {
    id: "dados_gerais",
    category: "Geografia e Dados",
    keywords: ["populacao", "habitantes", "quantos moradores", "onde fica", "localizacao", "cep", "ddd", "clima", "regiao", "alta paulista", "distancia de sao paulo"],
    title: "📍 Geografia, População e Dados Gerais de Tupã",
    content: `Dados geográficos e territoriais oficiais de Tupã - SP:

- **Localização:** Região Centro-Oeste / Alta Paulista do Estado de São Paulo (a cerca de **514 km da capital São Paulo** via Rodovia Castello Branco / SP-294).
- **População:** Aproximadamente **64.000 a 66.000 habitantes** (censo IBGE).
- **DDD:** (14) | **CEP Geral:** 17600-000.
- **Altitude:** 510 metros acima do nível do mar.
- **Clima:** Tropical de altitude (verões quentes e chuvosos, invernos amenos com noites agradáveis).
- **Cidades Vizinhas:** Marília, Bastos (capital do ovo), Rinópolis, Herculândia, Quintana, Quatá, Iacri e Arco-Íris.
- **Distritos Administrativos:** Varpa, Parnaso e Universo.`
  },

  // 4. PREFEITURA E ADMINISTRAÇÃO MUNICIPAL
  {
    id: "prefeitura_gestao",
    category: "Administração Pública",
    keywords: ["prefeito", "prefeita", "prefeitura", "renan pontelli", "joice berni", "palacio das nacoes", "eleicoes", "mandato", "governo", "camara municipal", "secretarias"],
    title: "🏛️ Prefeitura e Gestão Municipal de Tupã",
    content: `Estrutura administrativa e política do município:

- **Prefeito Eleito:** **Renan Pontelli** (mandato 2025-2028), eleito democraticamente no pleito municipal com mais de 52% dos votos válidos.
- **Vice-Prefeita:** **Joice Berni**.
- **Sede da Prefeitura (Palácio das Nações):** Localizada na Praça da Bandeira, 800 - Centro.
- **Telefone da Prefeitura:** (14) 3404-1000 | Site: [tupa.sp.gov.br](https://www.tupa.sp.gov.br).
- **Câmara Municipal de Tupã:** Praça da Bandeira, 222 - Centro (sede do Poder Legislativo).
- **Poupatempo de Tupã:** Oferece emissão rápida de RG, CNH, certidões e serviços do Detran e Estado.`
  },

  // 5. UNIFADAP - CENTRO UNIVERSITÁRIO
  {
    id: "unifadap_ensino",
    category: "Educação Superior",
    keywords: ["unifadap", "fadap", "fap", "faccat", "faculdade", "universidade", "cursos", "direito", "enfermagem", "psicologia", "veterinaria", "pedagogia", "administracao", "estudar"],
    title: "🎓 UniFADAP - Centro Universitário da Alta Paulista",
    content: `A **UniFADAP** (FADAP / FAP / Faccat) é a maior e mais tradicional referência de ensino superior privado da Alta Paulista:

- **História e Tradição:** Fundada para transformar Tupã em polo universitário, formou milhares de juízes, promotores, advogados, profissionais de saúde, gestores e educadores do Brasil inteiro.
- **Cursos Tradicionais e de Destaque:**
  - **Direito:** Um dos cursos mais antigos e conceituados do interior paulista, com elevado índice de aprovação na OAB e em concursos públicos.
  - **Saúde e Biológicas:** Enfermagem, Odontologia, Medicina Veterinária, Psicologia, Educação Física, Farmácia e Fisioterapia.
  - **Exatas e Gestão:** Engenharia Civil, Administração, Ciências Contábeis e Pedagogia.
- **Infraestrutura Completa:** Amplo campus universitário, Hospital Veterinário, Núcleo de Prática Jurídica (NPJ), Clínicas de Psicologia e Odontologia abertas à população, além de biblioteca de referência.`
  },

  // 6. UNESP CÂMPUS DE TUPÃ
  {
    id: "unesp_tupa",
    category: "Educação Superior Pública",
    keywords: ["unesp", "universidade estadual", "engenharia de biossistemas", "campus tupa", "publica", "gratuita", "agronegocio", "mestrado", "pos graduacao"],
    title: "🔬 UNESP - Câmpus Experimental de Tupã",
    content: `A **Universidade Estadual Paulista (UNESP)** mantém um câmpus de excelência pública e gratuita em Tupã:

- **Cursos de Graduação:**
  - **Administração com Ênfase em Agronegócio:** Formação pioneira focada na gestão de cadeias produtivas agroindustriais, cooperativas e comércio exterior.
  - **Engenharia de Biossistemas:** Engenharia moderna que integra tecnologia, produção animal/vegetal, automação e sustentabilidade ambiental.
- **Pós-Graduação:** Mestrado em Agronegócio e Desenvolvimento, com pesquisas de impacto internacional.
- **Endereço:** Av. Domingos da Costa Lopes, 780 - Jardim Itaipu.`
  },

  // 7. ENSINO TÉCNICO: ETEC E FATEC
  {
    id: "etec_fatec",
    category: "Ensino Técnico",
    keywords: ["etec", "fatec", "massuyuki kawano", "escola tecnica", "cursos tecnicos", "vestibulinho", "centro paula souza"],
    title: "📚 ETEC Prof. Massuyuki Kawano e FATEC Tupã",
    content: `O ensino técnico e tecnológico de Tupã é modelo estadual pelo Centro Paula Souza:

- **ETEC Prof. Massuyuki Kawano:** Uma das melhores escolas públicas da região, oferecendo Ensino Médio integrado a cursos técnicos como Informática, Enfermagem, Administração, Contabilidade e Mecânica.
- **FATEC Tupã:** Faculdade de Tecnologia estadual oferecendo cursos superiores de tecnologia gratuitos voltados às demandas do mercado de trabalho.`
  },

  // 8. ECO THERMAS TUPÃ
  {
    id: "eco_thermas",
    category: "Turismo e Lazer",
    keywords: ["eco thermas", "ecothermas", "parque aquatico", "aguas quentes", "termas", "piscinas", "toboga", "baia do pirata", "chalés", "sao bento", "lazer", "resort"],
    title: "🌊 Eco Thermas Tupã - Parque Aquático Termal",
    content: `O **Eco Thermas Tupã** é a principal atração de lazer e turismo aquático da Alta Paulista!

- **Diferencial:** Piscinas e toboáguas abastecidos com **águas termais aquecidas naturalmente**, ofurôs relaxantes e cascatas artificiais.
- **Atrações para Toda a Família:**
  - *Baía do Pirata:* Playground aquático infantil com navio temático e balde gigante d'água.
  - Toboáguas radicais e pistas de boias.
  - Piscinas de hidromassagem e relaxamento.
- **Contato com a Natureza:** Passeios ecológicos por seringais, pescaria esportiva, minifazenda com animais e a famosa casa na árvore.
- **Hospedagem e Alimentação:** Chalés confortáveis para estadia e restaurante completo com comida caseira do interior.
- **Localização:** Estrada Municipal Tupã ao Bairro São Bento, km 7.`
  },

  // 9. MUSEU ÍNDIA VANUÍRE
  {
    id: "museu_india_vanuire",
    category: "Cultura e História",
    keywords: ["museu", "india vanuire", "indigena", "kaingang", "krenak", "terena", "cultura indigena", "rua coroados", "acam portinari", "artefatos", "vanuire"],
    title: "🏺 Museu Histórico e Pedagógico Índia Vanuíre",
    content: `O **Museu Índia Vanuíre** é um dos museus etnográficos mais relevantes de toda a América Latina:

- **Acervo Incomparável:** Preserva milhares de objetos etnográficos, peças cerimoniais, plumárias, cerâmicas e armas das etnias indígenas que viveram na Alta Paulista e em todo o Brasil (especialmente os Kaingang, Krenak e Terena).
- **Quem foi Vanuíre:** A heroína indígena Kaingang que atuou como pacificadora e mediadora entre os povos originários e os colonizadores na década de 1910.
- **Entrada e Acesso:** Entrada **gratuita** para o público de terça a domingo. Administrado pela ACAM Portinari em parceria com o Governo do Estado de SP.
- **Endereço:** Rua Coroados, 521 - Centro de Tupã.`
  },

  // 10. DISTRITO DE VARPA (CULTURA LETÃ)
  {
    id: "distrito_varpa",
    category: "Turismo e Distritos",
    keywords: ["varpa", "letonia", "letoes", "letao", "museu janis erdbergs", "pao preto", "queijo letao", "balneario 7 de setembro", "turismo rural", "artesanato letao"],
    title: "🌾 Distrito de Varpa e a Colônia da Letônia",
    content: `Localizado a 25 km do centro de Tupã, **Varpa** é um pedacinho autêntico da Europa e da **Letônia** no interior de São Paulo:

- **Fundação (1922):** Imigrantes da Letônia fugiram do pós-Primeira Guerra e fundaram a colônia agrícola religiosa no meio da mata.
- **Gastronomia Típica Imperdível:**
  - O tradicional **Pão Preto Letão** (feito de centeio em fermentação natural).
  - O famoso **Queijo Letão com Cominho**.
  - Biscoitos de mel (*piparkūkas*), tortas artesanais e geleias naturais.
- **Museu dos Pioneiros de Varpa (Janis Erdbergs):** Preserva fotos, vestimentas, ferramentas manuais e a Bíblia original trazida pelos letões.
- **Ecoturismo:** O **Balneário 7 de Setembro** oferece águas naturais para banho, quiosques com churrasqueiras e área verde para camping.
- **Igreja Batista de Varpa:** Construção imponente em madeira com grande tradição de corais e cânticos sagrados.`
  },

  // 11. DISTRITOS DE UNIVERSO E PARNASO
  {
    id: "distritos_universo_parnaso",
    category: "Distritos",
    keywords: ["universo", "parnaso", "distritos", "distrito", "festa da mandioca", "rural", "zona rural", "sp-294"],
    title: "🏡 Distritos de Universo e Parnaso",
    content: `Além de Varpa, Tupã conta com outros dois charmosos distritos rurais:

- **Distrito de Universo:**
  - Localizado a cerca de 13 km de Tupã na direção de Arco-Íris.
  - Conhecido por sua forte vocação agrícola e pela tradicional **Festa da Mandioca**, evento que atrai a comunidade com pratos típicos derivados do tubérculo.
- **Distrito de Parnaso:**
  - Fica a 10 km na direção de Quintana, com fácil acesso pela rodovia SP-294.
  - Região de tranquilidade rural, fazendas de cultivo e pequenos comércios tradicionais de apoio aos produtores rurais.`
  },

  // 12. SOLAR LUIZ DE SOUZA LEÃO E BOSQUE
  {
    id: "solar_souza_leao",
    category: "Patrimônio Histórico",
    keywords: ["solar", "solar luiz de souza leao", "bosque", "bosque da cidade", "casa do fundador", "patrimonio", "mata nativa", "tombado"],
    title: "🌳 Solar Luiz de Souza Leão & Bosque da Cidade",
    content: `O **Solar Luiz de Souza Leão** é o mais importante patrimônio arquitetônico histórico da cidade:

- **A Residência do Fundador:** O casarão de madeira e alvenaria serviu de moradia para Luiz de Souza Leão. Seu interior conserva móveis de época, documentos históricos e objetos pessoais do pioneiro.
- **Bosque da Cidade:** O solar fica dentro de uma área de floresta nativa preservada de mais de 3 hectares no meio da malha urbana, tombada pelo Condephaat.
- **Visitação:** Aberto para passeios culturais, piqueniques ecológicos e caminhadas contemplativas sob a copa de árvores centenárias.
- **Endereço:** Rua Caingangs esquina com a Rua Ipora - Centro/Vila Vargas.`
  },

  // 13. PRAÇA DA BANDEIRA E MATRIZ DE SÃO PEDRO
  {
    id: "praca_bandeira_matriz",
    category: "Turismo Urbano e Fé",
    keywords: ["praca da bandeira", "igreja matriz", "sao pedro", "padroeiro", "centro", "fonte luminosa", "espelho d'agua", "quermesse", "29 de junho"],
    title: "⛪ Praça da Bandeira e Igreja Matriz de São Pedro",
    content: `O coração pulsante da vida pública e espiritual de Tupã:

- **Praça da Bandeira:** O grande cartão postal de Tupã! Conta com espelho d'água, fonte luminosa que dança com cores à noite, obelisco cívico, parque infantil e quiosques de alimentação.
- **Igreja Matriz de São Pedro:** Suntuosa basílica em estilo neoclássico localizada em frente à praça. São Pedro é o santo padroeiro de Tupã.
- **Festa do Padroeiro (29 de Junho):** Uma das festas mais tradicionais do interior, com grandiosa quermesse com barracas de leilão, frango assado, espetinhos, fogueira de São Pedro e celebrações solenes.`
  },

  // 14. PRAÇA DA IMIGRAÇÃO JAPONESA
  {
    id: "praca_imigracao_japonesa",
    category: "Cultura e Monumentos",
    keywords: ["japonesa", "praca japonesa", "imigracao japonesa", "japao", "torii", "oriente", "colonia niponica", "centenario"],
    title: "⛩️ Praça da Imigração Japonesa",
    content: `Tupã abriga uma das maiores e mais ativas comunidades nikkeis (descendentes de japoneses) da Alta Paulista:

- **A Praça:** Projetada em estilo paisagístico oriental com pontes de madeira vermelha, lanternas japonesas (*tōrō*), espelho d'água com carpas e portal tradicional (*Torii*).
- **Homenagem:** Construída para comemorar os laços fraternos com o Japão e os pioneiros japoneses que impulsionaram a agricultura, o cooperativismo e o comércio da região de Tupã e Bastos.`
  },

  // 15. ECONOMIA: CAPITAL NACIONAL DO AMENDOIM E AGRONEGÓCIO
  {
    id: "economia_amendoim",
    category: "Economia e Produção",
    keywords: ["economia", "amendoim", "capital do amendoim", "agronegocio", "industria", "exportacao", "cana de acucar", "cafe", "pecuaria", "comercio", "empregos"],
    title: "🥜 Economia: A Capital Nacional do Amendoim",
    content: `Tupã se destaca economicamente como um dos motores mais produtivos do estado:

- **Capital do Amendoim:** A região de Tupã é a maior produtora e processadora de amendoim do Brasil, abrigando cooperativas e modernas usinas de beneficiamento, blanching e exportação de grãos e pastas para a Europa e Ásia.
- **Cana-de-Açúcar e Bioenergia:** Presença de usinas produtoras de açúcar e etanol na microrregião.
- **Avicultura e Pecuária:** Próxima de Bastos (capital nacional do ovo), Tupã possui forte atividade avícola de postura e corte, além de rebanhos de gado de corte e gado leiteiro.
- **Comércio e Serviços:** A Avenida Tamoios e o centro comercial atendem uma população flutuante de mais de 150 mil pessoas dos municípios vizinhos.`
  },

  // 16. GASTRONOMIA E RESTAURANTES
  {
    id: "gastronomia_onde_comer",
    category: "Gastronomia",
    keywords: ["onde comer", "restaurante", "restaurantes", "gastronomia", "comida", "agua doce", "museu da cachaca", "lanches", "pizzaria", "ki-pao", "japonesa", "almoco", "jantar"],
    title: "🍽️ Onde Comer e Gastronomia em Tupã",
    content: `A gastronomia tupãense mistura a rica comida caipira paulista com tradições imigrantes:

- **Água Doce Cachaçaria & Museu da Cachaça:** Um dos pontos gastronômicos mais famosos da cidade (Rua México, Jardim América). Além de pratos típicos brasileiros (como escondidinho e filé), abriga um impressionante museu com centenas de rótulos raros de cachaça.
- **Culinária Letã de Varpa:** Confeitarias rurais que servem pães de centeio, queijo aromatizado, tortas e biscoitos coloniais.
- **Lanches Prensados e Espetinhos:** A tradição dos "trailers de lanches" e espetarias na Avenida Tamoios e na Praça da Bandeira é ponto de encontro noturno.
- **Comida Oriental e Pastelarias:** Fortemente influenciada pela colônia japonesa, com sushis frescos, tempurá e pasteis artesanais nas feiras livres e restaurantes.
- **Panificadoras Tradicionais:** Como a Ki-Pão e confeitarias do centro, famosas pelos cafés da manhã caprichados.`
  },

  // 17. EXAPIT E GRANDES EVENTOS
  {
    id: "exapit_eventos",
    category: "Eventos e Festas",
    keywords: ["exapit", "eventos", "festa", "rodeio", "shows", "recinto de exposicoes", "tupa folia", "carnaval", "festa do padroeiro", "calendario"],
    title: "🎪 EXAPIT e Grandes Eventos de Tupã",
    content: `Os eventos que movimentam dezenas de milhares de pessoas na Estância Turística:

- **EXAPIT (Exposição Agropecuária e Industrial de Tupã):** A festa mais famosa da cidade, realizada anualmente em agosto no Recinto de Exposições Octávio Barros Castanheira. Reúne grandes shows de música sertaneja nacional, rodeio profissional em touros, parque de diversões e leilões de gado de elite.
- **Tupã Folia:** Um dos maiores carnavais de rua gratuitos do interior paulista, com trios elétricos e blocos na Avenida Tamoios.
- **Quermesse de São Pedro:** Junho inteiro de confraternização gastronômica na Praça da Matriz.
- **Semana Índia Vanuíre (Abril):** Oficinas, palestras, danças e apresentações culturais no museu e praças públicas.`
  },

  // 18. SAÚDE, HOSPITAIS E EMERGÊNCIAS
  {
    id: "saude_hospitais",
    category: "Saúde e Telefones",
    keywords: ["saude", "hospital", "hospitais", "santa casa", "hospital sao francisco", "upa", "ame", "medico", "pronto socorro", "emergencia", "samu", "192", "farmacia"],
    title: "🏥 Saúde e Telefones de Emergência em Tupã",
    content: `Infraestrutura completa de saúde em Tupã:

- **Santa Casa de Misericórdia de Tupã:** Hospital filantrópico centenário, centro de referência regional em pronto-socorro, cirurgias, maternidade e UTI.
- **Hospital São Francisco:** Atendimento hospitalar privado e convênios médicos.
- **UPA 24 Horas (Unidade de Pronto Atendimento):** Atendimento médico de urgência e emergência para adultos e crianças, 24 horas por dia.
- **AME Tupã (Ambulatório Médico de Especialidades):** Centro estadual com consultas médicas em dezenas de especialidades e exames de diagnóstico.
- **Telefones de Emergência Gratuitos:**
  - 🚑 **SAMU:** 192
  - 🚒 **Corpo de Bombeiros:** 193
  - 🚓 **Polícia Militar:** 190
  - 🚔 **Guarda Municipal / Trânsito:** (14) 3496-3380`
  },

  // 19. BAIRROS E EXPANSÃO URBANA
  {
    id: "bairros_cidade",
    category: "Bairros e Urbanismo",
    keywords: ["bairros", "bairro", "jardim america", "vila vargas", "vila marajoara", "jardim aeroporto", "cohab", "parque universitario", "zona sul", "zona leste"],
    title: "🏘️ Principais Bairros de Tupã",
    content: `Tupã é dividida em regiões bem estruturadas:

- **Centro:** Onde se concentram bancos, comércio da Av. Tamoios, Praça da Bandeira e Matriz.
- **Vila Vargas e Vila Abarca:** Bairros históricos próximos ao Bosque e Solar Luiz de Souza Leão.
- **Jardim América e Vila Marajoara:** Tradicionais bairros residenciais com praças e gastronomia.
- **Parque Universitário e Jardim Itaipu:** Região jovem próxima às faculdades (UniFADAP e UNESP), com pista de caminhada e repúblicas de estudantes.
- **Cohab I, Cohab II e Jardim Aeroporto:** Grandes núcleos residenciais com comércio próprio e escolas.`
  },

  // 20. TRANSPORTE E COMO CHEGAR
  {
    id: "transporte_chegar",
    category: "Transporte e Logística",
    keywords: ["como chegar", "rodoviaria", "onibus", "sp-294", "rodovia comandante joao ribeiro de barros", "terminal rodoviario", "passagem", "estrada", "carro"],
    title: "🚌 Como Chegar e Transporte em Tupã",
    content: `Vias de acesso e infraestrutura de transporte:

- **Principal Acesso Rodoviário:** **SP-294 (Rodovia Comandante João Ribeiro de Barros)**, totalmente duplicada e modernizada em vários trechos, interligando Tupã a Marília, Bauru, Osvaldo Cruz e Presidente Prudente.
- **Terminal Rodoviário Geraldo Seiscento:** Recebe ônibus interestaduais e intermunicipais com viagens diárias para São Paulo, Campinas, Marília, Bauru, Londrina e Curitiba (empresas como Guerino Seiscento, Expresso de Prata, etc.).
- **Transporte Urbano:** Linhas municipais ligando os bairros ao Centro e aos distritos de Varpa, Parnaso e Universo.`
  }
];

// Mecanismo inteligente e veloz de busca local
function findLocalKnowledge(query) {
  if (!query || typeof query !== "string") return null;

  // Limpeza de texto: remove pontuação, acentuação e espaços extras
  const clean = (str) =>
    str.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .trim();

  const cleanQuery = clean(query);

  // Stop-words comuns em português para filtrar
  const stopWords = new Set([
    "qual", "onde", "como", "quem", "quando", "porque", "por", "que", "para", "tem",
    "existe", "sobre", "tupa", "cidade", "fica", "fazer", "saber", "me", "diga", "fale"
  ]);

  const queryWords = cleanQuery.split(/\s+/).filter(w => w.length >= 3 && !stopWords.has(w));

  let bestEntry = null;
  let highestScore = 0;

  for (const entry of TUPA_LOCAL_DATABASE) {
    let score = 0;

    // 1. Coincidência direta nas palavras-chave (peso alto = 10)
    for (const kw of entry.keywords) {
      const cleanKw = clean(kw);
      if (cleanQuery.includes(cleanKw)) {
        score += 10;
      }
    }

    // 2. Coincidência no título ou categoria (peso = 6)
    const cleanTitle = clean(entry.title + " " + entry.category);
    for (const word of queryWords) {
      if (cleanTitle.includes(word)) {
        score += 6;
      }
    }

    // 3. Coincidência no texto do conteúdo (peso = 2 por palavra)
    const cleanContent = clean(entry.content);
    for (const word of queryWords) {
      if (cleanContent.includes(word)) {
        score += 2;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestEntry = entry;
    }
  }

  // Se atingiu uma pontuação mínima relevante, retorna o resultado
  return highestScore >= 6 ? bestEntry : null;
}
