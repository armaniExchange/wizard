import React from 'react';
import Widget from '../Widget';
import TextField from 'material-ui/lib/text-field';

export default class TextInput extends Widget {

	getValue() {
		// console.log(this);
		return 	this.refs.TextField.getValue();
	}
	
	clearValue() {
		this.refs.TextField.clearValue();
	}

	setValue(newValue) {
		this.refs.TextField.setValue(newValue);
	}


	render() {
		let {
			title,
			helpText,
			model,
			children,
			...other
		} = this.props;
		

		if (!helpText && this.state.nodeInfo && this.state.nodeInfo['validation'] && this.state.nodeInfo['validation']['description']) {
			// console.log('render', this.state.nodeInfo['validation']['description']);
			helpText = this.state.nodeInfo['validation']['description'];
		}

		// console.log('node info', this.state.nodeInfo);
		return (
			<Widget title={title} helpText={helpText} errorText={this.state.errorText}>
				<TextField ref="TextField" onBlur={this.onAddNode} {...other}>{children}</TextField>
			</Widget>
		);
	}
}