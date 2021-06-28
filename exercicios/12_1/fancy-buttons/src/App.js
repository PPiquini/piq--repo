import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function handleClick() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return <div>
      <button onClick={handleClick}>Meu botão1</button>
      <button onClick={handleClick}>Meu botão2</button>
      <button onClick={handleClick}>Meu botão3</button>
    </div>
  }
}

export default App;