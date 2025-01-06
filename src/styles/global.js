import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: '#000';

        padding: 0 12rem;

        @media (max-width: 1629px) {

            padding: 0 6rem;
        }

        @media (max-width: 1149px) { 
            padding: 0 4rem;
        }

        @media (max-width: 999px) { 
            padding: 0 2rem;
        }

        @media (max-width: 768px) { 
            padding: 0 1rem;
        }
        
        
    }

`;