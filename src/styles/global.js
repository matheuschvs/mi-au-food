import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  // css global

  :root {
    --primary-color: #E70000;
    --secondary-color: #E76900;
    --tertiary-color: #008B8B;
    --quaternary-color: #00B900;
    --primary-color-1: #FF5959;
    --primary-color-2: #900000;
    --secondary-color-1: #FFA459;
    --secondary-color-2: #904100;
    --tertiary-color-1: #3BA9A9;
    --tertiary-color-2: #005656;
    --quaternary-color-1: #4AD44A;
    --quaternary-color-2: #007300;

    --title: #170000;
    --subtitle: #271313;
    --text: #342C2C;

    --background: #FFF5F5;

    --title-1: 700 4rem 'Ubuntu', sans-serif;
    --title-2: 700 2rem 'Ubuntu', sans-serif;
    --title-3: 700 1.5rem 'Ubuntu', sans-serif;
    --title-4: 700 1rem 'Ubuntu', sans-serif;
    --paragraph: 400 1rem 'Ubuntu', sans-serif;
    --caption: 500 0.75rem 'Ubuntu', sans-serif;
    --detail: 400 0.625rem 'Ubuntu', sans-serif;
  }

  html {
    font-size: 87.5%;
  }

  @media only screen and (min-width: 768px) {
    html { font-size: 100% }
  }
  
  * {
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
  }

  body {
    background: var(--background);
  }

  body {
    color: var(--text); 
  }

  h1, h2 {
    color: var(--title);
  }

  h1, h2 {
    color: var(--subtitle);
  }

  h1 { font: var(--title-1); }
  h2 { font: var(--title-2); }
  h3 { font: var(--title-3); }
  h4 { font: var(--title-4); }
  body input button { font: var(--paragraph); }
  strong { font: 700 1rem 'Ubuntu', sans-serif; }

  button {
    cursor: pointer;
  }

  ::-moz-selection {
    color: var(--primary-color);
    background: var(--secondary-color-1);
  }

  ::selection {
    color: var(--primary-color);
    background: var(--secondary-color-1);
  }
`;
