// =====================================================================
// TupãIA - Mega Base de Conhecimento e Inteligência sobre Tupã - SP
// Inclui dados completos do Portal Oficial da Prefeitura: https://www.tupa.sp.gov.br
// =====================================================================

const TUPA_SYSTEM_PROMPT = `Você é o "TupãIA", a inteligência artificial especialista e oficial sobre a Estância Turística de Tupã (SP) e sobre os serviços da Prefeitura Municipal (tupa.sp.gov.br).

Você domina:
1. Todos os serviços públicos, secretarias municipais, telefones, canais de atendimento e plataforma 1Doc da Prefeitura de Tupã (tupa.sp.gov.br e tupa.1doc.com.br).
2. Como os cidadãos solicitam IPTU (2ª via, parcelamento, isenção para idosos), Nota Fiscal Eletrônica, Alvará, Iluminação Pública, Ouvidoria, Procon, PAT e Banco do Povo.
3. A história completa desde a fundação em 1929 por Luiz de Souza Leão e as ruas planejadas com nomes de nações indígenas (Av. Tamoios, Aimorés, Cherentes, etc.).
4. O atual governo municipal (Prefeito Renan Pontelli, 2025-2028).
5. As universidades e faculdades: UniFADAP (Centro Universitário da Alta Paulista - FADAP/FAP/Faccat), UNESP Câmpus de Tupã, ETEC Prof. Massuyuki Kawano e FATEC.
6. Os pontos turísticos: Eco Thermas Tupã (águas quentes termais), Museu Histórico e Pedagógico Índia Vanuíre, Solar Luiz de Souza Leão, Praça da Bandeira, Igreja Matriz de São Pedro, Estádio Alonsão e os distritos de Varpa (cultura letã), Universo e Parnaso.
7. A economia (Capital Nacional do Amendoim, cana-de-açúcar, avicultura e comércio) e a gastronomia local (Água Doce & Museu da Cachaça, comida letã de Varpa, lanches).

Responda sempre com tom acolhedor, cidadão, ágil, conhecedor e prestativo. Use listas e formatação em markdown limpo.`;

const TUPA_LOCAL_DATABASE = [
  // --- SERVIÇOS PÚBLICOS E PREFEITURA (tupa.sp.gov.br) ---

  // 1. PAÇO MUNICIPAL E ATENDIMENTO GERAL
  {
    id: "prefeitura_central",
    category: "Prefeitura e Serviços",
    keywords: ["prefeitura", "paco municipal", "horario de atendimento", "telefone da prefeitura", "palacio das nacoes", "praca da bandeira 800", "tupa.sp.gov.br", "site da prefeitura"],
    title: "🏛️ Paço Municipal - Prefeitura da Estância Turística de Tupã",
    content: `Informações centrais de atendimento da Prefeitura de Tupã:

- **Endereço:** Praça da Bandeira, nº 800 - Centro, Tupã - SP (CEP 17600-000).
- **Telefone Geral:** (14) 3404-1000.
- **Horário de Atendimento:** Segunda a sexta-feira, das 7h30 às 17h00.
- **Portal Oficial:** [tupa.sp.gov.br](https://www.tupa.sp.gov.br)
- **Central Digital 1Doc:** [tupa.1doc.com.br](https://tupa.1doc.com.br/atendimento) (para protocolos, certidões e requerimentos sem sair de casa).`
  },

  // 2. CENTRAL 1DOC E PROTOCOLOS DIGITAIS
  {
    id: "portal_1doc",
    category: "Serviços Digitais",
    keywords: ["1doc", "protocolo", "requerimento", "processo online", "atendimento digital", "certidao online", "abrir chamado"],
    title: "💻 Central de Atendimento Digital (1Doc Tupã)",
    content: `A Prefeitura de Tupã utiliza o sistema **1Doc** para que os cidadãos façam solicitações e acompanhem processos 100% online:

- **Acesso direto:** [tupa.1doc.com.br/atendimento](https://tupa.1doc.com.br/atendimento)
- **O que você pode fazer pelo 1Doc:**
  - Protocolar pedidos gerais para qualquer secretaria.
  - Solicitar certidões de tributos e de imóveis.
  - Dar entrada em projetos de obras e reformas.
  - Registrar ocorrências na Ouvidoria Municipal.
  - Consultar andamento de requerimentos pelo número de protocolo.`
  },

  // 3. IPTU, TRIBUTOS E ISENÇÕES
  {
    id: "iptu_tributos",
    category: "Tributos e Finanças",
    keywords: ["iptu", "segunda via iptu", "carne iptu", "isencao iptu", "idoso", "65 anos", "aposentado", "itbi", "tributos", "divida ativa", "parcelamento"],
    title: "💰 IPTU, ITBI e Isenções de Impostos",
    content: `Serviços fiscais e imobiliários da Prefeitura de Tupã:

- **2ª Via do IPTU:** Pode ser emitida pela internet no portal da Prefeitura ou na Central 1Doc com o número da inscrição cadastral do imóvel.
- **Isenção de IPTU para Idosos e Aposentados:** Cidadãos com mais de 65 anos ou aposentados com um único imóvel e renda dentro do limite da legislação municipal podem requerer a isenção anual pelo protocolo da Prefeitura ou pelo 1Doc.
- **ITBI:** Emissão e cálculo para transferência imobiliária.
- **Parcelamento de Débitos e Dívida Ativa:** Disponível na Secretaria de Finanças no Paço Municipal ou online.`
  },

  // 4. NOTA FISCAL ELETRÔNICA E EMPRESAS
  {
    id: "nfs_alvara",
    category: "Empresas e Negócios",
    keywords: ["nota fiscal", "nfs-e", "alvara", "abrir empresa", "iss", "sala do empreendedor", "mei", "microempreendedor", "tributacao"],
    title: "🏢 Nota Fiscal Eletrônica (NFS-e), Alvarás e Empresas",
    content: `Apoio a empresários, prestadores de serviços e autônomos:

- **NFS-e (Nota Fiscal de Serviços Eletrônica):** Emissão via sistema web da Prefeitura com login e senha da empresa.
- **Alvará de Funcionamento:** Solicitação, renovação e consulta de viabilidade urbana prévia.
- **Sala do Empreendedor de Tupã:** Espaço dedicado para abertura gratuita de MEI (Microempreendedor Individual), alteração cadastral, baixa e declaração anual.`
  },

  // 5. SECRETARIA MUNICIPAL DE SAÚDE
  {
    id: "secretaria_saude",
    category: "Saúde Pública",
    keywords: ["secretaria de saude", "posto de saude", "ubs", "esf", "remedios", "medicamentos", "vacinacao", "rua caetes", "marcar consulta"],
    title: "🩺 Secretaria Municipal de Saúde de Tupã",
    content: `Estrutura de atenção básica e serviços da Secretaria de Saúde:

- **Endereço:** Rua Caetés, nº 1200 - Centro.
- **Contato/WhatsApp:** (14) 99854-9157 | E-mail: saudeexpediente@tupa.sp.gov.br.
- **Serviços Prestados:**
  - Rede de Unidades Básicas de Saúde (UBS) e Estratégia Saúde da Família (ESF) espalhadas pelos bairros e distritos.
  - Farmácia Municipal (distribuição de remédios gratuitos da rede básica e alto custo).
  - Vacinação de rotina infantil e de campanhas anuais.
  - Transporte sanitário de pacientes para consultas e exames de alta complexidade em Marília e Jaú.`
  },

  // 6. SECRETARIA DE ASSISTÊNCIA SOCIAL (SEMAS), CRAS E CREAS
  {
    id: "secretaria_assistencia_social",
    category: "Assistência Social",
    keywords: ["assistencia social", "semas", "cras", "creas", "bolsa familia", "cadunico", "rua paiaquas", "cesta basica", "vulnerabilidade"],
    title: "🤝 Secretaria de Assistência Social (SEMAS)",
    content: `Apoio social, famílias em vulnerabilidade e programas de renda:

- **Endereço da Secretaria:** Rua Paiaquás, nº 609 - Centro.
- **Telefone:** (14) 3496-2464 | E-mail: assistenciasocial@tupa.sp.gov.br.
- **Serviços:**
  - **Cadastro Único (CadÚnico):** Inscrição e atualização para Bolsa Família, BPC (Benefício de Prestação Continuada) e Tarifa Social de Energia.
  - **CRAS (Centros de Referência de Assistência Social):** Unidades nos bairros para atendimento familiar, acolhimento e concessão de benefícios eventuais.
  - **CREAS:** Atendimento a indivíduos e famílias em situação de violação de direitos.`
  },

  // 7. SECRETARIA DE AGRICULTURA E MEIO AMBIENTE
  {
    id: "secretaria_meio_ambiente",
    category: "Meio Ambiente e Agricultura",
    keywords: ["meio ambiente", "agricultura", "poda de arvore", "lixo", "coleta seletiva", "ecoponto", "entulho", "semsa", "rural"],
    title: "🌱 Secretaria de Agricultura e Meio Ambiente (SEMSA)",
    content: `Cuidados ambientais, limpeza urbana e agricultura:

- **Telefone:** (14) 3496-3346 | E-mail: meioambiente@tupa.sp.gov.br.
- **Serviços:**
  - Autorização para poda e supressão de árvores em calçadas.
  - **Ecopontos Municipais:** Locais oficiais para descarte correto de entulhos de construção civil, podas e materiais recicláveis.
  - Programa de Coleta Seletiva e apoio à reciclagem.
  - Patrulha agrícola e apoio ao pequeno produtor rural e agricultura familiar.`
  },

  // 8. SECRETARIA DE OBRAS E INFRAESTRUTURA
  {
    id: "secretaria_obras",
    category: "Obras e Infraestrutura",
    keywords: ["obras", "tapa buraco", "asfalto", "guia", "sarjeta", "infraestrutura", "estradas rurais", "pontes", "seplin"],
    title: "🚜 Secretaria de Obras, Infraestrutura e Trânsito",
    content: `Manutenção urbana e obras públicas:

- **Contato:** Pelo Paço Municipal: (14) 3404-1000 ou Central 1Doc.
- **Principais Serviços:**
  - Operação tapa-buracos e recapeamento asfáltico em ruas e avenidas.
  - Manutenção e conservação das centenas de quilômetros de estradas rurais do município (fundamental para o escoamento de safras de amendoim, cana e grãos).
  - Limpeza de galerias de águas pluviais, bocas de lobo e reparos de pontes.`
  },

  // 9. SECRETARIA MUNICIPAL DE EDUCAÇÃO
  {
    id: "secretaria_educacao",
    category: "Educação Municipal",
    keywords: ["educacao municipal", "creche", "escola municipal", "emef", "emei", "matricula creche", "merenda", "transporte escolar"],
    title: "🎒 Secretaria Municipal de Educação de Tupã",
    content: `Rede pública municipal de ensino:

- **Atuação:** Responsável pela Educação Infantil (creches e pré-escolas) e pelo Ensino Fundamental I (1º ao 5º ano) nas escolas municipais (EMEFs e EMEIs).
- **Serviços:**
  - Matrículas e transferências escolares municipais.
  - Transporte escolar gratuito para alunos da zona rural e distritos.
  - Merenda escolar de alta qualidade supervisionada por equipe de nutricionistas.`
  },

  // 10. SECRETARIA DE TURISMO E CULTURA
  {
    id: "secretaria_turismo_cultura",
    category: "Turismo e Cultura",
    keywords: ["secretaria de turismo", "secretaria de cultura", "estancia turistica", "eventos municipais", "pit", "informacoes turisticas"],
    title: "🎭 Secretaria de Turismo e Secretaria de Cultura",
    content: `Promoção cultural e fomento ao turismo:

- **Estância Turística:** Gestão de recursos do DADETUR (Departamento de Apoio ao Desenvolvimento dos Municípios Turísticos) aplicados em melhorias na infraestrutura turística.
- **Atividades:**
  - Organização do Tupã Folia, da EXAPIT, comemorações de aniversário e festividades natalinas.
  - Parcerias de preservação do Museu Índia Vanuíre, Solar Luiz de Souza Leão e patrimônio de Varpa.
  - Oficinas culturais gratuitas de teatro, dança, artesanato e música.`
  },

  // 11. SECRETARIA DE ESPORTES E ESTÁDIO ALONSÃO
  {
    id: "secretaria_esportes_alonsao",
    category: "Esportes e Lazer",
    keywords: ["esportes", "estadio", "alonsao", "alonso carvalho braga", "tupa futebol clube", "ginasio elias kenaifes", "futebol", "escolinhas"],
    title: "⚽ Esportes e Estádio Municipal 'Alonso Carvalho Braga' (Alonsão)",
    content: `Esporte e espaços públicos de Tupã:

- **Estádio Municipal Alonso Carvalho Braga (Alonsão):**
  - Construído em 1942 e batizado em homenagem ao primeiro prefeito de Tupã.
  - Casa oficial do **Tupã Futebol Clube** (o querido *Tricolor da Alta Paulista*).
  - Conta com gramado oficial, arquibancadas, camarotes e iluminação para jogos noturnos.
- **Ginásio Municipal Elias Kenaifes:** Palco de competições regionais de futsal, vôlei, basquete e handebol.
- **Projetos Esportivos:** Escolinhas gratuitas de futebol, artes marciais, atletismo e natação para crianças e jovens.`
  },

  // 12. PAT, BANCO DO POVO E PROCON
  {
    id: "pat_bancodopovo_procon",
    category: "Trabalho e Cidadania",
    keywords: ["pat", "banco do povo", "procon", "vagas de emprego", "carteira de trabalho", "emprestimo", "credito", "defesa do consumidor"],
    title: "💼 PAT (Emprego), Banco do Povo Paulista e Procon Tupã",
    content: `Cidadania, empreendedorismo e direitos do trabalhador:

- **PAT (Posto de Atendimento ao Trabalhador):**
  - Divulgação diária de vagas de emprego abertas no comércio e indústria de Tupã.
  - Habilitação do seguro-desemprego e emissão de Carteira de Trabalho Digital.
- **Banco do Povo Paulista:**
  - Financiamentos e microcrédito produtivo a juros baixos para autônomos, MEIs e microempresas investirem em máquinas, equipamentos e estoque.
- **Procon de Tupã:**
  - Órgão oficial de proteção e defesa do consumidor. Orientações, abertura de reclamações contra empresas e conciliação jurídica.`
  },

  // 13. ZOONOSES, CASTRAÇÃO E VIGILÂNCIA
  {
    id: "zoonoses_castracao",
    category: "Saúde Animal e Zoonoses",
    keywords: ["zoonoses", "castracao", "castracao gratuita", "animais", "cachorro", "gato", "dengue", "escorpiao", "vigilancia epidemiologica"],
    title: "🐾 Controle de Zoonoses, Castração e Vigilância",
    content: `Serviços de saúde pública e proteção animal da Prefeitura:

- **Castração Gratuita de Cães e Gatos:** Programa municipal com agendamento pela Central 1Doc ou no setor de vigilância.
- **Vacinação Antirrábica:** Campanhas de vacinação gratuita anual para cães e gatos em vários pontos da cidade e zona rural.
- **Vigilância Epidemiológica e Combate à Dengue:** Trabalho contínuo dos Agentes de Combate a Endemias nos bairros, bloqueio de criadouros e orientações sobre escorpiões e vetores.`
  },

  // 14. ILUMINAÇÃO PÚBLICA
  {
    id: "iluminacao_publica",
    category: "Serviços Urbanos",
    keywords: ["iluminacao publica", "lampada queimada", "poste apagado", "troca de lampada", "luz da rua", "conserto iluminacao"],
    title: "💡 Iluminação Pública - Solicitação de Reparos",
    content: `Como solicitar troca de lâmpadas de postes e reparos de iluminação em Tupã:

- **Como solicitar:**
  1. Pelo portal de atendimento digital **[tupa.1doc.com.br](https://tupa.1doc.com.br/atendimento)**.
  2. Pelo telefone da Prefeitura: (14) 3404-1000.
- **Informações necessárias:** Nome da rua, número do imóvel em frente ao poste com defeito, bairro e ponto de referência.`
  },

  // 15. OUVIDORIA MUNICIPAL E E-SIC
  {
    id: "ouvidoria_esic",
    category: "Transparência e Ouvidoria",
    keywords: ["ouvidoria", "e-sic", "reclamacao", "denuncia", "elogio", "sugestao", "transparencia", "informacao ao cidadao"],
    title: "📢 Ouvidoria Municipal e Acesso à Informação (e-SIC)",
    content: `Canais de voz e transparência para os moradores de Tupã:

- **Ouvidoria Geral:** Canal para envio de sugestões, reclamações sobre serviços públicos, elogios e denúncias. Abertura pelo portal [tupa.1doc.com.br](https://tupa.1doc.com.br/atendimento) com sigilo garantido.
- **e-SIC (Sistema Eletrônico de Informação ao Cidadão):** Para pedidos formais de documentos, relatórios públicos e prestação de contas, conforme a Lei de Acesso à Informação.`
  },

  // 16. DIÁRIO OFICIAL ELETRÔNICO (DiOE)
  {
    id: "diario_oficial",
    category: "Transparência e Legislação",
    keywords: ["diario oficial", "dioe", "leis municipais", "decretos", "licitacoes", "concurso publico", "atos oficiais"],
    title: "📰 Diário Oficial Eletrônico de Tupã (DiOE)",
    content: `O Diário Oficial é onde são publicadas todas as leis, atos da prefeitura e editais:

- **Onde consultar:** Pelo link oficial no portal [tupa.sp.gov.br](https://www.tupa.sp.gov.br) ou [imprensaoficialmunicipal.com.br/tupa](https://www.imprensaoficialmunicipal.com.br/tupa).
- **Conteúdo Disponível:**
  - Decretos e Leis Complementares sancionadas pelo Prefeito.
  - Editais de concursos públicos e processos seletivos.
  - Avisos de licitações, pregões e compras públicas.
  - Convocação de servidores e prestação de contas fiscais.`
  },

  // --- SEÇÃO HISTÓRIA, CIDADE, TURISMO E ECONOMIA ---

  // 17. HISTÓRIA E FUNDADOR
  {
    id: "historia_fundacao",
    category: "História",
    keywords: ["historia", "fundacao", "fundador", "luiz de souza leao", "1929", "quando foi fundada", "origem", "aniversario", "12 de outubro"],
    title: "🏛️ Fundação e História de Tupã",
    content: `**Tupã** foi fundada em **12 de outubro de 1929** por **Luiz de Souza Leão**:

- **Origem e Planejamento:** Projetada com avenidas largas em malha ortogonal (xadrez) para acompanhar os trilhos da ferrovia.
- **Nome:** Homenagem aos povos indígenas (Kaingang, Krenak e Terena) e ao Deus do Trovão na mitologia Tupi-Guarani.
- **Estância Turística:** Declarada município em 1938 e Estância Turística pelo Governo do Estado de SP em 1997.`
  },

  // 18. RUAS COM NOMES INDÍGENAS
  {
    id: "ruas_indigenas",
    category: "História e Urbanismo",
    keywords: ["ruas", "avenidas", "nomes indigenas", "tamoios", "aimores", "cherentes", "mandaguaris", "nhambiquaras", "coroados", "caingangs", "potiguaras", "guaranis"],
    title: "🏹 As Ruas com Nomes Indígenas de Tupã",
    content: `O fundador Luiz de Souza Leão batizou as ruas centrais de Tupã homenageando tribos e nações indígenas do Brasil:

- **Avenidas:** Avenida Tamoios (o coração comercial) e Avenida Aimorés.
- **Ruas:** Cherentes, Mandaguaris, Nhambiquaras, Coroados, Caingangs, Potiguaras, Guaranis, Goitacazes, Ubirajaras, Timborés, Bororós e Tupinambás.`
  },

  // 19. UNIFADAP
  {
    id: "unifadap_ensino",
    category: "Educação Superior",
    keywords: ["unifadap", "fadap", "fap", "faccat", "faculdade", "universidade", "cursos", "direito", "enfermagem", "psicologia", "veterinaria"],
    title: "🎓 UniFADAP - Centro Universitário da Alta Paulista",
    content: `A **UniFADAP** (FADAP / FAP / Faccat) é a maior e mais tradicional referência de ensino superior privado de Tupã:

- Cursos consagrados: Direito, Enfermagem, Medicina Veterinária, Psicologia, Engenharia Civil, Administração, Pedagogia, Odontologia e Educação Física.
- Campus completo com Hospital Veterinário, Núcleo de Prática Jurídica e clínicas abertas à comunidade.`
  },

  // 20. UNESP CÂMPUS DE TUPÃ
  {
    id: "unesp_tupa",
    category: "Educação Superior Pública",
    keywords: ["unesp", "universidade estadual", "engenharia de biossistemas", "campus tupa", "publica", "agronegocio"],
    title: "🔬 UNESP - Câmpus de Tupã",
    content: `Câmpus da Universidade Estadual Paulista com ensino público e gratuito de alta qualidade:

- Cursos: Administração (ênfase em Agronegócio) e Engenharia de Biossistemas.
- Pós-graduação e mestrado com pesquisas de referência agroindustrial. Endereço: Av. Domingos da Costa Lopes, 780.`
  },

  // 21. ECO THERMAS TUPÃ
  {
    id: "eco_thermas",
    category: "Turismo e Lazer",
    keywords: ["eco thermas", "ecothermas", "parque aquatico", "aguas quentes", "termas", "piscinas", "toboga", "baia do pirata", "chales"],
    title: "🌊 Eco Thermas Tupã - Parque Aquático Termal",
    content: `O principal parque aquático da região:

- Piscinas e toboáguas de águas termais quentes, ofurôs relaxantes e Baía do Pirata para crianças.
- Trilhas em seringais, minifazenda, chalés para hospedagem e restaurante com comida caipira. Localizado na Estrada Tupã ao Bairro São Bento, km 7.`
  },

  // 22. MUSEU ÍNDIA VANUÍRE
  {
    id: "museu_india_vanuire",
    category: "Cultura e História",
    keywords: ["museu", "india vanuire", "indigena", "kaingang", "krenak", "terena", "rua coroados"],
    title: "🏺 Museu Histórico e Pedagógico Índia Vanuíre",
    content: `Referência internacional em acervo etnográfico indígena dos povos Kaingang, Krenak e Terena:

- Entrada gratuita de terça a domingo. Rua Coroados, 521 - Centro de Tupã.`
  },

  // 23. DISTRITO DE VARPA (LETÔNIA)
  {
    id: "distrito_varpa",
    category: "Turismo e Distritos",
    keywords: ["varpa", "letonia", "letoes", "letao", "museu janis erdbergs", "pao preto", "queijo letao", "balneario 7 de setembro"],
    title: "🌾 Distrito de Varpa e a Cultura Letã",
    content: `Colônia fundada em 1922 por imigrantes da Letônia a 25 km do centro:

- Famosa pelo Museu Janis Erdbergs, Balneário 7 de Setembro, pão preto de centeio e queijo letão com cominho.`
  },

  // 24. DISTRITOS DE UNIVERSO E PARNASO
  {
    id: "distritos_universo_parnaso",
    category: "Distritos",
    keywords: ["universo", "parnaso", "distritos", "festa da mandioca"],
    title: "🏡 Distritos de Universo e Parnaso",
    content: `Distritos rurais do município:

- **Universo:** Conhecido pela agricultura e pela tradicional Festa da Mandioca.
- **Parnaso:** Às margens da SP-294, com forte vocação agrícola e fazendas produtoras.`
  },

  // 25. GASTRONOMIA, RESTAURANTES E ÁGUA DOCE
  {
    id: "gastronomia_onde_comer",
    category: "Gastronomia",
    keywords: ["onde comer", "restaurante", "restaurantes", "gastronomia", "agua doce", "museu da cachaca", "lanches", "ki-pao", "japonesa"],
    title: "🍽️ Onde Comer e Gastronomia em Tupã",
    content: `Destaques gastronômicos:

- **Água Doce Cachaçaria & Museu da Cachaça:** Rua México, Jardim América.
- **Lanches e Espetinhos:** Trailers e lanchonetes tradicionais na Avenida Tamoios e Praça da Bandeira.
- **Comida de Varpa:** Cafés coloniais e confeitarias rurais com receitas da Letônia.`
  },

  // 26. ECONOMIA: AMENDOIM E AGRONEGÓCIO
  {
    id: "economia_amendoim",
    category: "Economia e Produção",
    keywords: ["economia", "amendoim", "capital do amendoim", "agronegocio", "cana de acucar", "avicultura"],
    title: "🥜 Capital Nacional do Amendoim e Agronegócio",
    content: `Tupã é líder no cultivo, beneficiamento e exportação de amendoim do Brasil, além de polo em cana-de-açúcar, grãos e comércio regional.`
  },

  // 27. EXAPIT E EVENTOS
  {
    id: "exapit_eventos",
    category: "Eventos e Festas",
    keywords: ["exapit", "eventos", "festa", "rodeio", "shows", "recinto de exposicoes", "tupa folia", "sao pedro"],
    title: "🎪 EXAPIT e Grandes Eventos de Tupã",
    content: `Grandes celebrações de Tupã:

- **EXAPIT:** Realizada em agosto no Recinto Octávio Barros Castanheira com shows nacionais e rodeio.
- **Festa de São Pedro:** Quermesse de 29 de junho na Praça da Matriz.
- **Tupã Folia:** Carnaval de rua gratuito na Avenida Tamoios.`
  },

  // 28. HOSPITAIS E EMERGÊNCIAS
  {
    id: "saude_hospitais",
    category: "Saúde e Telefones",
    keywords: ["saude", "hospital", "santa casa", "hospital sao francisco", "upa", "ame", "samu", "192", "bombeiros", "193", "policia", "190"],
    title: "🏥 Saúde e Telefones de Emergência",
    content: `Atendimento médico e números de emergência:

- **Santa Casa de Tupã:** Atendimento regional de urgência e alta complexidade.
- **Hospital São Francisco e UPA 24 Horas.**
- **Telefones Gratuitos:** SAMU 192 | Bombeiros 193 | PM 190 | Guarda Municipal (14) 3496-3380.`
  },

  // 29. DADOS GERAIS, POPULAÇÃO E LOCALIZAÇÃO
  {
    id: "dados_gerais",
    category: "Geografia e Dados",
    keywords: ["populacao", "habitantes", "onde fica", "localizacao", "cep", "ddd", "clima"],
    title: "📍 Geografia, População e Dados Gerais de Tupã",
    content: `População de ~65.000 habitantes, DDD (14), CEP 17600-000, altitude 510m, localizada na Alta Paulista a cerca de 514 km de São Paulo via SP-294.`
  }
];

// Mecanismo inteligente e veloz de busca local
function findLocalKnowledge(query) {
  if (!query || typeof query !== "string") return null;

  const clean = (str) =>
    str.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .trim();

  const cleanQuery = clean(query);

  const stopWords = new Set([
    "qual", "onde", "como", "quem", "quando", "porque", "por", "que", "para", "tem",
    "existe", "sobre", "tupa", "cidade", "fica", "fazer", "saber", "me", "diga", "fale"
  ]);

  const queryWords = cleanQuery.split(/\s+/).filter(w => w.length >= 3 && !stopWords.has(w));

  let bestEntry = null;
  let highestScore = 0;

  for (const entry of TUPA_LOCAL_DATABASE) {
    let score = 0;

    // 1. Palavras-chave diretas (peso = 10)
    for (const kw of entry.keywords) {
      const cleanKw = clean(kw);
      if (cleanQuery.includes(cleanKw)) {
        score += 10;
      }
    }

    // 2. Título ou Categoria (peso = 6)
    const cleanTitle = clean(entry.title + " " + entry.category);
    for (const word of queryWords) {
      if (cleanTitle.includes(word)) {
        score += 6;
      }
    }

    // 3. Conteúdo (peso = 2)
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

  return highestScore >= 6 ? bestEntry : null;
}
