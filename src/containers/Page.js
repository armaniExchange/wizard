import { Component } from 'react';
import GlobalConfig from '~/constants/Configs';
import PageFlowStore from '~/store/PageFlowStore';
import ApiStore from '~/store/ApiStore';
import * as Actions from '~/store/actions';

class Page extends Component {
	constructor(props) {
		super(props);
	}

	mixins = [GlobalConfig]

	// static getInitialState() {
	// 	return PageFlowStore.getAll();
	// }

	componentWillMount() {
		// console.log('componentWillMount');
	}

	componentDidMount() {
		// console.log('componentDidMount');
		PageFlowStore.addChangeListener(this._onPageChange);
		ApiStore.addChangeListener(this._onAPIChange);
		Actions.updateNodeInfo();
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
	    PageFlowStore.removeChangeListener(this._onPageChange);
	    ApiStore.removeChangeListener(this._onAPIChange);
	}	

	_onAPIChange() {
		// console.log('Hi , APi Store Change happened');
		// console.log(PageFlowStore.getAll());
	}	

	_onPageChange() {
		// console.log('Hi , PageFlowStore init');
		// console.log(PageFlowStore.getAll());
	}
}

export default Page;