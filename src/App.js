import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import theme from './theme';

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
