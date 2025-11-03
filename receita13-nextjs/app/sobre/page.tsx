// Este ficheiro torna-se automaticamente a rota "/sobre"
export default function Sobre() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-5">Página Sobre</h1>
      <p className="text-lg">
        Isto foi criado pelo ficheiro Ecrã (<code>app/sobre/page.tsx</code>).
      </p>

      <a href="/" className="mt-10 text-blue-400 hover:text-blue-600 underline">
        Voltar para a Home
      </a>
    </main>
  )
}