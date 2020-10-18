const {createStore, combineReducers} = require('redux');
const {MakananReducer} = require('../reducer');

// Store
const rootReducer = combineReducers({makananReducer: MakananReducer});

const configureStore = () => {
  return createStore(MakananReducer);
};

export default configureStore;
