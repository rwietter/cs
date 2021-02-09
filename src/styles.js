import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *::after, *::before{
    margin: 0;
    padding: 0;
  }

  a {
    box-shadow: none;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #FFFFFF;
  }
  
  h1, h2, h3, h4, p, a, strong {
    color: #202020;
  }
`
