// Styles
import './assets/styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Routes
import appRoutes from './routes/appRoutes';

ReactDOM.render(
	<div>
	    {appRoutes}
	</div>,
	document.getElementById('root')
);
