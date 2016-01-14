import React from 'react';
import Widget from '../../Widget';

export default class FieldWidget extends Widget {

	render() {
		let {
			title,
			children,
			...other
		} = this.props;

		// console.log(this.props);
		if (!title) {
			title = 'Title';
		}

		return (
			<div className="mdl-grid" >
			  <div className="mdl-cell mdl-cell--4-col">{title}</div>
			  <div className="mdl-cell mdl-cell--8-col">{children}</div>
			  <div className="mdl-cell mdl-cell--12-col mdl-cell--hide-desktop">description</div>				
			</div>
		);
	}	
}
