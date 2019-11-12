import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import Routes from './routes';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from 'react-toastify';

const theme = createMuiTheme({
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
            }
        },
    }
});

export const App = (props) => {
    const { store, history } = props;
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Routes />
                </ConnectedRouter>
                <ToastContainer
                    position="top-right"
                    autoClose={6000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
            </Provider>
        </MuiThemeProvider>
    );
};

App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default App;
