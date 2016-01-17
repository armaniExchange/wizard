import React from 'react';
import Widget from '../Widget';
import TextField from 'material-ui/lib/text-field';

export default class TextInput extends Widget {

	render() {
		let {
			children,
			...other
		} = this.props;
		
		// console.log(this.state);
		return (
			<TextField onChange={this._onAddNode.bind(this)} {...other}>{children}</TextField>
		);
	}
}