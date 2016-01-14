import Exports from '~/components/mixins/exports';
import State from '~/components/mixins/State';
import React, { Component } from 'react';

class ContainerRoot extends Component {
	mixins:[Exports, State]


	render() {
		return (
			<main>Hello you!</main>
		);
	}
}

export default ContainerRoot;