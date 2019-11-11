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

export const NavigationComponent = (props) => {
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

    const handleLogout = () => {
        storage.removeItem('__TOKEN__');
        props.action.signOut();
    };

    if (loggedOut) {
        return <Redirect to="/" />
    }

    return (
        <div className={styles.navigation}>
            <Link to="/">
                <div className={styles.logo}>
                    <img src={require('src/assets/images/logo.svg')} alt="CM"/>
                </div>
            </Link>
            <div className={styles.user} onClick={handleClick}>
                Acme Company
                <IconButton size="small" aria-controls="user-menu" aria-haspopup="true">
                    <span className={'mdi mdi-menu-down ' + styles.icon}/>
                </IconButton>
            </div>
            <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    className: styles.userMenu,
                    style: {
                        width: 146,
                    }
                }}
            >
                <MenuItem onClick={handleLogout} className={styles.userItem}>Logout</MenuItem>
                <MenuItem onClick={handleClose} component={NavLink} className={styles.userItem} activeClassName={styles.userActive} exact to="/account">Account</MenuItem>
                <MenuItem onClick={handleClose} component={NavLink} className={styles.userItem} activeClassName={styles.userActive} exact to="/resources">Resources</MenuItem>
                <MenuItem onClick={handleClose} component={NavLink} className={styles.userItem} activeClassName={styles.userActive} exact to="/billing">Billing</MenuItem>
            </Menu>
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
                                {el.icon && <span className={`${styles.icon} ${el.icon.classes}`} style={el.icon.styles}/>}
                                <span>{el.text}</span>
                            </span>
                        </Button>
                    );
                })}
            </div>
        </div>
	);
};

NavigationComponent.propTypes = {
    auth: PropTypes.object.isRequired,
    navData: PropTypes.array,
    action: PropTypes.shape({
        signOut: PropTypes.func.isRequired,
    }).isRequired,
};

NavigationComponent.defaultProps = {
    navData: [],
};

export default connect(
    mapStateToProps,
	mapDispatchToProps,
)(NavigationComponent);
