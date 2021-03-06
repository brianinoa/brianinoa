import { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';
import { Theme as DefaultTheme } from './theme';

export const GlobalStyles = createGlobalStyle`
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
        background: ${({ theme }: { theme: DefaultTheme }) => theme.body};
        color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        line-height: 1.6;
        font-size: 18px;
        transition: all 0.25s linear;
    }

    a {
        color: ${({ theme }: { theme: DefaultTheme }) => theme.normalLink};
        text-decoration: none;
    }

    .bar {
        width: 100%;
        height: 20px;
        background-color: #ae9f8b;
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
        color: ${({ theme }: { theme: DefaultTheme }) => theme.introduction};
    }

    .c-link {
        border-bottom: 1px dotted ${({ theme }: { theme: DefaultTheme }) => theme.dotted};
    }

    a:hover {
        text-decoration: none;
        color: ${({ theme }: { theme: DefaultTheme }) => theme.linkHover};
    }
`