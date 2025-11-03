// --- INÍCIO DO SCRIPT DA RECEITA 6 ---
console.log("Script da Receita 6 carregado!");

// --- DADOS DA APLICAÇÃO (Conceito: Arrays e Objetos) ---
// Em vez de ter o conteúdo no HTML, nós o definimos em uma estrutura de dados.
// Isso separa os dados da apresentação, tornando o código mais limpo e escalável.
const articles = [
  {
    title: "Flexbox ainda é essencial?",
    text: "Sim! Flexbox e Grid são ferramentas complementares. Use Flexbox para componentes e Grid para o layout geral da página."
  },
  {
    title: "O futuro das Variáveis CSS",
    text: "As variáveis CSS, ou Custom Properties, estão se tornando a base para sistemas de design escaláveis e temas dinâmicos na web."
  },
  {
    title: "HTML Semântico e SEO",
    text: "Usar tags HTML semânticas como <article> e <nav> não só melhora a acessibilidade, mas também impulsiona o ranking do seu site nos motores de busca."
  },
  {
    title: "O que são Web Components?",
    text: "Web Components são um conjunto de tecnologias que permitem criar elementos HTML reutilizáveis e encapsulados, com seu próprio estilo e comportamento."
  }
];

// --- SELEÇÃO DE ELEMENTOS GLOBAIS ---
const body = document.body;
const themeToggleButton = document.getElementById('theme-toggle');
const mainTitle = document.getElementById('main-title');
const mainText = document.getElementById('main-text');
const sidebarUl = document.getElementById('sidebar-list');

// --- FUNCIONALIDADE 1: MODO ESCURO COM PERSISTÊNCIA (localStorage) ---

// Função genérica para aplicar um tema
function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

// Função que é chamada ao clicar no botão
function toggleTheme() {
  // A lógica de alternância continua a mesma
  body.classList.toggle('dark-mode');
  
  // Agora, salvamos a preferência no localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    console.log("Tema salvo como escuro.");
  } else {
    localStorage.setItem('theme', 'light');
    console.log("Tema salvo como claro.");
  }
}

// Ouvinte de evento para o botão
themeToggleButton.addEventListener('click', toggleTheme);

// --- FUNCIONALIDADE 2: CONTEÚDO GERADO DINAMICAMENTE ---

// Função que cria os links na barra lateral a partir do array 'articles'
function populateSidebar() {
  sidebarUl.innerHTML = ''; // Limpa a lista para garantir que está vazia

  articles.forEach((article, index) => {
    // 1. CRIAR ELEMENTOS (createElement)
    const li = document.createElement('li');
    const a = document.createElement('a');

    // 2. CONFIGURAR ELEMENTOS
    a.textContent = article.title;
    a.href = '#';
    a.dataset.index = index; // Usamos um índice para saber qual artigo foi clicado

    // Adiciona o ouvinte de evento diretamente ao link criado
    a.addEventListener('click', updateContent);

    // 3. ANINHAR ELEMENTOS (appendChild)
    li.appendChild(a);

    // 4. ADICIONAR AO DOM
    sidebarUl.appendChild(li);
  });
  console.log("Barra lateral populada dinamicamente.");
}

// Função que atualiza o conteúdo principal ao clicar em um link
function updateContent(event) {
  event.preventDefault();
  
  const clickedLink = event.target;
  const articleIndex = clickedLink.dataset.index;
  
  // Pega o artigo correspondente do nosso array de dados
  const selectedArticle = articles[articleIndex];
  
  // Atualiza o conteúdo na página
  mainTitle.textContent = selectedArticle.title;
  mainText.textContent = selectedArticle.text;
  
  console.log(`Conteúdo atualizado para o artigo de índice ${articleIndex}.`);
}

// --- INICIALIZAÇÃO DA PÁGINA ---
// Função que roda assim que o script é carregado
function initializePage() {
    // 1. Verifica e aplica o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
        console.log(`Tema salvo (${savedTheme}) foi aplicado.`);
    }

    // 2. Popula a barra lateral com as notícias
    populateSidebar();

    // 3. Define o conteúdo inicial para ser o do primeiro artigo
    mainTitle.textContent = articles[0].title;
    mainText.textContent = articles[0].text;
}

// Executa a função de inicialização
initializePage();

