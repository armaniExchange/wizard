// React & Redux

import RaisedButton from 'material-ui/lib/raised-button';
import React from 'react';
import ContainerRoot from '~/core/ContainerRoot';
import Layout from '~/components/Layout';
import Grid from '~/components/Layout/Grid';
import DemoState from './_state';

export const PAGE_OPTIONS = {
	'SCHEMA' : 'adc/slb/virtual-server'
};


class Demo extends ContainerRoot {
	
	StateManager: DemoState

	render() {
		return (
			<Layout>
				<Grid col="6">
					<RaisedButton label="Default"  />		  
				</Grid>
				<Grid col="6">
					<h1>Test Element</h1>
				</Grid>
			</Layout>
		);
	}
}

export default Demo;
