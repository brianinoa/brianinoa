import { createGlobalStyle } from 'styled-components';
import { Theme as DefaultTheme } from './theme';

export const GlobalStyles = createGlobalStyle`
    @keyframes multicolor {
        0% { background-color: #D0B8AC; }
        16% { background-color: #AE9F8B; }
        33% { background-color: #846B8A; }
        49% { background-color: #D4D2D5; }
        66% { background-color: #6E6A6F; }
        100% { background-color: #D0B8AC; }
    }

    @-webkit-keyframes multicolor {
        0% { background-color: #D0B8AC; }
        16% { background-color: #AE9F8B; }
        33% { background-color: #846B8A; }
        49% { background-color: #D4D2D5; }
        66% { background-color: #6E6A6F; }
        100% { background-color: #D0B8AC; }
    }

    @font-face {
        font-family: NiveauGroteskBold;
        src: url(/fonts/NiveauGroteskBold.otf);
        font-style: normal;
        font-weight: 800;
    }
    
    @font-face {
        font-family: NiveauGroteskMedium;
        src: url(/fonts/NiveauGroteskMedium.otf);
        font-style: normal;
        font-weight: 500;
    }
    
    @font-face {
        font-family: NiveauGroteskRegular;
        src: url(/fonts/NiveauGroteskRegular.otf);
        font-style: normal;
        font-weight: 300;
    }
    
    @font-face {
        font-family: NiveauGroteskExtraLight;
        src: url(/fonts/NiveauGroteskExtraLight.otf);
        font-style: normal;
        font-weight: 200;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        align-items: center;
        background: ${({ theme }: { theme: DefaultTheme }) => '#ececec'};
        color: ${({ theme }: { theme: DefaultTheme }) => '#363537'};
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        line-height: 1.6;
        font-size: 18px;
        transition: all 0.25s linear;
    }

    a {
        color: ${({ theme }: { theme: DefaultTheme }) => '#27292a'};
        text-decoration: none;
    }

    .bar {
        width: 100%;
        height: 20px;
        background-color: #ae9f8b;
        animation: 60s multicolor;
        -webkit-animation: 60s multicolor;
    }

    .bar:hover {
        -webkit-animation-play-state: 0;
        animation-play-state: 0;
    }

    a:hover {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        display: block;
    }

    h1 {
        font-family: NiveauGroteskBold;
    }

    h2 {
        font-family: NiveauGroteskRegular;
    }

    p {
        font-family: NiveauGroteskExtraLight;
        font-size: 1.5rem;
    }

    .bold {
        font-weight: bold;
        font-size: 1.6rem;
    }

    .introduction {
        font-family: NiveauGroteskRegular;
        color: ${({ theme }: { theme: DefaultTheme }) => '#555'};
    }

    .c-link {
        border-bottom: 1px dotted ${({ theme }: { theme: DefaultTheme }) => '#000'};
    }

    a:hover {
        text-decoration: none;
        color: ${({ theme }: { theme: DefaultTheme }) => '#7e7e7e'};
    }
`