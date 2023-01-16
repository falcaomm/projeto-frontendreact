import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    }
    button, input, select{
        cursor: pointer;
    }
    main{
        background-color: white;
        padding: 5vh 0;
    }
`;