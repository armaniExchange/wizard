import Model from '~/store/Model';

class AXAPIModel extends Model {
	setCurrentNode(node) {
		this.currentNode = node;
	}

	updateNodeValue(node, value=null) {
		this.storage = {node:node, value:value};
		this.currentNode = node;
		// console.log('updated storage', this.storage);
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