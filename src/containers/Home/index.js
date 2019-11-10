import React  from 'react';
import { withRouter } from 'react-router-dom';

import Layout from 'src/components/Layout';
import styles from './styles.module.scss';

export const HomeContainer = (props) => {
    return (
        <Layout>
            <div className={styles.empty}>
                <h2>Coming soon...</h2>
            </div>
        </Layout>
    );
};

export default (withRouter(HomeContainer));
