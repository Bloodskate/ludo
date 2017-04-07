import { combineReducers } from 'redux';
import BoardReducer from './reducer_board';
import TokenReducer from './reducer_token'; 

const rootReducer = combineReducers({
  board: BoardReducer,
  tokens: TokenReducer
});

export default rootReducer;