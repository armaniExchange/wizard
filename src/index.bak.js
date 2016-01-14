// Styles
import './assets/styles/index.css';
import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

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
