import React from 'react';
import Widget from '../Widget';

export default class TextInput extends Widget {

	render() {
		return (
			<input type="text" name="abc" defaultValue="1" />
		);
	}
}