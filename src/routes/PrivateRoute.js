import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

const storage = window.localStorage;

const PrivateRoute = (props) => {
	const { component: Component, ...rest } = props;

	if (storage.getItem('__TOKEN__')) {
		return (
			<Route
				{...rest}
				render={(prop) => (<Component {...prop} />)}
			/>
		);
	}
	return (
		<Route
			{...rest}
			render={() => (<Redirect to={{ pathname: '/signin' }} />)}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.any.isRequired,
};

PrivateRoute.defaultProps = {
	// classes: {},
};

export default PrivateRoute;
