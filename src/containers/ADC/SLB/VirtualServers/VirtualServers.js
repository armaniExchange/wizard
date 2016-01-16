// React & Redux
import React from 'react';
import Page from '~/containers/Page';
import {FormWidget, GroupWidget, SectionWidget, FieldWidget} from '~/widgets/forms/layouts';
import {Col, Row} from '~/widgets/layouts';
import {CheckboxInput, EditableTable, Radio, RadiosInput, SelectInput, TextareaInput, TextInput, RaisedButtonWidget} from '~/widgets/forms';
import _ from '~/utils/i18n';
import AppDispatcher from '~/store/AppDispatcher';

class VirtualServers extends Page {

	componentDidMount() {
		// console.log('componentDidMount');	
		// console.log(this.props);
	}

	_demoClick() {
		AppDispatcher.dispatch({
	      actionType: 'UPDATE'
	    });
	}
	
	render() {
		// console.log(this.props);
		return (
			<FormWidget model="slb.virtual-server" action="submitForm" title="Create Virtual Server">
				
				<SectionWidget>
					
					<Col size="6">
						<FieldWidget title={_('Name')} >
							<TextInput model="slb.virtual-server.name" hintText="No special chars" />
						</FieldWidget>

						<FieldWidget title={_('IP Address/Mask Length')} >
							<TextInput model="slb.virtual-server.ip-address" hintText="8.8.8.9/24" />
						</FieldWidget>

											
					</Col>


					<Col size="6">
						<EditableTable />						
					</Col>

				</SectionWidget>

				<SectionWidget title="Advanced Fields">		
					<Col size="6">
						<FieldWidget title={_('Virtual Server Template')} createAction="adc.slb.virtual-server.template" modal="dialog" modelSize="100x300">
							<TextInput model="slb.virtual-server.template" />
						</FieldWidget>

						<FieldWidget title={_('Enabled')} >
							<RadiosInput ns="slb.virtual-server.enabled" name="test">
								<Radio value="item1" label="go to ludicrous speed" style={{marginBottom:16}}/>
								<Radio value="item2" label="go to ludicrous speed" style={{marginBottom:16}}/>
								<Radio value="item3" label="go to ludicrous speed" style={{marginBottom:16}} disabled={true}/>
							</RadiosInput>
						</FieldWidget>

						<FieldWidget title={_('Enabled Options')} >
							<GroupWidget dep="slb.virtual-server.enabled" >
								<FieldWidget>
									<TextInput model="slb.virtual-server.item_1_1" depValue="item1" />
								</FieldWidget>
								<FieldWidget>
									<TextInput model="slb.virtual-server.item_1_2" depValue="item2" />
								</FieldWidget>
							</GroupWidget>
						</FieldWidget>						
					</Col>

					<Col size="6">
		
						<FieldWidget title="Test SelectInput">
							<SelectInput />
						</FieldWidget>
						<FieldWidget title="Test TextareaInput">
							<TextareaInput />
						</FieldWidget>
						<FieldWidget title="Test CheckboxInput">
							<CheckboxInput />
						</FieldWidget>

					</Col>

				</SectionWidget>

				<Row>
					<Col>
						<FieldWidget title=" ">
							<RaisedButtonWidget primary={true} onClick={this._demoClick} label="Submit" />
							<RaisedButtonWidget secondary={false} label="Cancel" />
						</FieldWidget>						
					</Col>
				</Row>
			</FormWidget>
		);
	}
}


export default VirtualServers;