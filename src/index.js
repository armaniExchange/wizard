// Styles
import './assets/styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/material-design-lite/material.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Store
import configureStore from './store/configureStore';
// Routes
import appRoutes from './routes/appRoutes';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
	    {appRoutes}
	</Provider>,
	document.getElementById('root')
);
