
class Model {
	storage: {}

	currentNode: {}

	updatedNode: {}

	updatedCondition: {}

	validations: {}

	returnedNode: {}

	sentNode: {}

	doDelete(conditions) {
		console.log(conditions);
		return true;
	}

	doAdd(records) {
		console.log(records);
		return {};
	}

	doUpdate(records, conditions={}) {
		console.log(records, conditions);

		return {};
	}

	doSearch(conditions={}) {
		console.log(conditions);
		return {};
	}

	getOperateDetail(record, conditions={}) {
		console.log(conditions);
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

export default Model;