import React from 'react';
import Widget from '../../Widget';

export default class FieldWidget extends Widget {

	render() {
		let {
			children,
			...other
		} = this.props;

	
		return (
			<div className="" >
			  {children}		
			</div>
		);
	}	
}
