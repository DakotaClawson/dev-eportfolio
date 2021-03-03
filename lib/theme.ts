import { createMuiTheme, responsiveFontSizes, ThemeOptions } from '@material-ui/core/styles';

import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        gray: Palette['primary'];
        shadow: Palette['primary'];
    }
    interface PaletteOptions {
        gray: PaletteOptions['primary'];
        shadow: PaletteOptions['primary'];
    }
}

declare module '@material-ui/core/styles/createTypography' {
    interface Typography {
        fontWeightHeavy: number;
    }
    interface TypographyOptions {
        fontWeightHeavy: number;
    }
}

const THEME: ThemeOptions = {
    typography: {
        fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
        fontWeightLight: 100,
        fontWeightMedium: 300,
        fontWeightRegular: 400,
        fontWeightHeavy: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.6rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.4rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1.2rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            fontSize: '.8rem',
            fontWeight: 400,
        },
    },
    palette: {
        primary: {
            light: '#f3c8c8',
            main: '#ddb247',
            dark: '#95552b',
        },
        secondary: {
            light: '#c8c3b9',
            main: '#467374',
            dark: '#23413e',
        },
        gray: {
            light: '#fcf6e3',
            main: '#888888',
            dark: '#212121',
            contrastText: '#5a5a5a',
        },
        shadow: {
            main: 'rgba(1, 104, 72, 0.16)',
        },
    },
};

const theme = responsiveFontSizes(createMuiTheme(THEME));

export default theme;
