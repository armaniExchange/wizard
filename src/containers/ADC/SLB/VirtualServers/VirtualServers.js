// React & Redux
import React from 'react';
import Page from '~/containers/Page';
import {FormWidget, GroupWidget, SectionWidget, FieldWidget} from '~/widgets/forms/layouts';
import {Row, Col} from '~/widgets/layouts';
import {CheckboxInput, EditableTable, Radio, RadiosInput, SelectInput, TextareaInput, TextInput, RaisedButtonWidget} from '~/widgets/forms';
import _ from '~/utils/i18n';

class VirtualServers extends Page {
	render() {
		return (
			<FormWidget model="slb.virtual_server" action="submitForm" >
				
				<SectionWidget>
					<Row>
						<Col cols="8">
							<FieldWidget leftTitle={_('Name')} >
								<TextInput model="slb.virtual_server.name" />
							</FieldWidget>
							<FieldWidget leftTitle={_('Virtual Server Template')} createAction="adc.slb.virtual_server.template" modal="dialog" modelSize="100x300">
								<TextInput model="slb.virtual_server.template" />
							</FieldWidget>
						</Col>
						<Col cols="4">
							<FieldWidget leftTitle={_('Enabled')} >
								<RadiosInput ns="slb.virtual_server.enabled">
									<Radio value="item1">Item1</Radio>
								</RadiosInput>
							</FieldWidget>
							<FieldWidget leftTitle={_('Enabled Options')} >

								<GroupWidget dep="slb.virtual_server.enabled" >
									<FieldWidget>
										<TextInput model="slb.virtual_server.item_1_1" depValue="item1" />
									</FieldWidget>
									<FieldWidget>
										<TextInput model="slb.virtual_server.item_1_2" depValue="item2" />
									</FieldWidget>
								</GroupWidget>
							</FieldWidget>
							
						</Col>
					</Row>
				</SectionWidget>

				<SectionWidget>
					<Row>
						<Col>
							<FieldWidget topTitle="Test Editable">
								<EditableTable />
							</FieldWidget>
							<FieldWidget topTitle="Test SelectInput">
								<SelectInput />
							</FieldWidget>
							<FieldWidget topTitle="Test TextareaInput">
								<TextareaInput />
							</FieldWidget>
							<FieldWidget topTitle="Test CheckboxInput">
								<CheckboxInput />
							</FieldWidget>
							<FieldWidget topTitle="Test RaiseButton">
								<RaisedButtonWidget />
							</FieldWidget>
						</Col>
					</Row>
				</SectionWidget>
			</FormWidget>
		);
	}
}


export default VirtualServers;