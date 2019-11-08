import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'src/containers/Home';
import SignIn from 'src/containers/SignIn';
import About from 'src/containers/About';
import NotFound from 'src/containers/NotFound';

import PrivateRoute from './PrivateRoute';

export default () => (
	<Switch>
		<PrivateRoute exact path="/" component={Home} />
		<PrivateRoute path="/about" component={About} />
		<Route path="/signin" component={SignIn} />
		<Route component={NotFound} />
	</Switch>
);
