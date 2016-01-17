import './Widget.scss';

import React, { Component } from 'react';
import PageFlowStore from '~/store/PageFlowStore';
import ApiStore from '~/store/ApiStore';
// import AppDispatcher from '~/store/AppDispatcher';
import * as Actions from '~/store/actions';

export default class Widget extends Component {
	constructor(props) {
		super(props);
		// this.state = {nodeInfo:{}};
		this.onAPIChange = ::this._onAPIChange;
		this.onPageChange = ::this._onPageChange;
	}

	static propTypes = {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		model: React.PropTypes.string,
		title: React.PropTypes.string
	}

	componentWillMount() {
		// console.log('componentDidMount');
		if (this.props.hasOwnProperty('model')) {
			// console.log(this.props.model);
			Actions.updateNode(this.props.model);
		}
	}

	componentDidMount() {
		// console.log('componentDidMount');
		PageFlowStore.addChangeListener(this.onPageChange);
		ApiStore.addChangeListener(this.onAPIChange);
	}

	componentWillUnmount() {
		// console.log('componentWillUnmount');	

	    PageFlowStore.removeChangeListener(this.onPageChange);
	    ApiStore.removeChangeListener(this.onAPIChange);
	}	

	_onPageChange() {
		// console.log('Hi Widget , Page Change Happened');
		// console.log(PageFlowStore.getAll());
	}

	_onAPIChange() {
		// console.log('Hi , APi Store Change happened', this);
		if (this.props.hasOwnProperty('model')) {
			// console.log(this.props.model);
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

	prepareClasses() {
		let classes = 'widget row form-group' ;
		if (this.props.className) {
			classes += this.props.className;
		}		
		return classes;
	}


	_onAddNode(e) {
		// console.log(e);
		if (this.props.hasOwnProperty('onChange')) {
			this.props.onChange.call(this, e);
		} else {
			// console.log('default widget change triggled ');
			if (this.props.hasOwnProperty('model')) {
				Actions.updateNode(this.props.model, e.target.value);
			    this.setState(ApiStore.getAllNodes());
			    // console.log(this.state);
			}
		}

	}
	

	render() {

		let classes = this.prepareClasses();
		let title = 'No Title';
		if (this.props.hasOwnProperty('title')) {
			title = this.props.title;
		}

		return (
			<div className={classes} >
				<label className="control-label" forHTML="inputSuccess1">{title}</label>
				{this.props.children}
				<span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
				<span id="helpBlock" className="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
			</div>
		);
	}

}

