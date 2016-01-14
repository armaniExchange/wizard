// Styles
import './assets/styles/index.css';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Store
import store from '~/core/Store';
// Routes
import Route from '~/core/Route';

const appRoutes = new Route();

ReactDOM.render(
	<Provider store={store}>
	    {appRoutes}
	</Provider>,
	document.getElementById('root')
);
