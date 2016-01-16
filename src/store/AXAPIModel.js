import Model from '~/store/Model';
import NS from '~/utils/ns';

class AXAPIModel extends Model {
	setCurrentNode(node) {
		this.currentNode = node;
	}

	updateNodeValue(node, value=null) {
		if (node.indexOf(node, 'root') !== 0 ) {
			node = 'root.'+ node;
		}
		this.storage = {node:node, value:value};
		this.currentNode = node;
		// console.log('updated storage', this.storage);
		// const data = NS.initializeNS(node, value);
		// console.log(data);
		// let obj = this.toApiObject();
		// console.log(obj);
	}

	toApiObject() {
		let apiObj = {}, tmpObj = {}, storage = this.storage;
		// console.log(this.storage);
		for (var node in storage) {
			if (storage[node]) {
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


}

export default AXAPIModel;