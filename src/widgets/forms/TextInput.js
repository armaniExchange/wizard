import React from 'react';
import Widget from '../Widget';
import TextField from 'material-ui/lib/text-field';

export default class TextInput extends Widget {

	render() {
		let {
			title,
			children,
			...other
		} = this.props;
		
		// console.log(this.state);
		return (
			<Widget title={title}>
				<TextField  onChange={this._onAddNode.bind(this)} {...other}>{children}</TextField>
			</Widget>
		);
	}
}