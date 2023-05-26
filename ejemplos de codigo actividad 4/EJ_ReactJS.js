import React from 'react';

class MiComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  incrementarContador() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <h1>Mi Componente</h1>
        <p>Contador: {this.state.contador}</p>
        <button onClick={() => this.incrementarContador()}>Incrementar</button>
      </div>
    );
  }
}

export default MiComponente;

