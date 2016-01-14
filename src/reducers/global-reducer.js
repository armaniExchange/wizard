// Immutable
import { Map } from 'immutable';
import * as actionTypes from '~/constants/action-types';

const initialState = Map({});

export default function globalReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.DELETE:
			console.log('DELETE');
			return state;
		case actionTypes.UPDATE:
			console.log('UPDATE');
			return state;
		case actionTypes.ADD:
			console.log('ADD');
			return state;
		case actionTypes.GET:
			console.log('GET');
			return state;
		default:
			return state;
	}
};
