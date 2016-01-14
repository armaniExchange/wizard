import React from 'react';
import Widget from '~/widgets/Widget';

export default class FormWidget extends Widget {

	render() {
		let {
			title,
			children,
			...other
		} = this.props;

		return (
			<div className="widget form" {...other}>
				<h4>{title}</h4>
				{this.props.children}
			</div>
		);
	}	
}
