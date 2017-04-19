import { combineReducers } from 'redux';
import BoardReducer from './reducer_board';
import TokenReducer from './reducer_token'; 
import TurnReducer from './reducer_turn';
import ValidTokenReducer from './reducer_valid_token';

const rootReducer = combineReducers({
  board: BoardReducer,
  tokens: TokenReducer,
  valid_tokens: ValidTokenReducer,
  turn: TurnReducer
});

export default rootReducer;