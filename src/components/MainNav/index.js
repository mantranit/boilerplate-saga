import React, { useState, useEffect } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOut } from 'src/redux/auth/action';


import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

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
    const { auth, navData } = props;
    const [anchorEl, setAnchorEl] = useState(undefined);
    const [loggedOut, setLoggedOut] = useState(false);

    useEffect(() => {
        if (!storage.getItem('__TOKEN__')) {
            setLoggedOut(true);
        }
    }, [auth]);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(undefined);
    };

    const handleSignOut = () => {
        storage.removeItem('__TOKEN__');
        props.action.signOut();
    };

    if (loggedOut) {
        return <Redirect to="/" />
    }

    return (
        <div className={styles.navigation}>
            <div className={styles.btnLogout}>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <span className="mdi mdi-dots-vertical"/>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                </Menu>
            </div>
            <Link to="/">
                <div className={styles.logo}>
                    <img src={'http://www.mantran.net/assets/images/favicon/favicon-ios.png'} alt="M"/>
                </div>
            </Link>
            <div className={styles.menu}>
                {navData.map((el, i) => {
                    if (el && el.type === 'group') {
                        return (
                            <div key={i} className={styles.group}>{el.text}</div>
                        );
                    }
                    return (
                        <Button
                            key={i}
                            fullWidth
                            component={NavLink}
                            to={el.url}
                            className={styles.item}
                            activeClassName={styles.active}
                            exact
                        >
                            <span className={styles.inner}>
                                <span className={`${styles.icon} ${el.icon.classes}`} style={el.icon.styles}/>
                                <span>{el.text}</span>
                            </span>
                        </Button>
                    );
                })}
            </div>
        </div>
	);
};

MainNavComponent.propTypes = {
    auth: PropTypes.object.isRequired,
    navData: PropTypes.array,
    action: PropTypes.shape({
        signOut: PropTypes.func.isRequired,
    }).isRequired,
};

MainNavComponent.defaultProps = {
    navData: [],
};

export default connect(
    mapStateToProps,
	mapDispatchToProps,
)(MainNavComponent);
