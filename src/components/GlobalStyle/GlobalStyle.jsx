import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    font-family: Agbalumo-Regular, sans-serif;
    font-size: 12px;
    color: yellowgreen;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeSpeed;
    overflow: hidden;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}

ul,
ol {
    margin: 0;
    padding: 0;
    list-style: none;
}

img {
    display: block;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}

a {
    text-decoration: none;
}

button {
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
}

input {
    outline: none;
}
`;
