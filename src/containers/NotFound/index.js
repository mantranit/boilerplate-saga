import React from 'react';
import {withRouter} from 'react-router-dom';

import Layout from 'src/components/Layout';
import styles from './styles.module.scss';

export const NotFoundContainer = () => {
    return (
        <Layout>
            <div className={styles.empty}>
                <h2>404 Page not found</h2>
            </div>
        </Layout>
    );
};

export default withRouter(NotFoundContainer);
