import './Widget.scss';

import React, { Component } from 'react';
import { Model } from '~/models/Model';
import { Layout } from '~/widgets/layouts/Layout';

export default class Widget extends Component {
	static propTypes = {
		className: React.PropTypes.string
	}

	mixins = [ Model, Layout ]

	prepareClasses() {
		let classes = 'widget row ' ;
		if (this.props.className) {
			classes += this.props.className;
		}		
		return classes;
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

