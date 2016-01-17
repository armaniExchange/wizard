import * as ActionTypes from '~/constants/action-types';
import AppDispatcher from '~/store/AppDispatcher';


export function updateNode(node, value) {
	AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_NODE,
      node:  node,
      value: value
    });
}

// export function registerNode(node) {
// 	AppDispatcher.dispatch({
//       actionType: ActionTypes.REGISTER_NODE,
//       node:  node
//     });	
// }

export function updateNodeInfo() {
	// console.log('called update node info');
	AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_NODE_INFO
    });
}

// export function getWidgetProps(node) {
// 	AppDispatcher.dispatch({
//       actionType: ActionTypes.WIDGET_INFO,
//       node:  node
//     });
// }
