import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import MainNav from "../MainNav";

import styles from './styles.module.scss';

const storage = window.localStorage;

export const MainNavComponent = (props) => {
    const { navData, children } = props;

    if (!storage.getItem('__TOKEN__')) {
        return <Redirect to="/signin" />
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.mainNav}>
                <MainNav navData={navData}/>
            </div>
            <div className={styles.mainContent}>
                {children}
            </div>
        </div>
	);
};

MainNavComponent.propTypes = {
    navData: PropTypes.array,
    children: PropTypes.any.isRequired,
};

MainNavComponent.defaultProps = {
    navData: [
        {
            type: 'group',
            text: 'MAIN',
        },
        {
            type: 'item',
            text: 'Dashboard',
            url: '/',
            icon: {
                classes: 'mdi mdi-view-dashboard',
            },
        },
        {
            type: 'item',
            text: 'About',
            url: '/about',
            icon: {
                classes: 'mdi mdi-format-list-checks',
                styles: {
                    fontSize: '18px',
                }
            },
        },
        {
            type: 'item',
            text: 'Not found',
            url: '/not-found',
            icon: {
                classes: 'mdi mdi-tune',
            },
        },
    ],
};

export default (MainNavComponent);
