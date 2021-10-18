import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Work Sans';
        src: local(./src/public/fonts/WorkSans-VariableFont_wght.ttf);
    }

    *,
    *::after,
    *::before {
        padding: 1vh 1vw;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Work Sans', sans-serif;
        background-color: #F8F7EE;

        h1 {
            font-weight: 500;
            font-size: 3rem;
        }
    }
`