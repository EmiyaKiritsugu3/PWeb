import React, { useState, useEffect } from 'react';

// --- Componente: Header ---
function Header({ theme, onToggleTheme }) {
    // ... (igual à Receita 8)
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
    // ... (igual à Receita 8)
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
function MainContent({ article, isLoading }) {
    // ... (igual à Receita 8)
    if (isLoading) {
        return <main className="main-content"><p>A carregar artigo...</p></main>;
    }
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
function Sidebar({ articles, onSelectArticle, isLoading }) {
    // ... (igual à Receita 8)
    return (
        <aside className="sidebar">
            <h3>Últimas Notícias</h3>
            {isLoading ? (
                <p>A carregar notícias...</p>
            ) : (
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

// --- Componente: Footer ---
function Footer() {
    return (
        <footer className="footer">
            <p>PWeb News - Receita 9 (Formulários) &copy; 2025</p>
        </footer>
    );
}

// --- NOVO Componente (Receita 9): Formulário de Novo Artigo ---
function AddArticleForm({ onAddNewArticle }) {
    // 1. Estados para controlar os valores dos campos (Componentes Controlados)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 2. Função de submissão do formulário
    async function handleSubmit(event) {
        // Previne o recarregamento padrão da página
        event.preventDefault(); 

        // Validação simples
        if (!title || !content) {
            alert('Por favor, preencha o título e o conteúdo.');
            return;
        }

        // 3. Chama a função do componente pai para fazer o POST
        onAddNewArticle(title, content);

        // 4. Limpa os campos do formulário após a submissão
        setTitle('');
        setContent('');
    }

    return (
        <div className="form-container">
            <h3>Adicionar Nova Notícia</h3>
            {/* 5. Liga o `onSubmit` do formulário à nossa função */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input 
                        type="text" 
                        id="title"
                        value={title} // O valor vem do estado
                        onChange={e => setTitle(e.target.value)} // Atualiza o estado a cada digitação
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Conteúdo:</label>
                    <textarea 
                        id="content"
                        rows="4"
                        value={content} // O valor vem do estado
                        onChange={e => setContent(e.target.value)} // Atualiza o estado a cada digitação
                    />
                </div>
                <button type="submit" className="submit-button">Publicar</button>
            </form>
        </div>
    );
}


// --- Componente Principal: App (Atualizado para Receita 9) ---
function App() {
    
    // --- ESTADO (State) ---
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [isLoading, setIsLoading] = useState(true);

    // --- EFEITOS (Effects) ---
    
    // Efeito para TEMA (igual à Receita 8)
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Efeito para BUSCAR DADOS (GET) (igual à Receita 8)
    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
                if (!response.ok) throw new Error('Falha ao buscar dados');
                
                const data = await response.json();
                const formattedData = data.map(post => ({
                    id: post.id,
                    title: post.title,
                    content: post.body 
                }));

                setArticles(formattedData);
                setSelectedArticle(formattedData[0]);

            } catch (error) {
                console.error("Erro ao buscar artigos:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchArticles();
    }, []);

    // --- Funções de Manipulação (Handlers) ---
    
    function handleArticleSelect(article) {
        setSelectedArticle(article);
    }

    function handleThemeToggle() {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    }

    // NOVA FUNÇÃO (Receita 9): Submeter um novo artigo (POST)
    async function handleAddNewArticle(title, content) {
        try {
            // 1. Envia os novos dados para a API (Método POST)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: content,
                    userId: 1, // A API de testes requer um userId
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (!response.ok) throw new Error('Falha ao publicar o artigo.');

            const newArticleFromApi = await response.json();
            
            // Mapeia a resposta da API para o nosso formato
            const newArticle = {
                id: newArticleFromApi.id, // A API gera um novo ID
                title: newArticleFromApi.title,
                content: newArticleFromApi.body
            };

            // 2. Atualiza o estado local (de forma imutável)
            // Adiciona o novo artigo no início da lista
            setArticles(currentArticles => [newArticle, ...currentArticles]);
            
            // 3. Seleciona o artigo que acabámos de criar
            setSelectedArticle(newArticle);

        } catch (error) {
            console.error("Erro ao publicar artigo:", error);
            alert("Erro ao publicar. Tente novamente.");
        }
    }


    // --- Renderização do JSX ---
    return (
        <div className={`grid-container ${theme}`}>
            <Header theme={theme} onToggleTheme={handleThemeToggle} />
            <Navbar />
            
            <Sidebar 
                articles={articles} 
                onSelectArticle={handleArticleSelect} 
                isLoading={isLoading} 
            />
            
            {/* O conteúdo principal agora tem o formulário E o artigo */}
            <main className="main-content">
                <AddArticleForm onAddNewArticle={handleAddNewArticle} />
                <hr className="form-divider" />
                <MainContent 
                    article={selectedArticle} 
                    isLoading={isLoading} 
                />
            </main>
            
            <Footer />
        </div>
    );
}

export default App;
