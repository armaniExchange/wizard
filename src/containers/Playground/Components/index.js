// React & Redux
import React from 'react';
// import VirtualServerPage from '../../../widgets/base';
import {FormWidget, GroupWidget, SectionWidget, FieldWidget} from '~/widgets/forms/layouts'; //
import {Row, Col} from '~/widgets/layouts';
// import {CheckboxInput, EditableTable, Radio, RadiosInput, SelectInput, TextareaInput, TextInput, RaisedButtonWidget} from '~/widgets/forms';
import {RaisedButtonWidget} from '~/widgets/forms';
// import _ from '~/utils/i18n';
// import AppDispatcher from '~/store/AppDispatcher';
import Page from '~/containers/Page';

class Components extends Page {
	constructor(props) {
    	super(props);
	}
	


	render() {
		return (
			<FormWidget>	
				<SectionWidget>								
					<GroupWidget>
						<Row>
							<Col>
								<FieldWidget>
									<RaisedButtonWidget />
								</FieldWidget>
							</Col>
							<Col>
								<FieldWidget>aasdf</FieldWidget>
							</Col>
						</Row>
					</GroupWidget>
				</SectionWidget>
			</FormWidget>
		);
	}
}

export default Components;
