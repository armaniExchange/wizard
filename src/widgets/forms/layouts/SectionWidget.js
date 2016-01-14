import React from 'react';
import Widget from '../../Widget';
import './scss/SectionWidget.scss';

export default class SectionWidget extends Widget {

	render() {
		let {
			title,
			children,
			...other
		} = this.props;

		let titleBar = '';
		if (title) {
			titleBar = <div className="panel-heading">{title}</div>;
		}

		return (
			<div className='widget section' {...other} >
				<div className="panel panel-default">
				  {titleBar}
				  <div className="panel-body">
				  	<div className="row">
				    	{children}
				    </div>
				  </div>
				</div>			
			</div>
		);
	}	
}
