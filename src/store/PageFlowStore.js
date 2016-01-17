import AppDispatcher from '~/store/AppDispatcher';
import * as ActionTypes from '~/constants/action-types';
import EventEmitter from 'events';

/**
 * 1. Theme
 * 2. Global Data Management, like title
 */
var CHANGE_EVENT = 'change';

var PageFlowStore = {}, pageData = {'data': 'test'};
EventEmitter.prototype._maxListeners = 1000;


Object.assign(PageFlowStore, EventEmitter.prototype, {

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

  /**
   * @param {string} id
   */
  get: function(id) {
    console.log(id);
    return id;
  },


  getAll: function() {

    return pageData;
  }

});

PageFlowStore.dispatchToken = AppDispatcher.register(function(action) {
  // console.log(action, ActionTypes);
  switch (action.actionType) {

    case ActionTypes.UPDATE:
      // console.log('execute UPDATE action');
      PageFlowStore.emitChange();
      break;

    default:
      // console.log('do nothing');
      // do nothing
  }

});

export default PageFlowStore;
