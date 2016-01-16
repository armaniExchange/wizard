import Model from '~/store/Model';

class AXAPIModel extends Model {
	setCurrentNode(node) {
		this.currentNode = node;
	}

	updateNodeValue(node, value=null) {
		this.storage['node'] = value;
		this.currentNode = node;
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