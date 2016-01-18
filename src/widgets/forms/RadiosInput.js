import React from 'react';

import Widget from '../Widget';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

export default class RadiosInput extends Widget {

	render() {
		let {
			title,
			children,
			...other
		} = this.props;

		return (
			<Widget title={title}>
				<RadioButtonGroup onChange={this._onAddNode.bind(this)}  {...other}>{children}</RadioButtonGroup>
			</Widget>
		);
	}
}