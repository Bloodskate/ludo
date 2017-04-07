import { combineReducers } from 'redux';
import TestReducer from './reducer_test';
import InitReducer from './reducer_init';
import TokenReducer from './reducer_token'; 

const rootReducer = combineReducers({
  test: TestReducer,
  init: InitReducer,
  tokens: TokenReducer
});

export default rootReducer;