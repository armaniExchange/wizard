// import React from 'react';
import Widget from '../Widget';
// import RadioButton from 'material-ui/lib/radio-button';
// <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
// 				<input type="radio"  className="mdl-radio__button" name="options" value={value} />
// 				<span className="mdl-radio__label">{children}</span>
// 			</label>

export default class Opacity extends Widget {

	getValue() {
		if (this.props.hasOwnProperty('value')) {
			return 	this.props.value;	
		} else {
			return super.getValue();
		}		
	}



}