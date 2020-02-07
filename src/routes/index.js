import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'src/containers/Home';
import SignIn from 'src/containers/SignIn';
import Challenges from 'src/containers/Challenges';
import Gallery from 'src/containers/Gallery';
import NotFound from 'src/containers/NotFound';

import PrivateRoute from 'src/utils/privateRoute';

export default () => (
	<Switch>
		<PrivateRoute exact path="/" component={Home} />
		<PrivateRoute path="/challenges" component={Challenges} />
		<PrivateRoute path="/gallery" component={Gallery} />

		<Route path="/signin" component={SignIn} />
		<Route component={NotFound} />
	</Switch>
);
