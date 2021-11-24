import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        background-color: ${(props) =>
          props.dark ? props.theme.bgDark : props.theme.bgLight};
        display:flex;
        justify-content: center;
    }

    body{
        width: 390px;
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
        color: ${(props) =>
          props.dark ? props.theme.bgLight : props.theme.bgDark};
    }

    section{
        min-height:141px;
        width: 350px;
        margin-bottom: 22px;
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
        color : ${props=>props.theme.bgDark}
    }

`;
export default GlobalStyle;
