// React & Redux
import React, { Component } from 'react';
// import RaisedButton from 'material-ui/lib/raised-button';
// import IconMenu from 'material-ui/lib/menus/icon-menu';
// import IconButton from 'material-ui/lib/icon-button';
// import FontIcon from 'material-ui/lib/font-icon';
// import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
// import MenuItem from 'material-ui/lib/menus/menu-item';
// import DropDownMenu from 'material-ui/lib/DropDownMenu';
// import RaisedButton from 'material-ui/lib/raised-button';
// import Toolbar from 'material-ui/lib/toolbar/toolbar';
// import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
// import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
// import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import {Row, Input, Button, Icon} from 'react-materialize';

class Components extends Component {
	constructor(props) {
    	super(props);
    	this.state = {value: 2};
	}
	
	handleChange = (e, index, value) => this.setState({value});


	render() {
		return (
			<main>
			 <div className="row">
			 	<h4 className="header">Form Show</h4>

			    <form className="col s12">
			      <fieldset>
			      	  <legend>Basic</legend>
				      <div className="row">
				        <div className="input-field col s6">
				          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
				          <label htmlFor="first_name">First Name</label>
				        </div>
				        <div className="input-field col s6">
				          <input id="last_name" type="text" className="validate"/>
				          <label htmlFor="last_name">Last Name</label>
				        </div>
				      </div>
				      <div className="row">
				        <div className="input-field col s12">
				          <input disabled value="I am not editable" id="disabled" type="text" className="validate"/>
				          <label htmlFor="disabled">Disabled</label>
				        </div>
				      </div>
				      <div className="row">
				        <div className="input-field col s12">
				          <input id="password" type="password" className="validate"/>
				          <label htmlFor="password">Password</label>
				        </div>
				      </div>
				      <div className="row">
				        <div className="input-field col s12">
				          <input id="email" type="email" className="validate"/>
				          <label htmlFor="email">Email</label>
				        </div>
				      </div>
			      </fieldset>


			      <fieldset>
			      	<legend>Select</legend>
						<Row>
						  <Input s={12} type='select' label="Materialize Select">
						    <option value='1'>Option 1</option>
						    <option value='2'>Option 2</option>
						    <option value='3'>Option 3</option>
						  </Input>
						</Row>			   				
			      </fieldset>

			      <fieldset>
			      	<legend>switch</legend>
			      	<div className="div">
			      		<div className="switch">
						    <label>
						      Off
						      <input type="checkbox" />
						      <span className="lever"></span>
						      On
						    </label>
						</div>
			      	</div>
			      </fieldset>

			      <Row>
			      	<Button node='a' waves='light'><Icon right>file_cloud</Icon> Submit</Button>
			      </Row>
			    </form>
			  </div>
			</main>
		);
	}
}

export default Components;
