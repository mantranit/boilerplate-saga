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

export const AboutContainer = (props) => {
	return (
		<h2>AboutContainer</h2>
	);
};

AboutContainer.propTypes = {
	action: PropTypes.shape({
		login: PropTypes.func.isRequired,
	}).isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(withRouter(AboutContainer));
