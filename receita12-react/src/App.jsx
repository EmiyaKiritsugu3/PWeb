import React from 'react';

/*
  OBJETIVO DA RECEITA 12: Propriedades de Componentes e Desestruturação

  Esta receita foca-se na forma moderna de passar e receber 'props'.
*/

// --- Componente Header ---
// Usamos a desestruturação diretamente nos argumentos da função.
// Em vez de 'function Header(props)', usamos 'function Header({ title, subtitle })'
// Isto torna imediatamente claro quais props este componente espera.
function Header({ title, subtitle }) {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

// --- Componente ProfileCard ---
// Aqui está o foco principal: desestruturação de props.
// Recebemos 'name', 'course', e 'avatarUrl' diretamente.
function ProfileCard({ name, course, avatarUrl }) {
  return (
    <div className="profile-card">
      <img 
        src={avatarUrl} 
        alt={`Foto de perfil de ${name}`} 
        className="profile-avatar"
      />
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{course}</p>
      </div>
    </div>
  );
}


// --- Dados da Aplicação ---
// No mundo real, isto viria de uma API (Receita 8), mas para focar
// nas props, vamos definir os dados localmente.
const studentsData = [
  {
    id: 1,
    name: "Inamar",
    course: "Programação Web",
    avatarUrl: "https://placehold.co/100x100/3498db/ffffff?text=I"
  },
  {
    id: 2,
    name: "Aluno Exemplo 1",
    course: "Engenharia de Software",
    avatarUrl: "https://placehold.co/100x100/2ecc71/ffffff?text=A1"
  },
  {
    id: 3,
    name: "Aluna Exemplo 2",
    course: "Ciência de Dados",
    avatarUrl: "https://placehold.co/100x100/e74c3c/ffffff?text=A2"
  }
];


// --- Componente App (Principal) ---
function App() {
  return (
    <div className="app-container">
      
      <Header 
        title="Demonstração da Receita 12" 
        subtitle="Props e Desestruturação" 
      />
      
      <main className="app-content">
        <h2>Lista de Alunos</h2>
        
        <div className="profile-list">
          {/* Usamos .map() para transformar o nosso array de dados
            em um array de componentes React.
          */}
          {studentsData.map((student) => (
            
            // A 'key' é essencial para o React saber qual item é qual
            // numa lista. Deve ser única, como o 'id'.
            
            <ProfileCard 
              key={student.id} 
              name={student.name}
              course={student.course}
              avatarUrl={student.avatarUrl}
            />
            
            // DICA PRO: Também poderíamos passar as props usando
            // o "spread operator" para ser mais rápido:
            // <ProfileCard key={student.id} {...student} />
            
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
