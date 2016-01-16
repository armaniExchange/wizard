// React & Redux
import React from 'react';

import {RaisedButtonWidget, TextInput} from '~/widgets/forms';
// import AppDispatcher from '~/store/AppDispatcher';
// import ApiStore from '~/store/ApiStore';
import Page from '~/containers/Page';


class ApiStoreTest extends Page {
	
	constructor(props) {
		super(props);
		// this.addNode = ::this._addNode;
		this.state = {};
	}

	// _addNode() {
	// 	AppDispatcher.dispatch({
	//       actionType: 'UPDATE_NODE',
	//       node: 'slb.virtual-server.name',
	//       value:'slbname1'
	//     });
	//     this.setState(ApiStore.getAllNodes());
	// }
	

	
	render() {
		console.dir(this.state);
		let lists = Object.keys(this.state).map((key,i) => {
			return <li key={i}>key:{key} value:{this.state[key]}</li> ;
		});

		return (
			<main>
			 	<RaisedButtonWidget label="Add A Node"  />
			 	<TextInput model="slb.virtual-server.name" />
			 	<TextInput model="slb.virtual-server.ip-address" />

				<ul>
					{lists}
				</ul>



			</main>
		);
	}
}

export default ApiStoreTest;
