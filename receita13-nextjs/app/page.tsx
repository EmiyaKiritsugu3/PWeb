/*
  Este é o ficheiro da sua página principal (a rota "/")
  Estamos a usar classes do Tailwind CSS (ex: "text-2xl") 
  porque o seu projeto foi criado com o default "app-tw".
*/
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-5">Receita 13: Introdução ao Next.js</h1>
      <p className="text-lg">
        Esta é a página principal (<code>app/page.tsx</code>).
      </p>

      {/* No Next.js, usamos o componente <Link> em vez de <a> para 
        navegar entre páginas internas sem recarregar a página.
        Vamos importar o Link.
      */}
      <a href="/sobre" className="mt-10 text-blue-400 hover:text-blue-600 underline">
        Ir para a página "Sobre"
      </a>
    </main>
  )
}