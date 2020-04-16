import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    overflow-y: auto;
    background: #01141d;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Helvetica Neue',Arial,sans-serif;
    position: relative;
    overflow:auto;
    line-height: 1.25;
    left: 0px;
    margin:0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: center;
    min-height: 100vh;
    box-sizing: border-box;
  }
  ul{
    list-style-type: none;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
  }
  /* Fix antialiasing */
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* Disable user select on everything but texts */
  *, *:before, *:after {
    user-select: none;
  }
  p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td {
    user-select: all;
  }
`;
