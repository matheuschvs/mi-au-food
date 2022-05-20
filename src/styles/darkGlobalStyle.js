import { createGlobalStyle } from 'styled-components';

export const DarkGlobalStyle = createGlobalStyle`
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
    --primary-color: #e70000;
    --secondary-color: #e76900;
    --tertiary-color: #008b8b;
    --quaternary-color: #00b900;
    --primary-color-1: #900000;
    --primary-color-2: #ff5959;
    --secondary-color-1: #904100;
    --secondary-color-2: #ffa459;
    --tertiary-color-1: #005656;
    --tertiary-color-2: #3ba9a9;
    --quaternary-color-1: #007300;
    --quaternary-color-2: #4ad44a;

    --title: #ffdddd;
    --subtitle: #f8b8b8;
    --text: #f8b8b8;

    --background: #0e0000;
    --background-2: #1a0000;

    --gradient: linear-gradient(180deg,rgba(20,0,0,0.8) 39.84%,rgba(231,105,0,0.24) 76.04%,rgba(231,0,0,0.8) 100%);

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
