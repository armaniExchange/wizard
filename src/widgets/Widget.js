import './widget.scss';

import React, { Component } from 'react';
import { Model } from '~/models/Model';
import { Layout } from '~/widgets/layouts/Layout';

export default class Widget extends Component {
	mixins = [ Model, Layout ]


	render() {
		return (
			<div className="widget">
				{this.props.children}
			</div>
		);
	}

}

