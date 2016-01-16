import { Component } from 'react';
import GlobalConfig from '~/constants/Configs';
import PageFlowStore from '~/store/PageFlowStore';
import ApiStore from '~/store/ApiStore';

class Page extends Component {
	mixins = [GlobalConfig]

	// static getInitialState() {
	// 	return PageFlowStore.getAll();
	// }

	componentWillMount() {
		// console.log('componentWillMount');
	}

	componentDidMount() {
		// console.log('componentDidMount');
		PageFlowStore.addChangeListener(this._onInit);
		ApiStore.addChangeListener(this._onInit);
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
	    ApiStore.removeChangeListener(this._onInit);
	}	

	_onInit() {
		// console.log('Hi , PageFlowStore init');
		// console.log(PageFlowStore.getAll());
	}
}

export default Page;