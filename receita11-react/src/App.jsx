import React from 'react'; // Precisamos de importar o 'React' para usar 'React.Component'

/*
  OBJETIVO DA RECEITA 11: Componentes React com Classes

  Um componente de classe é uma classe JavaScript que herda (extends)
  de 'React.Component' e tem um método obrigatório chamado 'render()'.
*/

// --- Componente Header (Refatorado para Classe) ---
class Header extends React.Component {
  // O método render() é responsável por retornar o JSX
  render() {
    // Em componentes de classe, 'props' são acedidas via 'this.props'
    return (
      <header className="app-header">
        <h1>Demonstração da Receita 11</h1>
        <p>{this.props.subtitle}</p>
      </header>
    );
  }
}

// --- Componente StudentInfo (Refatorado para Classe) ---
class StudentInfo extends React.Component {
  render() {
    return (
      <div className="student-info">
        <h2>Informação do Aluno (Componente de Classe)</h2>
        <p><strong>Nome:</strong> {this.props.name}</p>
        <p><strong>Disciplina:</strong> {this.props.course}</p>
      </div>
    );
  }
}

// --- NOVO Componente: Counter (Demonstração de Estado em Classe) ---
class Counter extends React.Component {
  
  // 1. O 'constructor' é onde inicializamos o estado
  constructor(props) {
    super(props); // Chama sempre o construtor da classe pai (React.Component)
    
    // 2. 'this.state' é um objeto que guarda o estado do componente
    this.state = {
      count: 0
    };

    // 3. Precisamos de "ligar" (bind) o 'this' aos nossos métodos de evento
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // 4. Método para incrementar o contador
  increment() {
    // 5. NUNCA mude o estado diretamente (ex: this.state.count = 1)
    // Use SEMPRE 'this.setState()' para atualizar o estado.
    // O setState "agenda" uma atualização e diz ao React para renderizar novamente.
    this.setState({
      count: this.state.count + 1
    });
  }
  
  // 6. Método para decrementar o contador
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  // 7. O 'render' lê o estado atual de 'this.state.count'
  render() {
    return (
      <div className="counter-demo">
        <h3>Demonstração de Estado (this.state)</h3>
        <p>Contagem atual: {this.state.count}</p>
        
        {/* 8. Liga os botões aos métodos da classe */}
        <button onClick={this.increment}>Incrementar (+)</button>
        <button onClick={this.decrement}>Decrementar (-)</button>
      </div>
    );
  }
}


// O 'App' (componente principal) junta tudo.
// Podemos mantê-lo como funcional, pois ele não tem estado próprio.
function App() {
  return (
    <div className="app-container">
      
      <Header subtitle="Componentes de Classe" />
      
      <main className="app-content">
        <StudentInfo 
          name="Inamar" 
          course="Programação Web (PWeb)" 
        />
        
        <Counter />
        
      </main>
    </div>
  );
}

export default App;
