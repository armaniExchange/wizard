import React from 'react';

import Widget from '../Widget';
import RaisedButton from 'material-ui/lib/raised-button';

export default class RaisedButtonWidget extends Widget {

	render() {
		let {
			label, 
			children,
			...other
		} = this.props;
		return (
			  <RaisedButton label={label} {...other} />
		);
	}
}