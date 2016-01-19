// Styles
import './App.css';
// React & Redux
import React from 'react';
// import { connect } from 'react-redux';
// Components
import Navigation from '../../components/Navigation/Navigation';
import Page from '~/containers/Page';
// import * as globalActions from '~/actions/global-actions';
// import { bindActionCreators } from 'redux';

class App extends Page {
	constructor(props) {
		super(props);
	}

	// static propTypes: {
	// 	appState  : PropTypes.object.isRequired,
	// 	appActions  : PropTypes.object.isRequired,
	// 	location   : PropTypes.object.isRequired
	// }
	componentDidMount() {
		// console.log('componentDidMount');
	}

	componentDidUpdate() {
		/* eslint-disable */
		/* component handler is used by Material Design Lite, every react component
		   needs to upgrade its DOM in order to maintain the effect.
		*/
		componentHandler.upgradeDom();
		/* eslint-enable */
	}


	componentWillUnmount() {
		// console.log('componentWillUnmount');	
	}		

	render() {
		// const {
		// 	navHeaderTitle
		// } = this.props.appState;

		return (
			// The outer-most <div> is used by Material Design Lite to prevent DOM clash with React
			<div>
				<section>
					<Navigation
					    headerTitle='Flux'>
						  <main className="mdl-layout__content">
						    <div className="page-content">
						    	{this.props.children}
						    </div>
						  </main>
					</Navigation>
				</section>
			</div>
		);
	}
}

// App.propTypes = {
// 	appState  : PropTypes.object.isRequired,
// 	appActions  : PropTypes.object.isRequired,
// 	location   : PropTypes.object.isRequired
// };

// App.propTypes = {
// 	appState  : PropTypes.object.isRequired,
// 	appActions: PropTypes.object.isRequired
// };

// function mapStateToProps(state) {
// 	return {
// 		appState: state.app.toJS()
// 	};
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		appActions: bindActionCreators(globalActions, dispatch)
// 	};
// }


// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
