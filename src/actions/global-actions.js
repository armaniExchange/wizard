// Libraries
// import request from 'superagent';
// Constants
import * as actionTypes from '../constants/action-types';


export function demo() {
	return {
		type: actionTypes.NONE
		
	};
}

export function del() {
	return {
		type: actionTypes.DELETE
		
	};
}

export function add() {
	return {
		type: actionTypes.ADD
		
	};
}

export function update() {
	return {
		type: actionTypes.UPDATE
		
	};
}

export function get() {
	return {
		type: actionTypes.GET
		
	};
}

// export function logout(cb) {
// 	return (dispatch) => {
// 		return request
// 			.post(SERVER_API_URL)
// 			.withCredentials()
// 			.set('Content-Type', 'application/graphql')
// 			.send(`
// 				mutation RootMutationType {
// 				    logout
// 				}
// 			`)
// 			.end((err, res) => {

// 			});
// 	};
// };
