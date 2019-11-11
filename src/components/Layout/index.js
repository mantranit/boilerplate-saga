import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from "../Navigation";

import styles from './styles.module.scss';

const storage = window.localStorage;

export const LayoutComponent = (props) => {
    const { navData, children } = props;

    if (!storage.getItem('__TOKEN__')) {
        return <Redirect to="/signin" />
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.mainNav}>
                <Navigation navData={navData}/>
            </div>
            <div className={styles.mainContent}>
                {children}
            </div>
        </div>
	);
};

LayoutComponent.propTypes = {
    navData: PropTypes.array,
    children: PropTypes.any.isRequired,
};

LayoutComponent.defaultProps = {
    navData: [
        {
            type: 'item',
            text: 'Dashboard',
            url: '/',
        },
        {
            type: 'item',
            text: 'Challenges',
            url: '/challenges',
        },
        {
            type: 'item',
            text: 'Gallery',
            url: '/gallery',
        },
    ],
};

export default (LayoutComponent);
