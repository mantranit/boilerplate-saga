import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Layout from 'src/components/Layout';
import styles from './styles.module.scss';

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		action: bindActionCreators({
		}, dispatch),
	};
};

export const ChallengesContainer = (props) => {
	return (
		<Layout>
			<div className={styles.empty}>
				<h2>Coming soon...</h2>
			</div>
		</Layout>
	);
};

ChallengesContainer.propTypes = {
	action: PropTypes.shape({
	}).isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(withRouter(ChallengesContainer));
