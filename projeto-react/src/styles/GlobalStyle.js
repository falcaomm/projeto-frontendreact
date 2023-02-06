import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap");

    *{
        font-family: "Nunito", sans-serif;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    button, input, select{
        cursor: pointer;
    }
    main{
        background-color: var(--light-color);
        padding: 5vh 0;
        min-height: 75%;
    }

    :root{
    --primary-color: #2A9D8F;
    --secondary-color: #264854;
    --complementary-color: #E2B33C;
    --light-color: #FFFFFF;
}

`;