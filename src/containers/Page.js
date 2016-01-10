import { Component } from 'react';
import GlobalConfig from '~/constants/Configs';

export default class Page extends Component {
	mixins = [GlobalConfig]
}