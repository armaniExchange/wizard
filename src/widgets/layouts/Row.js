import Layout from './Layout';
import React from 'react';

// import SCSS
import './scss/Row.scss';

// layouts
export default class Row extends Layout {
	render() {		
		let {
			size,
			children,
			...other
		} = this.props;

		if (!size) {
			size = 12;
		}

		return (
			<div className="widget">
				{children}
			</div>
		);
	}
}
