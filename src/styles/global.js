import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --main-red: #bf1c21;
        --main-orange: #f36e37;
        --text-body: #454545;
        --light-gray: #969696;
        --background: #f0f2f5;
        --border: #00000044;


        --blue-light: #6933ff;
        --blue-light2: #9933ff;

        --text-title: #363f5f;
        

        --white: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    button {
        text-decoration: none;

        font-size: 1rem;
        font-weight: 600;
        background: white;
        border: 1px solid var(--main-orange);
        border-radius: 0.3rem;
        color: var(--main-orange);

        margin-top: 1rem;
        padding: 0.5rem 1.5rem;

        transition: 0.2s;

        &:hover {
            background: var(--main-orange);
            color: white;
            cursor: pointer;
        }
    }

    a:hover {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`