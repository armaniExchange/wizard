import React, { Component } from 'react';
import { Model } from '~/models/Model';
import { Layout } from '~/widgets/layouts/Layout';

export default class Widget extends Component {
	mixins = [ Model, Layout ]

	constructor(props) {
		super(props);
	}
	
	save() {

	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}

}

