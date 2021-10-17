import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Work-Sans';
        src: local(./src/public/fonts/WorkSans-VariableFont_wght.ttf);
    }

    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Work-Sans';
    }
`