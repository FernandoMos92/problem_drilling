import { createGlobalStyle } from 'styled-components';

/**
 * Aqui vou fazer um reset básico para a aplicação
 * definindo algumas cores e estilos
 * como pode ser visto a lib utilizada para 
 * estilização é styled-components
 */
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }

  html {
    height: 100vh;
    width: 100%;
  }

  body {  
    align-items: center;
    background-color: #141a29;
    color: #F2F2F2;
    display: flex;
    font-size: 88px;
    height: inherit;
    justify-content: center;
    width: inherit;
  }

  div {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 750px;
  }

  h4{
    text-align: center;
  }
`

/**
 * Agora que concluimos a estilização básica do projeto vamos
 * importar esse arquivo la no index da aplicação
 */

export default GlobalStyle;