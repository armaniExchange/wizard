import React from 'react';
import Widget from '../Widget';
import RadioButton from 'material-ui/lib/radio-button';

export default class Radio extends Widget {

	render() {
		return (
			<RadioButton
			  name="radiome"
			  value="radio2"
			  label="fed the dog"
			  defaultChecked={true}/>
		);
	}
}