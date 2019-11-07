import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import Routes from './routes';

export const App = (props) => {
	const { store, history } = props;
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Routes />
			</ConnectedRouter>
		</Provider>
	);
};

App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default App;
