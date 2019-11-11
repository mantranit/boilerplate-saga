import React  from 'react';
import { withRouter } from 'react-router-dom';
import AuthStorage from 'src/utils/authStorage';

import Layout from 'src/components/Layout';
import styles from './styles.module.scss';

export const HomeContainer = (props) => {
    return (
        <Layout>
            <div className={styles.welcome}>
                <h1>Welcome {AuthStorage.getName()},</h1>
            </div>

        </Layout>
    );
};

export default (withRouter(HomeContainer));
