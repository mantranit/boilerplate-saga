import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOut } from 'src/redux/actions/auth';

import styles from './styles.module.scss';

const mapStateToProps = (state) => {
	return {
        auth: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
		action: bindActionCreators({
            signOut,
        }, dispatch),
	};
};

const storage = window.localStorage;

export const MainNavComponent = (props) => {
    const { auth } = props;
    const [loggedOut, setLoggedOut] = useState(false);

    useEffect(() => {
        if (!storage.getItem('__TOKEN__')) {
            setLoggedOut(true);
        }
    }, [auth]);

    if (loggedOut) {
        return <Redirect to="/signin" />
    }

    return (
        <div className="main-nav">
            <ul>
                <li></li>
            </ul>
        </div>
	);
};

MainNavComponent.propTypes = {
    auth: PropTypes.object.isRequired,
    action: PropTypes.shape({
        signOut: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect(
    mapStateToProps,
	mapDispatchToProps,
)(MainNavComponent);
