import { combineReducers } from 'redux';
import TestReducer from './reducer_test';
import InitReducer from './reducer_init';

const rootReducer = combineReducers({
  test: TestReducer,
  init: InitReducer
});

export default rootReducer;