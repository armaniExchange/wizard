import { Component } from 'react';
import GlobalConfig from '~/constants/Configs';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as globalActions from '~/actions/global-actions';
import PageFlowStore from '~/store/PageFlowStore';

class Page extends Component {
	mixins = [GlobalConfig]

	static getInitialState() {
		return PageFlowStore.getAll();
	}

	componentWillMount() {
		// console.log('componentWillMount');
	}

	componentDidMount() {
		// console.log('componentDidMount');
		PageFlowStore.addChangeListener(this._onInit);
	}

	componentWillReceiveProps() {
		// console.log('componentDidMount');	
	}

	shouldComponentUpdate() {
		// console.log('shouldComponentUpdate');	
		return true;
	}

	componentWillUpdate() {
		// console.log('componentWillUpdate');	
	}

	componentDidUpdate() {
		// console.log('componentDidUpdate');	
	}

	componentWillUnmount() {
		// console.log('componentWillUnmount');	
	    PageFlowStore.removeChangeListener(this._onInit);
	}	

	_onInit() {
		console.log('Hi , PageFlowStore init');
		console.log(PageFlowStore.getAll());
	}
}

// Page.propTypes = {
// 	pageState  : PropTypes.object.isRequired,
// 	pageActions: PropTypes.object.isRequired
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

// export default connect(mapStateToProps, mapDispatchToProps)(Page);
export default Page;