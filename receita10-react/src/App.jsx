import React from 'react';

/*
  OBJETIVO DA RECEITA 10: Introdução ao JSX e Componentes Funcionais

  1. COMPONENTE FUNCIONAL:
     Um componente funcional em React é apenas uma função JavaScript
     que retorna JSX (elementos React).
     O 'Header' abaixo é um componente funcional.
*/
function Header() {
  // 2. JSX:
  // Isto parece HTML, mas é JSX. Permite-nos escrever a nossa UI
  // de forma declarativa dentro do JavaScript.
  return (
    <header className="app-header">
      <h1>Demonstração da Receita 10</h1>
      <p>JSX e Componentes Funcionais</p>
    </header>
  );
}

/*
  3. COMPONENTE COM PROPRIEDADES (PROPS):
     Podemos passar dados para componentes usando "props" (propriedades),
     que funcionam como atributos de HTML.
     O componente 'StudentInfo' recebe 'name' e 'course' como props.
*/
function StudentInfo(props) {
  // As props chegam como um objeto.
  // Usamos {props.name} e {props.course} para aceder aos valores.
  return (
    <div className="student-info">
      <h2>Informação do Aluno</h2>
      <p><strong>Nome:</strong> {props.name}</p>
      <p><strong>Disciplina:</strong> {props.course}</p>
    </div>
  );
}


// O 'App' é o componente principal que junta tudo.
function App() {
  
  // 4. USANDO COMPONENTES:
  // Usamos os nossos componentes <Header /> e <StudentInfo />
  // como se fossem tags de HTML normais.
  return (
    <div className="app-container">
      <Header />
      
      <main className="app-content">
        <StudentInfo 
          name="Inamar" 
          course="Programação Web (PWeb)" 
        />

        <div className="jsx-demo">
          <h3>O que é JSX?</h3>
          <p>JSX permite-nos escrever isto:</p>
          <pre>const elemento = &lt;h1&gt;Olá, Mundo!&lt;/h1&gt;;</pre>
          <p>É uma "extensão de sintaxe para o JavaScript" e é a base do React.</p>
          
          <h4>Também podemos usar expressões JavaScript dentro do JSX:</h4>
          <p>2 + 2 = {2 + 2}</p>
        </div>
      </main>
    </div>
  );
}

export default App;

