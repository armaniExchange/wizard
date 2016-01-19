import AppDispatcher from '~/store/AppDispatcher';
import * as ActionTypes from '~/constants/action-types';
import EventEmitter from 'events';
import AXAPIModel from '~/store/AXAPIModel';

/**
 * 1. Connect to AXAPI Model
 */
var CHANGE_EVENT = 'change';

var ApiStore = {}, apiModel = new AXAPIModel();
// EventEmitter.prototype._maxListeners = 1000;


Object.assign(ApiStore, EventEmitter.prototype, {	
	// tmp prom store for other Store to use
	promise : null,

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


	addListener: function(eventName, callback) {
		this.on(eventName, callback);
	},

	removeListener: function(eventName, callback) {
		this.removeListener(eventName, callback);
	},

	emitEvent: function(eventName) {
		this.emit(eventName);
	},

	searchRecord: function(conditions={}) {
		// apiModel.setCurrentNode(node);
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
	}, 

	updatePromise: function (prom) {
		this.promise = prom;
	},

	getPromise: function () {
		return this.promise;
	}

});

// avoid the warning messages
ApiStore.setMaxListeners(1000);

ApiStore.dispatchToken = AppDispatcher.register(function(action) {
	// console.log(action, ActionTypes);
	let prom = null;
	switch (action.actionType) {

		case ActionTypes.UPDATE:
			console.log('execute UPDATE action On ApiStore');
			prom = apiModel.doUpdate(action.conditions, action.nodes);
			// ApiStore.emitChange();
			ApiStore.updatePromise(prom);
			break;

		case ActionTypes.DELETE:
			console.log('execute DELETE action  On ApiStore');
			apiModel.doDelete(action.conditions);
			// ApiStore.emitChange();
			break;

		case ActionTypes.ADD:
			console.log('execute ADD action  On ApiStore');
			apiModel.doAdd(action.nodes);
			// ApiStore.emitChange();
			break;


		case ActionTypes.UPDATE_NODE:
			// console.log('execute UPDATE NODE action');
			apiModel.updateNodeValue(action.node, action.value);
			ApiStore.emitEvent(action.node);   
			break;

		// case ActionTypes.REGISTER_NODE:
		// 	// console.log('execute UPDATE NODE action');
		// 	apiModel.registerNode(action.node);
		// 	ApiStore.emitChange();   
		// 	break;

		// called by page component mounted
		case ActionTypes.UPDATE_NODE_INFO:
			// console.log('hey, there');
			// apiModel.updateNodeInfo(ApiStore.emitChange, ApiStore);
			prom = apiModel.updateNodeInfo();
			// console.log('update node info ', prom);
			prom.then(() => {
				// console.log('promise', value);
				ApiStore.emitChange();   
			});
			// ApiStore.emitChange();
			ApiStore.updatePromise(prom);
			break;

		default:
			// console.log('do nothing');
			// do nothing
	}

});

export default ApiStore;
