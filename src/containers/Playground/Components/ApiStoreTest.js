// React & Redux
import React from 'react';

import {RaisedButtonWidget, TextInput} from '~/widgets/forms';
// import AppDispatcher from '~/store/AppDispatcher';
import ApiStore from '~/store/ApiStore';
import Page from '~/containers/Page';


class ApiStoreTest extends Page {
	
	constructor(props) {
		super(props);
		this.showNode = ::this._showNode;
		this.showNodeInfo = ::this._showNodeInfo;
		this.state = {};
	}

	_showNode() {
		// AppDispatcher.dispatch({
	 //      actionType: 'UPDATE_NODE',
	 //      node: 'slb.virtual-server.name',
	 //      value:'slbname1'
	 //    });
		console.log('state');
		let allNodes = ApiStore.getAllNodes();
	    this.setState(allNodes);
	}
	
	_showNodeInfo() {
		// AppDispatcher.dispatch({
	 //      actionType: 'UPDATE_NODE',
	 //      node: 'slb.virtual-server.name',
	 //      value:'slbname1'
	 //    });
		console.log('node info');
		let nodeInfo = ApiStore.getNodeInfo();
		console.log(nodeInfo);
	    // this.setState(nodeInfo);
	}
	

	
	render() {
		// console.dir(this.state);
		let {
			nodeInfo, 
			...otherData
		} = this.state;

		let lists = [];
		if (otherData) {
			// console.log('state',this.state);
			lists = Object.keys(otherData).map((key,i) => {
				return <li key={i}>key:{key} value:{otherData[key]}</li> ;
			});
		}

		let nodeInfoList = [];
		if (nodeInfo) {
			nodeInfoList = Object.keys(nodeInfo).map((key,i) => {
				return <li key={i}>key:{key} value:{nodeInfo[key]}</li> ;
			});
		}
		


		return (
			<main>
				<div >
				 	<TextInput model="slb.virtual-server.name" />
				 	<TextInput model="slb.virtual-server.ip-address" />
				 	<br/>

				 	<RaisedButtonWidget label="Show Page State"  onClick={this.showNode} /> <br/>
				 	<RaisedButtonWidget label="Show Node Info"  onClick={this.showNodeInfo} /> <br/>
			 	</div>

			 	<div>
				 	<h3> Node Value </h3>
					<ul>
						{lists}
					</ul>

					<h3> Node Info </h3>
					<ul>
						{nodeInfoList}
					</ul>

				</div>


			</main>
		);
	}
}

export default ApiStoreTest;
