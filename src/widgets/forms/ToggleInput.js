import React from 'react';

import Widget from '../Widget';
import Toggle from 'material-ui/lib/toggle';

export default class ToggleInput extends Widget {
	getValue() {
		// console.log(this);
		return 	this.refs.Toggle.isToggled();
	}
	
	clearValue() {
		this.setValue(false);
	}

	setValue(newValue) {
		this.refs.Toggle.setToggled(newValue);
	}

	render() {
		let {
			title,
			children,
			helpText,
			...other
		} = this.props;

		return (
			<Widget title={title} helpText={helpText} errorText={this.state.errorText}>
				<Toggle  ref="Toggle" {...other}  onToggle={this.onAddNode} />
			</Widget>
		);
	}

}