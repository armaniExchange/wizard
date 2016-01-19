import {Component} from 'react';

class Model extends Component {

	constructor(props) {
		super(props);
		this._storage = [];
		this._currentNode = '';
		this._updatedNode = {};
		this._updatedCondition = {};
		this._validations = {};
		this._returnedNode = {};
		this._sentNode = {};
		this._result = {};// operate result
	}


	get storage() {
		// console.log('get storage from Model',this._storage);
		return this._storage;
	}

	set storage(value) {
		// console.log('set storage to Model', value);
		this._storage[value.node] = value.value;
	}

	get currentNode() {
		return this._currentNode;
	}

	get updatedNode() {
		return this._updatedNode;
	}

	get updatedCondition() {
		return this._updatedCondition;
	}

	get validations() {
		return this._validations;
	}

	get returnedNode() {
		return this._returnedNode;
	}

	get sentNode() {
		return this._sentNode;
	}

	get result() {
		return this._result;
	}

	set currentNode(value) {
		this._currentNode = value;
	}

	set updatedNode(value) {
		this._updatedNode = value;
	}

	set updatedCondition(value) {
		this._updatedCondition = value;
	}

	set validations(value) {
		this._validations = value;
	}

	set returnedNode(value) {
		this._returnedNode = value;
	}

	set sentNode(value) {
		this._sentNode = value;
	}

	set result(value) {
		this._result = value;
	}


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

	getOperateDetail() {
		// console.log(conditions);
		/*
		 * {
		 	code: 0, 
		 	errors: {
		 		item1: {return:0, send:1},
		 		item2: {return:'String1', send:'String2'}
		 * }, }
		 */
		return this._result;
	}

}

export default Model;