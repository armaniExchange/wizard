import AppDispatcher from '~/store/AppDispatcher';
import * as ActionTypes from '~/constants/action-types';
import EventEmitter from 'events';
import AXAPIModel from '~/store/AXAPIModel';

/**
 * 1. Connect to AXAPI Model
 */
var CHANGE_EVENT = 'change';

var ApiStore = {}, apiModel = new AXAPIModel();
Object.assign(ApiStore, EventEmitter.prototype, {

	init: function() {
		// console.log('init page flow store');
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param {function} callback
	 */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	searchRecord: function(node, conditions={}) {
		apiModel.setCurrentNode(node);
		return apiModel.doSearch(conditions);
	},

	getCurrentNodes: function() {

	},

	getAllNodes: function() {
		return apiModel.getAllNodes();
	},

	// get node info from server
	getNodeInfo: function(node) {
		return apiModel.getNodeInfo(node);
	},

	getOperateDetail: function(node) {
		apiModel.setCurrentNode(node);
		return apiModel.getOperateDetail();
	}

});

ApiStore.dispatchToken = AppDispatcher.register(function(action) {
	// console.log(action, ActionTypes);
	switch (action.actionType) {

		case ActionTypes.UPDATE:
			// console.log('execute UPDATE action');
			apiModel.doUpdate();
			ApiStore.emitChange();
			break;

		case ActionTypes.DELETE:
			// console.log('execute DELETE action');
			apiModel.doDelete();
			ApiStore.emitChange();
			break;

		case ActionTypes.ADD:
			// console.log('execute ADD action');
			ApiStore.emitChange();
			break;

		case ActionTypes.SEARCH:
			// console.log('execute SEARCH action');
			apiModel.doSearch();
			ApiStore.emitChange();
			break;

		case ActionTypes.STATUS:
			// console.log('execute Operate status action');
			ApiStore.emitChange();
			break;

		case ActionTypes.UPDATE_NODE:
			// console.log('execute UPDATE NODE action');
			apiModel.updateNodeValue(action.node, action.value);
			ApiStore.emitChange();   
			break;

		// case ActionTypes.REGISTER_NODE:
		// 	// console.log('execute UPDATE NODE action');
		// 	apiModel.registerNode(action.node);
		// 	ApiStore.emitChange();   
		// 	break;

		// called by page component mounted
		case ActionTypes.UPDATE_NODE_INFO:
			// console.log('hey, there');
			apiModel.updateNodeInfo(ApiStore.emitChange, ApiStore);
			// ApiStore.emitChange();
			break;

		default:
			// console.log('do nothing');
			// do nothing
	}

});

export default ApiStore;
