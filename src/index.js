import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './assets/scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const initialState = {};
const store = configureStore(initialState, history);

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} history={history}/>
        </AppContainer>,
        document.getElementById('root')
    );
};
// init render
render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        // eslint-disable-next-line global-require
        const NextApp = require('./App').default;
        render(NextApp);
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
