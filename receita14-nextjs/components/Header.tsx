// Importamos o componente <Link> para navegação client-side
import Link from 'next/link';

/*
  Este é o nosso componente reutilizável Header.
  Vamos usar classes do Tailwind para o estilizar.
*/
export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        
        {/* Logótipo ou Título do Site */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-300">
          Portal PWeb (R14)
        </Link>
        
        {/* Links de Navegação */}
        <div className="space-x-4">
          <Link href="/" className="text-lg hover:text-gray-300">
            Home
          </Link>
          <Link href="/sobre" className="text-lg hover:text-gray-300">
            Sobre
          </Link>
        </div>

      </nav>
    </header>
  );
}

