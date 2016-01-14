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
			<div className="mdl-layout mdl-js-layout ">
			  <header className="mdl-layout__header  mdl-layout__header--scroll">
			    <div className="mdl-layout__header-row">
			      <span className="mdl-layout-title">A10</span>
			      <div className="mdl-layout-spacer"></div>
			      <nav className="mdl-navigation mdl-layout--large-screen-only">
			      <a className="mdl-navigation__link" href="/playground">Playground</a>
			      <a className="mdl-navigation__link" href="/adc/slb/virtual-servers">ADC</a>
			      <a className="mdl-navigation__link" href="">Networks</a>
			      <a className="mdl-navigation__link" href="">System</a>
			      </nav>
			    </div>
			  </header>
			  <div className="mdl-layout__drawer">
			    <span className="mdl-layout-title">Title</span>
			    <nav className="mdl-navigation">
			      <a className="mdl-navigation__link" href="/playground">Playground</a>
			      <a className="mdl-navigation__link" href="/adc/slb/virtual-servers">ADC</a>
			      <a className="mdl-navigation__link" href="">Networks</a>
			      <a className="mdl-navigation__link" href="">System</a>
			    </nav>
			  </div>
			  {this.props.children}
			</div>
		);
	}
}

export default Navigation;
