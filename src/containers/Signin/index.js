import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signIn } from 'src/redux/actions/auth';

import styles from './styles.module.scss';

const mapStateToProps = (state) => {
	return {
        auth: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
		action: bindActionCreators({
            signIn,
        }, dispatch),
	};
};

const storage = window.localStorage;

export const SignInContainer = (props) => {
    const { auth } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (storage.getItem('__TOKEN__')) {
            setLoggedIn(true);
        }
        if (auth && auth.token) {
            storage.setItem('__TOKEN__', auth.token);
            setLoggedIn(true);
        }
    }, [auth]);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else {
            setPassword(value);
        }
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (username && password) {
            props.action.signIn({username, password});
        }
    };

    if (loggedIn) {
        return <Redirect to="/" />
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className={"card my-5 " + styles["card-signin"]}>
                        <div className={styles["card-body"]}>
                            <h5 className="card-title text-center">Sign In</h5>
                            <form className="form-signin" onSubmit={(e) => handleOnSubmit(e)}>
                                <div className="form-label-group mb-3">
                                    <label htmlFor="inputEmail">Email address</label>
                                    <input type="email" id="inputEmail" value={username} onChange={(e) => handleOnChange(e)} name="username" className="form-control" placeholder="Email address" required/>
                                </div>
                                <div className="form-label-group mb-4">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" id="inputPassword" value={password} onChange={(e) => handleOnChange(e)} name="password" className="form-control" placeholder="Password" required/>
                                </div>
                                <button className="btn btn-lg btn-success btn-block text-uppercase" type="submit">
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

SignInContainer.propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    action: PropTypes.shape({
        signIn: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect(
    mapStateToProps,
	mapDispatchToProps,
)(withRouter(SignInContainer));
