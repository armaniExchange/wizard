import React from 'react';


class Grid extends React {
	
	render() {
		return (
			<div className="mdl-col-6">
				 {this.props.children}
			</div>
		);
	}
}

export default Grid;
