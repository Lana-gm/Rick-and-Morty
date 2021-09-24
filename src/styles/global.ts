import { createGlobalStyle } from "styled-components";
import typography from "styles/theme/typography";

const GlobalStyle = createGlobalStyle`

    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${typography.primary};
        
    }

    ul {
        padding: 0;
        list-style: none;
    }

    button{
        border:none;
        background: none;
        cursor: pointer;
    }

    
`;

export default GlobalStyle;
