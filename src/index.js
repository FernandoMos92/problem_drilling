import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle';

/**
 * Adicionamos da forma abaixo, ela é uma tag auto close
 * ao adicionarmos ali estamos declarando que o elemento irmão receberá
 * todos os estilos definidos.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

