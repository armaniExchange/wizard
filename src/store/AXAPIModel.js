import Model from '~/store/Model';
import NS from '~/utils/ns';

class AXAPIModel extends Model {
	constructor(props) {
		super(props);
		this._nodeInfo = {};
	}

	setCurrentNode(node) {
		this.currentNode = node;
	}

	updateNodeValue(node, value=null) {
		// if (node.indexOf(node, 'root') !== 0 ) {
		// 	node = 'root.'+ node;
		// }
		this.storage = {node:node, value:value};
		this.currentNode = node;
		// console.log('updated storage', this.storage);
		// const data = NS.initializeNS(node, value);
		// console.log(data);
		let obj = this.toApiObject();
		console.log(obj);
	}

	toApiObject() {
		let apiObj = {}, tmpObj = {}, storage = this.storage;
		// console.log(this.storage);
		for (var node in storage) {
			if (storage[node] !== undefined) {
				tmpObj = NS.initializeNS(node, this.storage[node]);
				// console.log(tmpObj);
				apiObj = NS.merge(apiObj, tmpObj);
			}			
		}
		return apiObj;
	}

	getAllNodes() {
		// console.log('get all nodes from AXAPI MODEL', this.storage);
		return this.storage;
	}

	doDelete(conditions) {
		console.log('Model Delete', conditions);
		return true;
	}

	doAdd(records) {
		console.log('Model Add', records);
		return {};
	}

	doUpdate(records, conditions={}) {
		console.log('Model Update', records, conditions);

		return {};
	}

	doSearch(conditions={}) {
		console.log('Model Search', conditions);
		return {};
	}

	getOperateDetail(record, conditions={}) {
		console.log('get Operate Detail', conditions);
		/*
		 * {
		 	code: 0, 
		 	errors: {
		 		item1: {return:0, send:1},
		 		item2: {return:'String1', send:'String2'}
		 * }, }
		 */
		return {};
	}

	getNodeInfo(node=null) {
		// console.log('get info', node);
		let nodeInfo = this._nodeInfo;
		// console.log(nodeInfo);
		if (node && nodeInfo.hasOwnProperty(node)) {
			// console.log('here');
			return nodeInfo[node];
		} else {
			console.log('get all node info:model');
			return nodeInfo;
		}
	} 

	// only call once on one page
	updateNodeInfo() {

		if (this._nodeInfo.length) {
			//this._nodeInfo = {};
			// console.log(this._nodeInfo);
			return ;
		}
		// console.log('updated--- node info');

		// let keys = Object.keys(this.storage);
		// console.log('nodeinfo', keys);
		// those data for demo only, need get data from remote and update the store data

		const self = this;
		let prom = new Promise(function (resolve) {
		    setTimeout(
		   		function() {
					for (let key in self.storage) {
						if (key) {
							self._nodeInfo[key] = {
								'path': key.replace('.', '/'), //'slb/virtual-server/{name}/',
								'validation': {
						            'type':'string',
						            'format':'string-rlx',
						            'minLength':1,
						            'maxLength':127,
						            'description':'SLB Virtual Server Name',
						            'optional':false
						        }
							};
						}
					}
					// console.log('timeout');

					// TODO: callback, binder is ApiStore, use promise instead of callback
					// if (callback) {
					// 	callback.apply(binder);
					// }
					// console.log(self._nodeInfo);
					resolve(self._nodeInfo);
			    }, 
				1000
			);
		});

		return prom;
	}


}

export default AXAPIModel;