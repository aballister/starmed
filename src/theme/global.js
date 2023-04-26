import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import leafletBase from './leaflet';

const breakpoints = {
    superSmall: 359,
    extraSmall: 576,
    small: 767,
    medium: 992,
    large: 1199,
    extraLarge: 1599,
    superLarge: 1919,
};

export const mediaQuery = (breakpoint, type = 'less') => {
    const minmax = type === 'less' ? 'max' : 'min';
    const shift = type === 'less' ? 0 : 1;
    return `${minmax}-width: ${breakpoints[breakpoint] + shift}px`;
};
export const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${leafletBase}
    
    html,
    body {
        height: 100%;
        font: 14px/1.2 ${props => props.theme.fonts.regular};
        position: relative;
        @media (${mediaQuery('small')}) {
            font-size: 13px;
        }
    }
    body {
        color: ${props => props.theme.colors.primary};
    }
    button {
        outline: none;
        cursor: pointer;
        background: transparent;
        color: ${props => props.theme.colors.primary};
    }
    a {
        text-decoration: none;
        transition: color 0.3s;
        @media (hover: hover) { 
            &:hover {
                color: ${props => props.theme.colors.hoverColor};
            }
        }
    }
    .hidden {
        display: none !important;
    }
    b,
    strong {
      font-weight: normal;
      font-family: ${props => props.theme.fonts.bold};
    }
    i,
    em {
      font-style: normal;
      font-family: ${props => props.theme.fonts.italic};
    }
`;

export default GlobalStyle;