import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signOut } from 'src/redux/actions/auth';
import MainNav from 'src/components/MainNav';

import styles from './styles.module.scss';

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		action: bindActionCreators({
            signOut
        }, dispatch),
	};
};

export const HomeContainer = (props) => {
    return (
        <Fragment>
            <div className={styles.mainNav}>
                <MainNav/>
            </div>
            <div className={styles.mainContent}>
                ABC
            </div>
        </Fragment>
    );
};

HomeContainer.propTypes = {
    action: PropTypes.shape({
        signOut: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(HomeContainer));
