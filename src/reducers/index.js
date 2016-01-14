import { combineReducers } from 'redux';
import app from './app-reducer';
import global from './global-reducer';

const rootReducer = combineReducers({
	app,
	global
});

export default rootReducer;
