import { combineReducers } from 'redux';
import BoardReducer from './reducer_board';
import TokenReducer from './reducer_token'; 
import TurnReducer from './reducer_turn';

const rootReducer = combineReducers({
  board: BoardReducer,
  tokens: TokenReducer,
  turn: TurnReducer
});

export default rootReducer;