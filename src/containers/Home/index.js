import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		action: bindActionCreators({
        }, dispatch),
	};
};

export const HomeContainer = (props) => {
    return (
        <h2>HomeContainer</h2>
    );
};

HomeContainer.propTypes = {
    action: PropTypes.shape({
        login: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(HomeContainer));
