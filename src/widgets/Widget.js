import './Widget.scss';

import React, { Component } from 'react';
import PageFlowStore from '~/store/PageFlowStore';
import ApiStore from '~/store/ApiStore';
// import AppDispatcher from '~/store/AppDispatcher';
import * as Actions from '~/store/actions';

export default class Widget extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static propTypes = {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		model: React.PropTypes.string
	}

	componentDidMount() {
		// console.log('componentDidMount');
		PageFlowStore.addChangeListener(this._onPageLayoutChange);
		ApiStore.addChangeListener(this._onWidgetChange);
	}

	componentWillUnmount() {
		// console.log('componentWillUnmount');	

	    PageFlowStore.removeChangeListener(this._onPageLayoutChange);
	    ApiStore.removeChangeListener(this._onWidgetChange);
	}	

	_onPageLayoutChange() {
		// console.log('Hi Widget , Page Change Happened');
		// console.log(PageFlowStore.getAll());
	}

	_onWidgetChange() {
		// console.log('Hi Widget, Change happened');
		// console.log(PageFlowStore.getAll());
	}

	prepareClasses() {
		let classes = 'widget row ' ;
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
				Actions.addNode(this.props.model, e.target.value);
			    this.setState(ApiStore.getAllNodes());
			    // console.log(this.state);
			}
		}

	}
	

	render() {

		let classes = this.prepareClasses();

		return (
			<div className={classes}>
				{this.props.children}
			</div>
		);
	}

}

