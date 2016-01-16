import * as ActionTypes from '~/constants/action-types';
import AppDispatcher from '~/store/AppDispatcher';


export function addNode(node, value) {
	AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_NODE,
      node:  node,
      value: value
    });
}
