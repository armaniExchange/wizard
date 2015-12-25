// Immutable
import { Map } from 'immutable';

const initialState = Map({});

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
};
