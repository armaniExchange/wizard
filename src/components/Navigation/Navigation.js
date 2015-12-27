// Styles
import './Navigation.css';
// Libraries
import React, { Component } from 'react';

class Navigation extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	//     	slideIndex: 0,
	//     };
	// }


	render() {
		return (
			<nav className="blue">
				<div className="nav-wrapper">
					<div className="main-menu">
						<ul id="dropdown1" className="dropdown-content">
						  <li><a href="#!">one</a></li>
						  <li><a href="#!">two</a></li>
						  <li className="divider"></li>
						  <li><a href="#!">three</a></li>
						</ul>
						<ul className="hide-on-med-and-down">
						  <li><a href="#!">A10</a></li>
						  <li><a href="sass.html">Sass</a></li>
						  <li><a href="badges.html">Components</a></li>
						  <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
						</ul>
					</div>

					<ul className="right hide-on-med-and-down">
					    <li><a href="sass.html"><i className="material-icons">search</i></a></li>
					    <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
					    <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
					    <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navigation;
