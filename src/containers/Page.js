import React,{ Component } from 'react';
// import GlobalConfig from '~/constants/Configs';
import PageFlowStore from '~/store/PageFlowStore';
import ApiStore from '~/store/ApiStore';
import * as Actions from '~/store/actions';
import * as ActionTypes from '~/constants/action-types';

class Page extends Component {
	constructor(props) {
		super(props);
		this.onFormSubmit = ::this._onFormSubmit;
		this.onPageChange = ::this._onPageChange;
		this.state = {
			actionMode: ActionTypes.UPDATE
		};
	}

	// mixins = [GlobalConfig]

	// static getInitialState() {
	// 	return PageFlowStore.getAll();
	// }

	componentWillMount() {
		// console.log('componentWillMount');
	}

	componentDidMount() {
		// console.log('componentDidMount');
		PageFlowStore.addChangeListener(this.onPageChange);
		// ApiStore.addChangeListener(this._onAPIChange);
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
	    PageFlowStore.removeChangeListener(this.onPageChange);
	    // ApiStore.removeChangeListener(this._onAPIChange);
	}	

	_onAPIChange() {
		// console.log('Hi , APi Store Change happened');
		// console.log(PageFlowStore.getAll());
	}	

	// update the page , example, once add an item, will triggle this
	_onPageChange() {
		const operateResult = ApiStore.getOperateDetail();
		console.log('Hi , PageFlowStore init', operateResult);
		// console.log(PageFlowStore.getAll());
	}

	_onFormSubmit() {
		// console.log(this);
		// need init the action mode before page loading
		// once ready, comment this line
		// this.setState({actionMode: ActionTypes.UPDATE});

		if (this.state.actionMode === ActionTypes.UPDATE) {
			Actions.actionUpdate();	
		} else if (this.state.actionMode === ActionTypes.ADD) {
			Actions.actionAdd();				
		} else if (this.state.actionMode === ActionTypes.DELETE) {
			Actions.actionDelete();				
		}
		// console.log('state', this);
	}

	render() {
		let {
			children,
			...other
		} = this.props;

		return (
			<div className="container">
				{children}
			</div>
		);
	}
}

export default Page;