// React & Redux
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Map } from 'immutable';
// import { combineReducers } from 'redux';

//Import statements:
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import FontIcon from 'material-ui/lib/font-icon';
import ToggleStar from 'material-ui/lib/svg-icons/toggle/star';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

class Mui extends Component {
	constructor(props) {
		super(props);
		this.state = {value: 2};
	}



	tryClick = () => {
		// this.state.value = 3;
		// this.forceUpdate(); 
		// React.findDOMNode('');
		this.setState({'value':4});
		// console.log(this.state);
	}

	handleChange = (event, index, value) => this.setState({value});

	render() {
		// console.log('rendering');
		// const {value1, value2} = this.props;
		// const {test1, test2} = this.props.appActions;
		return (
			<main>
			 	<FlatButton label="Default" onClick={this.tryClick} />

				<FlatButton label="Primary" primary={true}  />

				<FlatButton label="Secondary" secondary={true}   />



				<FlatButton label="Disabled" disabled={true} />

				<RaisedButton label="Default" />

				<RaisedButton label="Primary" primary={true} />

				<RaisedButton label="Secondary" secondary={true} />


				<RaisedButton label="Disabled" disabled={true} />			
				

				<FloatingActionButton>
				  <ToggleStar />
				</FloatingActionButton>
				<FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} />

				<FloatingActionButton iconClassName="muidocs-icon-action-grade" secondary={true} />
				<FloatingActionButton secondary={true} mini={true} linkButton={true}
				  href="https://github.com/callemall/material-ui">
				  <ToggleStar />
				</FloatingActionButton>

				<FloatingActionButton disabled={true}>
				  <FontIcon className="muidocs-icon-action-grade" />
				</FloatingActionButton>
				<FloatingActionButton iconClassName="muidocs-icon-action-grade" disabled={true} mini={true} />

				<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
					<RadioButton
					  value="light"
					  label="prepare for light speed"
					  style={{marginBottom:16}} />
					<RadioButton
					  value="not_light"
					  label="light speed too slow"
					  style={{marginBottom:16}}/>
					<RadioButton
					  value="ludicrous"
					  label="go to ludicrous speed"
					  style={{marginBottom:16}}
					  disabled={true}/>
				</RadioButtonGroup>

			    <SelectField value={this.state.value} onChange={this.handleChange}>
			        <MenuItem value={1} primaryText="Never"/>
			        <MenuItem value={2} primaryText="Every Night"/>
			        <MenuItem value={3} primaryText="Weeknights"/>
			        <MenuItem value={4} primaryText="Weekends"/>
			        <MenuItem value={5} primaryText="Weekly"/>
		      	</SelectField>



			</main>
		);
	}
}

// Mui.propTypes = {
// 	value1: React.PropTypes.string.isRequired,
// 	value2: React.PropTypes.string.isRequired,
// 	appActions: React.PropTypes.object.isRequired
// };

// const ACTION_ADD = 'action_add';
// const ACTION_DELETE = 'action_delete';

// const initialState = Map({
// 	data: ''
// });

// function action_add() {
// 	return {
// 		type: ACTION_ADD,
// 		data: 'hello'
// 	};
// }

// function action_delete() {
// 	return {
// 		type: ACTION_DELETE,
// 		data: 'hello'
// 	};
// }

// function reducer_add(state = initialState, action) {
// 	state.update('data', action.data);
// 	return state;
// }

// function reducer_delete(state = initialState, action) {
// 	state.update('data', 'deleted');
// 	console.log('delete', action);
// 	return state;
// }

// const rootReducer = combineReducers({
// 	reducer_add, 
// 	reducer_delete
// });

// console.log('-----------------Reducer------------');
// console.log(rootReducer);

// function mapStateToProps(state, dispatch) {
// 	console.log('-----------------STATE------------');
// 	console.log(state, dispatch);
// 	return {
// 		value1: 'this is Value1',
// 		value2: 'this is Value2, yes'
// 	};
// }

// // function mapDispatchToProps(dispatch) {
// // 	let AppActions = {
// // 		test1 : () => console.log('test1'),
// // 		test2 : () => console.log('test2')
// // 	};

// // 	return {
// // 		appActions: bindActionCreators(AppActions, dispatch)
// // 	};
// // }
// function mapDispatchToProps(dispatch) {
// 	const AppActions = {
// 		test1 : action_add,
// 		test2 : action_delete
// 	};

// 	return {
// 		appActions: bindActionCreators(AppActions, dispatch)
// 	};
// }


// const componentNew = connect(mapStateToProps, mapDispatchToProps)(Mui);
// console.log(Mui.store);
export default Mui;
