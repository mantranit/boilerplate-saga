import React  from 'react';
import { withRouter } from 'react-router-dom';

import MainLayout from 'src/components/MainLayout';

export const HomeContainer = (props) => {
    return (
        <MainLayout>
            ABC
        </MainLayout>
    );
};

export default (withRouter(HomeContainer));
