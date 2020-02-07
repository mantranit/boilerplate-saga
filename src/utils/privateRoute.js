import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthStorage from 'src/utils/authStorage';

const PrivateRoute = (props) => {
	const { component: Component, ...rest } = props;

	if (AuthStorage.getAccessToken()) {
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
