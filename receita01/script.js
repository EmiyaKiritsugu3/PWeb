document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.icon');
    const body = document.body;

    // Função para aplicar o tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            themeIcon.textContent = '☀️'; // Sol
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeIcon.textContent = '🌙'; // Lua
            localStorage.setItem('theme', 'light');
        }
    };

    // Event listener para o botão
    themeToggle.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });

    // Tema inicial ao carregar a página
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light'); // Padrão
    }
});