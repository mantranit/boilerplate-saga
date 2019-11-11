import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signIn } from 'src/redux/auth/action';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

    const handleOnChange = (name) => (event) => {
        if (name === 'username') {
            setUsername(event.target.value);
        } else {
            setPassword(event.target.value);
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
        <div className={styles.root}>
            <div className={styles.container}>
                <h1>
                    <img src={require('src/assets/images/logo.svg')} alt="CM"/>
                </h1>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <div className={styles.inputWrap}>
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                value={username}
                                onChange={handleOnChange('username')}
                            />
                        </div>
                        <div className={styles.inputWrap}>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={handleOnChange('password')}
                            />
                        </div>
                        <div>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
	);
};

SignInContainer.propTypes = {
    auth: PropTypes.object.isRequired,
    action: PropTypes.shape({
        signIn: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect(
    mapStateToProps,
	mapDispatchToProps,
)(withRouter(SignInContainer));
