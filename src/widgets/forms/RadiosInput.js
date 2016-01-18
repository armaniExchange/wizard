import React from 'react';

import Widget from '../Widget';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

export default class RadiosInput extends Widget {
	getValue() {
		// console.log(this);
		return 	this.refs.RadioButtonGroup.getSelectedValue();
	}
	
	clearValue() {
		this.refs.RadioButtonGroup.clearValue();
	}

	setValue(newValue) {
		this.refs.RadioButtonGroup.setSelectedValue(newValue);
	}

	render() {
		let {
			title,
			children,
			...other
		} = this.props;

		return (
			<Widget title={title}>
				<RadioButtonGroup ref="RadioButtonGroup" onChange={this.onAddNode}  {...other}>{children}</RadioButtonGroup>
			</Widget>
		);
	}
}