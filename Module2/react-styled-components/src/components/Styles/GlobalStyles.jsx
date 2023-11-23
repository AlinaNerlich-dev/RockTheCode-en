import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box
    }

    body {
        background: black;
        font-family: Arial, Helvetica, sans-serif
    }
`;

export default GlobalStyles;
