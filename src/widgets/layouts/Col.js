import Layout from './Layout';
import React from 'react';

// import SCSS
import './scss/Col.scss';

// layouts
export default class Col extends Layout {

	render() {
		let {
			size,
			children,
			className,
			...other
		} = this.props;

		if (!size) {
			size = 12;
		}

		let classes = 'col col-md-'+ size;

		return (
			<div className={classes} {...other} >
				{children}
			</div>
		);
	}
}
