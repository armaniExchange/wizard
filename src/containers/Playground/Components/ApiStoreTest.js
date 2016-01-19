// React & Redux
import React from 'react';

import {RaisedButtonWidget, TextInput, RadiosInput, Radio, ToggleInput, Opacity} from '~/widgets/forms';
// import AppDispatcher from '~/store/AppDispatcher';
import ApiStore from '~/store/ApiStore';
import Page from '~/containers/Page';
import {FormWidget, SectionWidget, FieldWidget} from '~/widgets/forms/layouts';
import {Col, Row} from '~/widgets/layouts';
// import * as Actions from '~/store/actions';

class ApiStoreTest extends Page {
	
	constructor(props) {
		super(props);
		this.showNode = ::this._showNode;
		this.showNodeInfo = ::this._showNodeInfo;
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
			actionMode,
			operateResult,
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

		// let nodeInfoList = [];
		// if (nodeInfo) {
		// 	nodeInfoList = Object.keys(nodeInfo).map((key,i) => {
		// 		return <li key={i}>key:{key} value:{nodeInfo[key]}</li> ;
		// 	});
		// }

		// let resultList = [];
		// if (operateResult) {
		// 	resultList = Object.keys(operateResult).map((key,i) => {
		// 		return <li key={i}>key:{key} value:{operateResult[key]}</li> ;
		// 	});
		// }
		
		console.log('this is state', this.state);


		return (
			<FormWidget title="API Store">
				<SectionWidget >
					<Col size="6">
						<FieldWidget>
					 		<TextInput model="slb.virtual-server.name" title="Name" helpText="test help information" />
					 	</FieldWidget>

					 	<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address11" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
							<RadiosInput model="slb.virtual-server.enabled" defaultSelected="item2" name="enabled" title="Enabled">
								<Radio value="item1" label="go to ludicrous speed" style={{marginBottom:16}}/>
								<Radio value="item2" label="go to ludicrous speed" style={{marginBottom:16}}/>
								<Radio value="item3" label="go to ludicrous speed" style={{marginBottom:16}} disabled={true}/>
							</RadiosInput>
						</FieldWidget>					 	

						<FieldWidget>
							<ToggleInput  defaultToggled={true} model="security.waf.name" title="WAF Name" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address14" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address15" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address16" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address17" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address18" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address19" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address20" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address21" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address22" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address23" title="IPv6" />
						</FieldWidget>	
				 	</Col>

				 	<Col size="6">
						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ip-address" title="IPv4" />
					 	</FieldWidget>

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address1" title="IPv6-1" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address2" title="IPv62" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address3" title="IPv63" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address4" title="IPv64" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address5" title="IPv65" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address6" title="IPv66" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address7" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address8" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address8" title="IPv6" />
						</FieldWidget>					 	

						<FieldWidget>
					 		<TextInput model="slb.virtual-server.ipv6-address10" title="IPv6" />
						</FieldWidget>					 	

										 	

						<Row>
					 		<RaisedButtonWidget label="Show Page State"  onClick={this.showNode} /> 
					 		<RaisedButtonWidget label="Show Node Info"  onClick={this.showNodeInfo} /> 
					 		<Opacity value="test-primary-key" model="slb.virtual-server.primary-key" />
					 	</Row>

						<Row>
					 		<RaisedButtonWidget label="Apply" primary={true} onClick={this.onFormSubmit}  /> 
					 	</Row>
				 	</Col>
			 	</SectionWidget>

			 	<SectionWidget>
				 	<h3> Node Value </h3>
					<ul>
						{lists}
					</ul>



				</SectionWidget>


			</FormWidget>
		);
	}
}

export default ApiStoreTest;
