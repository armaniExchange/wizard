import React from 'react';

import Widget from '../Widget';
import Toggle from 'material-ui/lib/toggle';

export default class ToggleInput extends Widget {

	render() {
		let {
			title,
			children,
			...other
		} = this.props;

		return (
			<Widget title={title}>
				<Toggle  {...other}  onToggle={this._onAddNode.bind(this)} />
			</Widget>
		);
	}

}