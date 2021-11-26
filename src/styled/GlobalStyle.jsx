import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        background-color: ${(props) => props.theme.background};
        display:flex;
        justify-content: center;
    }

    body{
        min-width: 390px;
        width: min(628px, 90vw);
    }

    #root{
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    *, *::before, *::after{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        font-size: ${(props) => props.theme.nm};
        color: ${(props) => props.theme.content};
    }

    section{
        min-height:141px;
        /* width: 350px; */
        margin-bottom: 22px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.lightBlue};
        box-shadow: ${(props) =>
          props.dark
            ? `5px 5px 1px rgba(200,200,200, 0.25)`
            : `5px 5px 1px rgba(0, 0, 0, 0.25)`};
    }

    a{
        text-decoration:none;
    }

    h1{
        font-size:${(props) => props.theme.lg};
        margin-bottom: 20px;
    }
    h2{
        margin-bottom: 8px;
    }

    p, li{
        color : ${(props) => props.theme.background}
    }

    button{
        cursor:pointer;
    }
`;
export default GlobalStyle;
