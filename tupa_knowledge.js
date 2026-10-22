// Base de Conhecimento e Prompt Especialista sobre Tupã - SP
// Desenvolvido para o projeto TupãIA

const TUPA_SYSTEM_PROMPT = `Você é o "TupãIA", uma inteligência artificial especialista na cidade de Tupã, município do interior do estado de São Paulo (região da Alta Paulista / Centro-Oeste Paulista).
Seu objetivo é ser a maior referência e assistente sobre tudo relacionado a Tupã: história, turismo, cultura, instituições de ensino (como UniFADAP e UNESP), economia, distritos, serviços e personalidades locais.

Diretrizes de resposta:
- Responda em português com tom acolhedor, conhecedor, simpático e orgulhoso da cultura tupãense e paulista.
- Seja preciso com datas históricas, nomes de pontos turísticos, instituições e tradições locais.
- Formate suas respostas com markdown limpo (tópicos, negrito e seções) para facilitar a leitura.
- Se perguntado sobre assuntos fora de Tupã, responda com gentileza, mas sempre que possível faça um paralelo interessante ou mencione a conexão com a cidade.

Informações-chave essenciais sobre Tupã - SP que você domina profundamente:
1. Fundação e História:
   - Fundada em 12 de outubro de 1929 por Luiz de Souza Leão.
   - Planejada com traçado em malha ortogonal (tabuleiro de xadrez) com largas avenidas, inspirada em cidades modernas.
   - Nome: "Tupã", em referência ao Deus do Trovão na mitologia Tupi-Guarani, honrando os povos indígenas que habitavam a região da Alta Paulista.
   - Emancipada politicamente em 1938. Declarada Estância Turística pelo governo do Estado de São Paulo em 1997.
   - Padroeiro: São Pedro (Festa do Padroeiro celebrada em 29 de junho na Praça da Matriz).

2. Educação e Ensino Superior:
   - UniFADAP (Centro Universitário FADAP / FAP / Faccat): Uma das mais tradicionais instituições de ensino superior da Alta Paulista, polo de formação em Direito, Administração, Enfermagem, Engenharia, Psicologia, Pedagogia e diversas áreas.
   - UNESP (Universidade Estadual Paulista - Câmpus de Tupã): Câmpus de excelência acadêmica, oferecendo cursos como Administração (com ênfase em Agronegócio), Engenharia de Biossistemas e pós-graduação.
   - ETEC Prof. Massuyuki Kawano e FATEC: Cursos técnicos e superiores de tecnologia reconhecidos pela formação prática.

3. Patrimônio Cultural, Museus e Turismo:
   - Museu Histórico e Pedagógico Índia Vanuíre: Referência nacional e latino-americana em acervo etnográfico indígena (especialmente dos povos Kaingang, Krenak e Terena) e memória dos pioneiros da Alta Paulista.
   - Solar Luiz de Souza Leão: Antiga residência do fundador da cidade, cercada por uma reserva florestal nativa urbana (Bosque da Cidade), tombada pelo patrimônio histórico.
   - Praça da Bandeira: O coração cívico e de lazer da cidade, com seu lago central, fontes luminosas, playground e eventos populares.
   - Igreja Matriz de São Pedro: Majestosa construção religiosa em frente à Praça da Bandeira.

4. Distritos do Município:
   - Varpa: Distrito de colonização letã (imigrantes da Letônia que chegaram nos anos 1920). Famoso pelo Museu Janis Erdbergs, artesanato, apicultura e rica gastronomia letã (pães, biscoitos, tortas artesanais e o famoso queijo letão). Destino de turismo rural e ecoturismo (Balneário 7 de Setembro).
   - Universo: Distrito rural tradicional com forte produção agrícola e festividades comunitárias.
   - Parnaso: Distrito que liga a tradição rural e a produção agropecuária do município.

5. Economia e Agronegócio:
   - Conhecida como uma das capitais do amendoim no Brasil, com forte presença de cooperativas e indústrias de processamento e exportação.
   - Destaque também na avicultura (região próxima à capital nacional do ovo, Bastos), cana-de-açúcar, pecuária de corte/leite, milho e café.
   - Setor de comércio, prestação de serviços e serviços médicos da Alta Paulista.

6. Saúde e Serviços Públicos:
   - Santa Casa de Misericórdia de Tupã e Hospital São Francisco.
   - UPA (Unidade de Pronto Atendimento), unidades de PSF, Centro de Saúde.
   - Prefeitura da Estância Turística de Tupã (Palácio das Nações).
`;

const TUPA_LOCAL_DATABASE = [
  {
    category: "História",
    keywords: ["fundação", "fundador", "historia", "história", "luiz de souza leão", "1929", "origem", "quando foi fundada"],
    title: "🏛️ Fundação e História de Tupã",
    content: `**Tupã** foi fundada em **12 de outubro de 1929** pelo desbravador **Luiz de Souza Leão**.
    
A cidade foi minuciosamente planejada com ruas e avenidas largas dispostas em formato de xadrez (malha ortogonal). O nome *Tupã* presta homenagem ao Deus do Trovão na mitologia Tupi-Guarani e honra as etnias indígenas originárias (Kaingang, Krenak e Terena) que viviam na região.

Em 1938, Tupã conquistou sua emancipação político-administrativa e, em **1997**, foi oficialmente reconhecida como **Estância Turística** pelo Estado de São Paulo.`
  },
  {
    category: "Educação",
    keywords: ["unifadap", "fadap", "fap", "faccat", "faculdade", "universidade", "cursos superiores", "estudos"],
    title: "🎓 UniFADAP - Centro Universitário da Alta Paulista",
    content: `A **UniFADAP** (FADAP / FAP / Faccat) é uma das maiores e mais tradicionais instituições de ensino superior do interior paulista, sediada em Tupã.

Destaques da UniFADAP:
- **Tradição e Excelência:** Formou gerações de advogados, gestores, profissionais de saúde, engenheiros e educadores de toda a Alta Paulista e estados vizinhos.
- **Cursos renomados:** Direito, Administração, Psicologia, Enfermagem, Engenharia Civil, Pedagogia, Educação Física, Ciências Contábeis, entre outros.
- **Infraestrutura moderna:** Amplo campus com laboratórios de ponta, biblioteca universitária, clínicas e complexo esportivo.`
  },
  {
    category: "Educação Pública",
    keywords: ["unesp", "universidade estadual", "engenharia de biossistemas", "campus tupã"],
    title: "🔬 UNESP - Câmpus de Tupã",
    content: `A **UNESP (Universidade Estadual Paulista)** possui um câmpus avançado em Tupã, fundado no início dos anos 2000.

- **Cursos de Graduação:** Administração (com forte foco no Agronegócio) e Engenharia de Biossistemas.
- **Pós-Graduação e Pesquisa:** Programas de mestrado e pesquisas pioneiras em sustentabilidade, agrotecnologia e biomateriais.`
  },
  {
    category: "Cultura e Museus",
    keywords: ["museu", "índia vanuíre", "india vanuire", "indígena", "kaingang", "krenak", "terena", "cultura"],
    title: "🏺 Museu Histórico e Pedagógico Índia Vanuíre",
    content: `O **Museu Índia Vanuíre** é um dos museus mais importantes da América Latina dedicados à cultura e memória dos povos indígenas.

- **Acervo Único:** Preserva peças etnográficas, vestimentas, artesanatos e armas das etnias Kaingang, Krenak e Terena, além da história da ocupação da Alta Paulista.
- **Gestão:** Administrado pela organização social ACAM Portinari em parceria com a Secretaria da Cultura, Economia e Indústria Criativas do Estado de São Paulo.
- **Endereço:** Rua Coroados, 521 - Centro de Tupã.`
  },
  {
    category: "Turismo e Distritos",
    keywords: ["varpa", "letônia", "letão", "letões", "museu janis", "balneário", "artesanato letão"],
    title: "🌾 Distrito de Varpa e a Cultura Letã",
    content: `**Varpa** é um dos destinos turísticos mais singulares do estado de São Paulo, colonizado a partir de 1922 por pioneiros imigrantes da **Letônia**.

Atrações imperdíveis em Varpa:
- **Museu Janis Erdbergs:** Guarda o acervo, ferramentas e memórias dos imigrantes letões.
- **Gastronomia Típica:** Pães artesanais pretos de centeio, queijo letão com cominho, tortas e biscoitos tradicionais.
- **Balneário 7 de Setembro:** Área de lazer natural para banho, camping e contato com a natureza.
- **Clima Europeu no Interior:** Arquitetura rústica de madeira e tranquilidade rural.`
  },
  {
    category: "Turismo Urbano",
    keywords: ["praça da bandeira", "igreja matriz", "solar luiz de souza leão", "pontos turísticos", "passeios"],
    title: "🌳 Principais Pontos Turísticos de Tupã",
    content: `Quando visitar Tupã, não deixe de conhecer:
1. **Praça da Bandeira:** Grande cartão postal no centro, com espelho d'água, fonte luminosa e eventos ao ar livre.
2. **Igreja Matriz de São Pedro:** Bela basílica localizada em frente à Praça da Bandeira, marco da fé católica local.
3. **Solar Luiz de Souza Leão:** Antiga casa do fundador, museu histórico e bosque com árvores nativas preservadas.
4. **Pista de Cooper da Avenida dos Universitários:** Ponto favorito de caminhadas e esportes.`
  },
  {
    category: "Economia",
    keywords: ["economia", "amendoim", "agricultura", "agronegócio", "indústria", "comércio"],
    title: "🥜 Economia e Agronegócio",
    content: `Tupã é um gigante do agronegócio paulista:
- **Capital do Amendoim:** É uma das principais produtoras e exportadoras de amendoim do Brasil, sediando indústrias e cooperativas de processamento de alto nível.
- **Diversificação:** Forte presença da cultura da cana-de-açúcar, grãos (soja, milho), café, gado de corte e produção leiteira.
- **Polo de Serviços:** Centro de compras e serviços para cidades vizinhas como Arco-Íris, Herculândia, Quintana, Iacri e Bastos.`
  }
];

// Busca simples na base de conhecimento local
function findLocalKnowledge(query) {
  const normalized = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const words = normalized.split(/\s+/).filter(w => w.length > 2);

  let bestMatch = null;
  let maxScore = 0;

  for (const entry of TUPA_LOCAL_DATABASE) {
    let score = 0;
    for (const kw of entry.keywords) {
      const normKw = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (normalized.includes(normKw)) {
        score += 3;
      }
    }
    for (const w of words) {
      const entryText = (entry.title + " " + entry.content).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (entryText.includes(w)) {
        score += 1;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = entry;
    }
  }

  return maxScore >= 2 ? bestMatch : null;
}
