// Styles
import './Navigation.css';
// Libraries
import React, { Component } from 'react';
// import { Link } from 'react-router';
// import IconMenu from 'material-ui/lib/menus/icon-menu';
// import IconButton from 'material-ui/lib/icon-button';
// import FontIcon from 'material-ui/lib/font-icon';
// import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
// import MenuItem from 'material-ui/lib/menus/menu-item';
// import Menu from 'material-ui/lib/menus/menu';
// import DropDownMenu from 'material-ui/lib/DropDownMenu';
// import RaisedButton from 'material-ui/lib/raised-button';
// import Toolbar from 'material-ui/lib/toolbar/toolbar';
// import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
// import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
// import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
// import Divider from 'material-ui/lib/menus/menu-divider';
// import ArrowDropRight from 'material-ui/lib/svg-icons/navigation-arrow-drop-right';
import AppBar from 'material-ui/lib/app-bar';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
	    	slideIndex: 0,
	    };
	}

	handleChange = (value) => {
	    this.setState({
	      slideIndex: value,
	    });
	 }

	render() {
		return (
			<AppBar title="A10">
			    <Tabs
		          onChange={this.handleChange}
		          value={this.state.slideIndex}
		        >
		          <Tab label="Tab One" value={0} />
		          <Tab label="Tab Two" value={1} />
		          <Tab label="Tab Three" value={2} />
		        </Tabs>
			</AppBar>
		);
	}
}

export default Navigation;
