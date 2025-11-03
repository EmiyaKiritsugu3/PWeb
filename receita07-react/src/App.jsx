import React, { useState, useEffect } from 'react';

// --- Dados das Notícias (antes no script.js, agora aqui) ---
const articlesData = [
    {
        id: 1,
        title: "React Domina o Desenvolvimento Web",
        content: "O React, biblioteca JavaScript para criar interfaces de utilizador, continua a ser a escolha dominante entre developers. A sua abordagem baseada em componentes e o ecossistema robusto tornam-no ideal para SPAs (Single Page Applications)."
    },
    {
        id: 2,
        title: "O que são Hooks? Entenda o useState",
        content: "Os Hooks, introduzidos no React 16.8, revolucionaram a forma como escrevemos componentes. O `useState` permite adicionar estado a componentes funcionais, eliminando a necessidade de classes na maioria dos casos."
    },
    {
        id: 3,
        title: "useEffect: Lidando com Efeitos Secundários",
        content: "O Hook `useEffect` serve para executar 'efeitos secundários' (side effects). Isto inclui buscar dados de APIs, subscrever eventos, ou manipular o DOM diretamente, como fizemos para guardar o tema no localStorage."
    }
];

// --- Componente: Header ---
function Header({ theme, onToggleTheme }) {
    return (
        <header className="header">
            <h1>Portal PWeb News</h1>
            <button onClick={onToggleTheme} className="theme-toggle">
                {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
            </button>
        </header>
    );
}

// --- Componente: Navbar ---
function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#react">React</a>
            <a href="#javascript">JavaScript</a>
            <a href="#css">CSS</a>
        </nav>
    );
}

// --- Componente: MainContent ---
function MainContent({ article }) {
    // Se nenhum artigo for encontrado (estado inicial), mostra uma mensagem
    if (!article) {
        return <main className="main-content"><p>Selecione um artigo para ler.</p></main>;
    }

    return (
        <main className="main-content">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </main>
    );
}

// --- Componente: Sidebar ---
function Sidebar({ articles, onSelectArticle }) {
    return (
        <aside className="sidebar">
            <h3>Últimas Notícias</h3>
            <ul>
                {/* Usamos .map() para transformar o array de dados
                  em um array de elementos JSX (uma lista) 
                */}
                {articles.map(article => (
                    <li key={article.id}>
                        <button onClick={() => onSelectArticle(article)}>
                            {article.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

// --- Componente: Footer ---
function Footer() {
    return (
        <footer className="footer">
            <p>PWeb News - Receita 7 (React) &copy; 2025</p>
        </footer>
    );
}


// --- Componente Principal: App ---
// Este componente gere todo o estado e orquestra os outros componentes
function App() {
    
    // --- ESTADO (State) ---
    // Estado para o artigo selecionado
    const [selectedArticle, setSelectedArticle] = useState(articlesData[0]);
    
    // Estado para o tema, lendo o valor inicial do localStorage
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    // --- EFEITOS (Effects) ---
    // Este `useEffect` corre sempre que o estado `theme` muda
    useEffect(() => {
        // 1. Atualiza o localStorage com o novo tema
        localStorage.setItem('theme', theme);
        // 2. Adiciona/remove a classe no body (ou no container principal)
        // No nosso caso, vamos aplicar ao container principal
    }, [theme]); // O array de dependências faz este efeito correr apenas quando `theme` muda

    // --- Funções de Manipulação (Handlers) ---
    function handleArticleSelect(article) {
        setSelectedArticle(article);
    }

    function handleThemeToggle() {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    }

    // --- Renderização do JSX ---
    return (
        // A classe do container muda dinamicamente com o estado do tema
        <div className={`grid-container ${theme}`}>
            <Header theme={theme} onToggleTheme={handleThemeToggle} />
            <Navbar />
            <Sidebar articles={articlesData} onSelectArticle={handleArticleSelect} />
            <MainContent article={selectedArticle} />
            <Footer />
        </div>
    );
}

export default App;

