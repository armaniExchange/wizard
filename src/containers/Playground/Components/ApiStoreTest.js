// React & Redux
import React, { Component } from 'react';

import FlatButton from 'material-ui/lib/flat-button';
import AppDispatcher from '~/store/AppDispatcher';
import ApiStore from '~/store/ApiStore';


class ApiStoreTest extends Component {
	
	constructor(props) {
		super(props);
		this.addNode = ::this._addNode;
		this.state = {};
	}

	_addNode() {
		AppDispatcher.dispatch({
	      actionType: 'UPDATE_NODE',
	      node: 'slb.virtual-server.name',
	      value:'slbname1'
	    });
	    this.setState(ApiStore.getAllNodes());
	}
	

	
	render() {
		console.dir(this.state);
		let lists = Object.keys(this.state).map((key,i) => {
			return <li key={i}>key:{key} value:{this.state[key]}</li> ;
		});

		return (
			<main>
			 	<FlatButton label="Default" onClick={this.addNode} />

				<ul>
					{lists}
				</ul>



			</main>
		);
	}
}

export default ApiStoreTest;
