// Libraries
import React from 'react';
import Router, { Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
// Components
import App from '../containers/App/App';
import SystemPage from '../containers/Dashboard/System/System.js';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';
// SLB
import VirtualServers from '../containers/ADC/SLB/VirtualServers/VirtualServers.js';
import VirtualServerices from '../containers/ADC/SLB/VirtualServices/VirtualServices.js';
import ServiceGroups from '../containers/ADC/SLB/ServiceGroups/ServiceGroups.js';
import Servers from '../containers/ADC/SLB/Servers/Servers.js';
import PolicyLimits from '../containers/ADC/SLB/PolicyLimits/PolicyLimits.js';
import ClassLists from '../containers/ADC/SLB/ClassLists/ClassLists.js';
import Application from '../containers/ADC/SLB/Application/Application.js';
import Global from '../containers/ADC/SLB/Global/Global.js';
import Session from '../containers/ADC/SLB/Session/Session.js';
// playground for components and other demo code
import Components from '../containers/Playground/Components';

const appRoutes = (
	<Router history={createBrowserHistory()}>
		<Route path="/" component={App}>
		    <IndexRoute component={SystemPage}/>
		    <Route path="/adc">
		    	<IndexRoute component={VirtualServers}/>
		    	<Route path="/adc/slb">
		    	    <IndexRoute component={VirtualServers} />
		    		<Route path="/adc/slb/virtual-services" component={VirtualServerices} />
		    		<Route path="/adc/slb/service-groups" component={ServiceGroups} />
		    		<Route path="/adc/slb/servers" component={Servers} />
		    		<Route path="/adc/slb/policy-limits" component={PolicyLimits} />
		    		<Route path="/adc/slb/class-limits" component={ClassLists} />
		    		<Route path="/adc/slb/application" component={Application} />
		    		<Route path="/adc/slb/global" component={Global} />
		    		<Route path="/adc/slb/session" component={Session} />
		    		<Route path="/adc/slb/virtual-servers" component={VirtualServers} />
		    	</Route>
		    </Route>
		    <Route path="/playground">
		    	<IndexRoute component={Components}/>
		    </Route>
	        <Route path="*" component={NotFoundPage} />
	    </Route>
	</Router>
);

export default appRoutes;
