import React, { Component } from 'react';

// layouts
export default class Layout extends Component {

	render() {
		return (
			<div className="layout mdl-grid">
				{this.props.children}
			</div>
		);
	}

}
