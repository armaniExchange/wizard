// Styles
import './Navigation.css';
// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar navbar-default">
			    <div className="container-fluid">
				    <div className="navbar-header">
				        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					        <span className="sr-only">Toggle navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
				        </button>
				        <Link className="navbar-brand" to="/">Home</Link>
				    </div>
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				        <ul className="nav navbar-nav">
					        <li>
					            <Link to="/adc/slb">Virtual Servers</Link>
					        </li>
					        <li>
					            <Link to="/adc/slb/virtual-services">Virtual Services</Link>
					        </li>
					        <li>
					            <Link to="/adc/slb/service-groups">Service Groups</Link>
					        </li>
					        <li>
					            <Link to="/adc/slb/servers">Servers</Link>
					        </li>
					        <li>
					            <Link to="/adc/slb/policy-limits">Policy Limits</Link>
					        </li>
					        <li>
					            <Link to="/adc/slb/class-limits">Class Lists</Link>
					        </li>
					        <li>
					            <Link to="/adc/slb/application">Application</Link>
					        </li>
					        <li>
					            <Link to="/adc/slb/global">Global</Link>
					        </li>
					        <li>
					            <Link to="/adc/slb/session">Session</Link>
					        </li>
				        </ul>
				    </div>
			    </div>
			</nav>
		);
	}
}

export default Navigation;
