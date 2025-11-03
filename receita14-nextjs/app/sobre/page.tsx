// O Next.js já sabe que este ficheiro é a rota "/sobre"
// Não precisamos de importar o Header, pois ele está no layout.tsx
export default function Sobre() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Página Sobre</h1>
      <p>
        Esta página demonstra como os componentes são renderizados 
        dentro do layout partilhado.
      </p>
    </div>
  )
}
