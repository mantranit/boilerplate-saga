import React from 'react';
import {withRouter} from 'react-router-dom';

import MainLayout from 'src/components/MainLayout';

import styles from './styles.module.scss';

export const NotFoundContainer = () => {
    return (
        <MainLayout>
            <div className={styles.empty}>
                <h2>404 Page not found</h2>
            </div>
        </MainLayout>
    );
};

export default withRouter(NotFoundContainer);
