import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
	return {
        abc: 'ABC'
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		action: bindActionCreators(
			dispatch,
		),
	};
};

export const Home = (props) => {
    return (
        <h2>Home</h2>
    );
};

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps,
)(Home));