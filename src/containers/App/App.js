// Styles
import './App.css';
// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Components
import Navigation from '../../components/Navigation/Navigation';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		/* eslint-disable */
		/* component handler is used by Material Design Lite, every react component
		   needs to upgrade its DOM in order to maintain the effect.
		*/
		componentHandler.upgradeDom();
		/* eslint-enable */
	}

	render() {
		const {
			navHeaderTitle
		} = this.props.appState;

		return (
			// The outer-most <div> is used by Material Design Lite to prevent DOM clash with React
			<div>
				<section>
					<Navigation
					    headerTitle={navHeaderTitle} />
					<main>
					    <div>
							{this.props.children}
					    </div>
					</main>
				</section>
			</div>
		);
	}
}

App.propTypes = {
	appState  : PropTypes.object.isRequired,
	location   : PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		appState: state.app.toJS()
	};
}

export default connect(
	mapStateToProps
)(App);
