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

export function actionUpdate(conditions=null, nodes=null) {
	AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE,
      nodes:  nodes,
      conditions: conditions
    });
}

export function actionAdd(nodes=null) {
	AppDispatcher.dispatch({
      actionType: ActionTypes.ADD,
      nodes:  nodes,
    });
}

export function actionDelete(conditions) {
	AppDispatcher.dispatch({
      actionType: ActionTypes.DELETE,
      conditions: conditions
    });
}
