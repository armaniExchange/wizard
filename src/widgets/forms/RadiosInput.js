import React from 'react';

import Widget from '../Widget';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

export default class RadiosInput extends Widget {

	render() {
		let {
			children,
			...other
		} = this.props;

		return (
			<RadioButtonGroup {...other}>{children}</RadioButtonGroup>
		);
	}
}