<<<<<<< HEAD
// --- INÍCIO DO SCRIPT DA RECEITA 5 ---

// O console.log é nosso melhor amigo para depuração (Exercício 1)
console.log("Script carregado com sucesso!");

// --- FUNCIONALIDADE 1: MODO ESCURO ---

// 1. SELECIONAR ELEMENTOS (DOM - Exercício 2)
// Elementos a serem manipulados: o botão e o body.
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 2. CRIAR UMA FUNÇÃO (Exercício 3)
// Esta função será responsável por alternar o tema.
function toggleTheme() {
  // A função classList.toggle é uma forma eficiente
  // de adicionar a classe se ela não existir, ou removê-la se já existir.
  body.classList.toggle('dark-mode');
  
  // Usamos o console para verificar o que está acontecendo.
  if (body.classList.contains('dark-mode')) {
    console.log("Tema alterado para Modo Escuro.");
  } else {
    console.log("Tema alterado para Modo Claro.");
  }
}

// 3. RESPONDER A EVENTOS (Exercício 3)
// Adicão de um "ouvinte de evento" de clique ao botão.
// Quando o botão for clicado, a função toggleTheme será executada.
themeToggleButton.addEventListener('click', toggleTheme);


// --- FUNCIONALIDADE 2: CONTEÚDO DINÂMICO ---

// 1. SELECIONAR ELEMENTOS
const mainTitle = document.getElementById('main-title');
const mainText = document.getElementById('main-text');
// querySelectorAll seleciona TODOS os elementos que correspondem ao seletor.
const sidebarLinks = document.querySelectorAll('.sidebar a');

// 2. CRIAR UMA FUNÇÃO PARA ATUALIZAR O CONTEÚDO
// Esta função recebe um evento (o clique) como argumento.
function updateContent(event) {
  // event.preventDefault() impede o comportamento padrão do link (que seria recarregar a página).
  event.preventDefault(); 
  
  // event.target se refere ao elemento exato que foi clicado (o link <a>).
  const clickedLink = event.target;
  
  // Pegamos os valores dos atributos data-* que definimos no HTML.
  const newTitle = clickedLink.dataset.title;
  const newText = clickedLink.dataset.text;
  
  // 3. MANIPULAR O CONTEÚDO (Exercício 2)
  // Atualizamos o texto do título e do parágrafo principal.
  mainTitle.textContent = newTitle;
  mainText.textContent = newText;
  
  console.log(`Conteúdo atualizado para: "${newTitle}"`);
}

// 4. ADICIONAR OUVINTES DE EVENTOS A TODOS OS LINKS
// Usamos um loop forEach para adicionar um event listener a cada link da barra lateral.
sidebarLinks.forEach(function(link) {
  link.addEventListener('click', updateContent);
});

// --- FIM DO SCRIPT ---
=======
// --- INÍCIO DO SCRIPT DA RECEITA 5 ---

// O console.log é nosso melhor amigo para depuração (Exercício 1)
console.log("Script carregado com sucesso!");

// --- FUNCIONALIDADE 1: MODO ESCURO ---

// 1. SELECIONAR ELEMENTOS (DOM - Exercício 2)
// Elementos a serem manipulados: o botão e o body.
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 2. CRIAR UMA FUNÇÃO (Exercício 3)
// Esta função será responsável por alternar o tema.
function toggleTheme() {
  // A função classList.toggle é uma forma eficiente
  // de adicionar a classe se ela não existir, ou removê-la se já existir.
  body.classList.toggle('dark-mode');
  
  // Usamos o console para verificar o que está acontecendo.
  if (body.classList.contains('dark-mode')) {
    console.log("Tema alterado para Modo Escuro.");
  } else {
    console.log("Tema alterado para Modo Claro.");
  }
}

// 3. RESPONDER A EVENTOS (Exercício 3)
// Adicão de um "ouvinte de evento" de clique ao botão.
// Quando o botão for clicado, a função toggleTheme será executada.
themeToggleButton.addEventListener('click', toggleTheme);


// --- FUNCIONALIDADE 2: CONTEÚDO DINÂMICO ---

// 1. SELECIONAR ELEMENTOS
const mainTitle = document.getElementById('main-title');
const mainText = document.getElementById('main-text');
// querySelectorAll seleciona TODOS os elementos que correspondem ao seletor.
const sidebarLinks = document.querySelectorAll('.sidebar a');

// 2. CRIAR UMA FUNÇÃO PARA ATUALIZAR O CONTEÚDO
// Esta função recebe um evento (o clique) como argumento.
function updateContent(event) {
  // event.preventDefault() impede o comportamento padrão do link (que seria recarregar a página).
  event.preventDefault(); 
  
  // event.target se refere ao elemento exato que foi clicado (o link <a>).
  const clickedLink = event.target;
  
  // Pegamos os valores dos atributos data-* que definimos no HTML.
  const newTitle = clickedLink.dataset.title;
  const newText = clickedLink.dataset.text;
  
  // 3. MANIPULAR O CONTEÚDO (Exercício 2)
  // Atualizamos o texto do título e do parágrafo principal.
  mainTitle.textContent = newTitle;
  mainText.textContent = newText;
  
  console.log(`Conteúdo atualizado para: "${newTitle}"`);
}

// 4. ADICIONAR OUVINTES DE EVENTOS A TODOS OS LINKS
// Usamos um loop forEach para adicionar um event listener a cada link da barra lateral.
sidebarLinks.forEach(function(link) {
  link.addEventListener('click', updateContent);
});

// --- FIM DO SCRIPT ---
>>>>>>> e5eb0bebbbef3e07b1aa152fe1ae503c4ffd08f3
