import type { Metadata } from "next";

// --- Simulações para o ambiente de compilação ---

// import { Inter } from "next/font/google";
const inter = { className: "font-sans-simulada" }; // Simulação da fonte

// import "./globals.css"; 
// (CSS importado, mas ignorado pelo 'bundler' aqui)

// import Header from "@/components/Header";
// Simulação do componente Header
const Header = () => (
  <header style={{padding: '20px', backgroundColor: '#333', color: 'white'}}>
    <h1>Portal PWeb News (Header Simulado)</h1>
    <nav>
      <a href="/" style={{color: 'white', marginRight: '10px'}}>Home</a>
      <a href="/sobre" style={{color: 'white'}}>Sobre</a>
    </nav>
  </header>
);
// --- Fim das Simulações ---


export const metadata: Metadata = {
  title: "Receita 14 - Componentes",
  description: "Aprendendo layouts e componentes no Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        
        {/* 2. Coloquei o meu Header (simulado) aqui em cima */}
        <Header />

        {/* O "children" é basicamente o conteúdo das minhas páginas 
          (tipo o page.tsx ou o sobre/page.tsx). 
          Como o Header está fora do {children}, ele vai aparecer em todas as páginas.
        */}
        <main className="p-8"> {/* Adicionei um padding com Tailwind para o conteúdo não colar nas bordas */}
          {children}
        </main>

        {/* Eu poderia adicionar um Footer global aqui também, se quisesse */}
        
      </body>
    </html>
  );
}

