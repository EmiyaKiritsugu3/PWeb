import React, { useState, useEffect } from 'react';

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

// --- Componente: MainContent (Atualizado para Receita 8) ---
// Agora recebe 'isLoading' para mostrar feedback
function MainContent({ article, isLoading }) {
    
    // Se estiver a carregar, mostra uma mensagem
    if (isLoading) {
        return <main className="main-content"><p>A carregar artigo...</p></main>;
    }
    
    // Se não houver artigo (após o carregamento), mostra outra mensagem
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

// --- Componente: Sidebar (Atualizado para Receita 8) ---
// Agora recebe 'isLoading' para mostrar feedback
function Sidebar({ articles, onSelectArticle, isLoading }) {
    return (
        <aside className="sidebar">
            <h3>Últimas Notícias</h3>
            
            {/* Se estiver a carregar, mostra uma mensagem */}
            {isLoading ? (
                <p>A carregar notícias...</p>
            ) : (
                /* Caso contrário, renderiza a lista de notícias */
                <ul>
                    {articles.map(article => (
                        <li key={article.id}>
                            <button onClick={() => onSelectArticle(article)}>
                                {article.title}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
}

// --- Componente: Footer (Atualizado para Receita 8) ---
function Footer() {
    return (
        <footer className="footer">
            <p>PWeb News - Receita 8 (APIs) &copy; 2025</p>
        </footer>
    );
}


// --- Componente Principal: App (Atualizado para Receita 8) ---
function App() {
    
    // --- ESTADO (State) ---
    // Os artigos agora começam como um array vazio
    const [articles, setArticles] = useState([]);
    // O artigo selecionado começa como nulo
    const [selectedArticle, setSelectedArticle] = useState(null);
    // Estado do tema (igual à Receita 7)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });
    // Novo estado de Loading, começa como true
    const [isLoading, setIsLoading] = useState(true);

    // --- EFEITOS (Effects) ---
    
    // Efeito para persistência do TEMA (igual à Receita 7)
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]); // Corre sempre que `theme` muda

    // NOVO EFEITO (Receita 8): Buscar dados da API
    useEffect(() => {
        
        // Função async para buscar os dados
        async function fetchArticles() {
            try {
                // Usamos a API jsonplaceholder para simular um backend
                // _limit=5 pede apenas 5 posts
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
                
                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }
                
                const data = await response.json();

                // Mapeia os dados da API (que têm 'body') para o nosso formato (com 'content')
                const formattedData = data.map(post => ({
                    id: post.id,
                    title: post.title,
                    content: post.body // Mapeando 'body' para 'content'
                }));

                // Atualiza o estado com os artigos formatados
                setArticles(formattedData);
                // Define o primeiro artigo como o selecionado por padrão
                setSelectedArticle(formattedData[0]);

            } catch (error) {
                console.error("Erro ao buscar artigos:", error);
                // Poderíamos definir um estado de erro aqui para mostrar ao utilizador
            } finally {
                // Independentemente de sucesso ou erro, paramos de carregar
                setIsLoading(false);
            }
        }

        // Chama a função de busca
        fetchArticles();
        
    }, []); // O array vazio `[]` significa que este efeito corre APENAS UMA VEZ, quando o componente é montado.

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
            
            {/* Passa os novos estados (articles, isLoading) para os filhos */}
            <Sidebar 
                articles={articles} 
                onSelectArticle={handleArticleSelect} 
                isLoading={isLoading} 
            />
            <MainContent 
                article={selectedArticle} 
                isLoading={isLoading} 
            />
            
            <Footer />
        </div>
    );
}

export default App;

