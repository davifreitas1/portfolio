// =============================================================================
// CONTEUDO CENTRAL DO PORTFOLIO
// -----------------------------------------------------------------------------
// Este e o unico arquivo que voce precisa editar para atualizar textos, links
// e projetos. Nada de mexer nos componentes. Procure por "EDITAR" para achar
// os pontos que exigem a sua informacao (links de LinkedIn, GitHub, etc.).
// =============================================================================

import fotoPerfil from '../assets/foto-perfil.jpg'
import toakiLogo from '../assets/projetos/toaki-logo.jpeg'
import toakiTela1 from '../assets/projetos/toaki-tela1.jpeg'
import toakiTela2 from '../assets/projetos/toaki-tela2.jpeg'
import dashboard1 from '../assets/projetos/dashboard-pag1.png'
import dashboard2 from '../assets/projetos/dashboard-pag2.png'

export const profile = {
  nome: 'Davi Freitas',
  cargo: 'Desenvolvedor Full-Stack & Analista de Dados',
  localizacao: 'Recife, Pernambuco',
  fotoPerfil,
  // Texto de apresentacao do topo (hero). Direto e especifico: diz o que faz e
  // com o que faz, sem frase de efeito.
  subheadline:
    'Construo aplicações web com React, Node.js e Django e transformo dados em decisão com Power BI. Antes de escrever código, entendo o problema de negócio por trás dele.',
}

// -----------------------------------------------------------------------------
// LINKS / CONTATO  --  EDITAR: cole aqui suas URLs reais
// -----------------------------------------------------------------------------
export const contact = {
  email: 'davivarejao@gmail.com', // EDITAR se quiser outro e-mail publico
  linkedin: 'https://www.linkedin.com/in/dvfreitas/',
  github: 'https://github.com/davifreitas1',
  // Opcional: WhatsApp com codigo do pais. Deixe string vazia para ocultar.
  whatsapp: '', // ex.: 'https://wa.me/5581999999999'
  cta: 'Estou aberto a projetos e parcerias. Se o que voce viu fez sentido, é só chamar.',
  // Assunto e corpo que ja vem preenchidos ao clicar em "Enviar e-mail".
  emailAssunto: 'Contato via portfolio',
  emailCorpo: 'Olá, Davi!\n\nVi o seu portfólio e gostaria de conversar sobre ',
}

// Monta um link mailto com assunto e corpo ja preenchidos. Ao clicar, abre o
// cliente de e-mail do visitante com a mensagem pronta, so falta enviar.
export function mailtoLink() {
  const assunto = encodeURIComponent(contact.emailAssunto)
  const corpo = encodeURIComponent(contact.emailCorpo)
  return `mailto:${contact.email}?subject=${assunto}&body=${corpo}`
}

// -----------------------------------------------------------------------------
// SOBRE
// -----------------------------------------------------------------------------
export const about = {
  titulo: 'Sobre mim',
  paragrafos: [
    'Tenho 25 anos e sou de Recife. Cheguei a programação pelo caminho menos óbvio: comecei como assistente administrativo em um escritório de contabilidade e, em paralelo, cursei Programador de Sistemas e em Power BI Avançado.',
    'Essa origem virou meu diferencial. Antes de abrir o editor de codigo, eu entendo o problema de negocio por trás da tarefa, seja um fluxo financeiro, uma meta de vendas ou um indicador que precisa fechar no fim do mês. Isso me ajuda a construir a solução certa, e não apenas a solucão que foi pedida.',
    'Hoje atuo como desenvolvedor full-stack e analista de dados, e participo de um processo de pré-incubação com um grupo que quer transformar um projeto de tecnologia em uma startup.',
  ],
  // Fatos escaneaveis para o recrutador (substituem metricas infladas).
  resumo: [
    { rotulo: 'Foco', valor: 'Desenvolvimento full-stack e análise de dados' },
    { rotulo: 'Stack principal', valor: 'React, Node.js, Django, Power BI' },
    { rotulo: 'Diferencial', valor: 'Base em contabilidade e visao de negócio' },
    { rotulo: 'Disponibilidade', valor: 'Aberto a oportunidades e projetos' },
  ],
}

// -----------------------------------------------------------------------------
// COMPETENCIAS / STACKS  (foco no que e tecnico)
// -----------------------------------------------------------------------------
export const skills = {
  titulo: 'Competências & Stacks',
  subtitulo: 'As tecnologias que uso no dia a dia, do frontend ao backend e à análise de dados.',
  grupos: [
    {
      nome: 'Frontend',
      icone: 'Code2',
      itens: ['React', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'],
    },
    {
      nome: 'Backend',
      icone: 'Server',
      itens: ['Node.js', 'NestJS', 'Python', 'Django', 'GeoDjango'],
    },
    {
      nome: 'Dados & BI',
      icone: 'BarChart3',
      itens: ['Power BI', 'Power Query', 'Modelagem de dados', 'DAX', 'Dashboards'],
    },
    {
      nome: 'DevOps & Ferramentas',
      icone: 'Boxes',
      itens: ['Docker', 'Git', 'APIs & Integrações'],
    },
  ],
  // Diferenciais mencionados de forma discreta, sem competir com as stacks.
  diferencial:
    'Além do stack técnico, trago base sólida em contabilidade e finanças e ja liderei projetos em equipe, o que me faz entender o negócio, e não só o código.',
}

// -----------------------------------------------------------------------------
// PROJETOS  --  EDITAR: adicione links (repositorio/demo) quando tiver
// -----------------------------------------------------------------------------
export const projects = {
  titulo: 'Projetos',
  subtitulo: 'Trabalhos em que atuei de ponta a ponta, da aplicação ao dashboard.',
  itens: [
    {
      nome: 'ToAki',
      tipo: 'Aplicativo - Geolocalização',
      resumo:
        'Plataforma que conecta vendedores ambulantes da praia a clientes por geolocalizacao. Estruturei toda a comunicação entre usuário, servidor e vendedor e desenvolvi a interface do aplicativo.',
      papel: 'Desenvolvimento full-stack e UI',
      tags: ['Geolocalizacao', 'Frontend', 'Backend', 'UX/UI'],
      logo: toakiLogo,
      imagens: [toakiTela1, toakiTela2],
      links: {
        // EDITAR: preencha quando tiver. Deixe vazio para ocultar o botao.
        demo: '',
        repo: 'https://github.com/davifreitas1/toaki_app',
      },
    },
    {
      nome: 'Dashboard Financeiro de Leads',
      tipo: 'Analise de Dados - BI',
      resumo:
        'Painel de análise de leads que reuniu faturamento, oportunidades perdidas e ganhas e as comparou com as metas da empresa, dando ao time de vendas leitura clara de onde agir.',
      papel: 'Analise de dados e visualizacao',
      tags: ['Power BI', 'KPIs', 'Vendas', 'Metas'],
      logo: null,
      imagens: [dashboard1, dashboard2],
      links: {
        demo: '',
        repo: '',
      },
    },
  ],
}

// -----------------------------------------------------------------------------
// DESTAQUES  (poucas conquistas de peso, sem linha do tempo maçante)
// -----------------------------------------------------------------------------
export const highlights = {
  titulo: 'Destaques',
  subtitulo: 'Marcos importantes da minha história',
  itens: [
    {
      icone: 'Trophy',
      titulo: '3o lugar no Hackathon Cidades Inteligentes',
      descricao:
        'Desenvolvi, sob pressão de tempo e em equipe, uma solução voltada a cidades inteligentes que ficou entre as três melhores da competição.',
    },
    {
      icone: 'Users',
      titulo: 'Liderança no Projeto Integrador',
      descricao:
        'Coordenei o time do curso de Programador de Sistemas, conduzindo o projeto do conceito até a entrega final.',
    },
    {
      icone: 'Rocket',
      titulo: 'Startup em pre-incubação',
      descricao:
        'Participo, com um grupo, de um processo de pré-incubação para transformar um projeto de tecnologia em produto.',
    },
  ],
}

// Navegacao (ancoras da pagina)
export const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Competencias', href: '#competencias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Contato', href: '#contato' },
]
