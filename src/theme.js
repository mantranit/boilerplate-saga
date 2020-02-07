import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

export default createMuiTheme({
    palette: {
        primary: {
            light: '#47d673',
            main: '#41C469',
            dark: '#38a95b',
            contrastText: '#fff',
        },
        secondary: {
            light: '#68b7f0',
            main: '#43a5ed',
            dark: '#2e73a5',
            contrastText: '#fff',
        },
        text: {
            primary: '#444',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
        background: {
            // default: 'plain-text apply to backgroundColor',
        }
    },
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg'],
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1440
        }
    },
    typography: {
        fontFamily: '"Centra No2", Roboto, Helvetica, Arial, sans-serif',
        body2: {
            fontSize: '15px',
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    background: 'linear-gradient(198.99deg, #FCFEFF 7.06%, #D9EAE4 92.38%);',
                },
            },
        },
        MuiIconButton: {
            root: {
                fontSize: '1.1rem',
                [theme.breakpoints.up('sm')]: {
                    fontSize: '1.1rem',
                }
            }
        },
    }
});