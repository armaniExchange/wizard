import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Widget.scss';

import React, { Component } from 'react';
// import PageFlowStore from '~/store/PageFlowStore';
import ApiStore from '~/store/ApiStore';
// import AppDispatcher from '~/store/AppDispatcher';
import * as Actions from '~/store/actions';

import validation from '~/store/validations';


export default class Widget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nodeInfo:{}, 
			value: null,
			// inputHelp: '',
			errorText: ''
		};
		this.onAPIChange = ::this._onAPIChange;
		this.onPageChange = ::this._onPageChange;
		this.onAddNode = ::this._onAddNode;
	}

	static propTypes = {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		model: React.PropTypes.string,
		title: React.PropTypes.string,
		helpText: React.PropTypes.string,
		errorText: React.PropTypes.string,
		value: React.PropTypes.string
	}

	componentWillMount() {
		// console.log('componentWillMount');
		if (this.props.hasOwnProperty('model')) {
			Actions.updateNode(this.props.model);
		}		
	}

	componentDidMount() {
		// console.log('componentDidMount');
		if (this.props.hasOwnProperty('model')) {
			Actions.updateNode(this.props.model, this.getValue());
			ApiStore.addChangeListener(this.onAPIChange);
			ApiStore.addListener(this.props.model,this.onAPIChange);
		}
	}

	shouldComponentUpdate() {
		// console.log('shouldComponentUpdate');	
		return true;
	}

	componentWillUpdate() {

	}

	componentWillUnmount() {
		console.log('componentWillUnmount');	
		if (this.props.hasOwnProperty('model')) {
	    	ApiStore.removeChangeListener(this.onAPIChange);
	    	ApiStore.removeListener(this.props.model, this.onAPIChange);
	    }
	}	

	_onPageChange() {
		// console.log('Hi Widget , Page Change Happened');
		// console.log(PageFlowStore.getAll());
	}

	_onAPIChange() {
		// console.log('Hi , APi Store Change happened', this);
		if (this.props.hasOwnProperty('model')) {
			let nodeInfo = ApiStore.getNodeInfo(this.props.model);
			if (nodeInfo) {
				// console.log(nodeInfo);
				this.setState({nodeInfo:nodeInfo});
			}
			// console.log(this.state());
		}
		// console.log('Hi Widget, Change happened');
		// console.log(PageFlowStore.getAll());

	}

	// prepareClasses() {
	// 	// use 
	// 	let classes = 'widget form-group' ;
	// 	if (this.props.className) {
	// 		classes += this.props.className;
	// 	}		
	// 	return classes;
	// }


	_onAddNode() {
		// console.log('default widget change triggled ');
		if (this.props.hasOwnProperty('model')) {
			Actions.updateNode(this.props.model, this.getValue());
		    // this.setState(ApiStore.getAllNodes());
		    // console.log(this.state);
		}
		this._onValidate();
		// this.setState({
		// 	errorText: 'This is Error Text'
		// });		
		// this.forceUpdate();
	}

	_onValidate() {
		// try validation only
		const validationInfo = validation.test(this.state.nodeInfo['validation']);
		if (!validationInfo['result']) {
			this.setState({
				errorText: validationInfo['info']
			});
		}
		// console.log('try validation', this.state);
	}

	getValue() {
		return 	this.state.value;
	}
	
	clearValue() {
	}

	setValue(newValue) {
		this.setState({value:newValue});
	}


	render() {

		// let classes = this.prepareClasses();
		let {
			helpText,
			title, 
			...other
		} = this.props;


		let helpElement = '';
		if (helpText) {
			helpElement = <span className="help-block">{helpText}</span>;
		}
		// console.log(helpText);

		let classes = {
			'widget form-group': true
		};
		// console.log('triggled rendering', this.state);
		let errorPlace = '';
		if (this.props.errorText) {
			errorPlace = <span className="label label-danger">{this.props.errorText}</span>;
			classes['has-error'] = true;
			// console.log('error');
		}

		let classSet = classNames(classes);

		// show help text
		// we can animation
		return (
			<div className={classSet} >
				<label className="control-label">{title}</label>
				{this.props.children}
				<ReactCSSTransitionGroup transitionName="widget-help" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
				{helpElement}
				{errorPlace}
				</ReactCSSTransitionGroup>
			</div>
		);
	}

}

