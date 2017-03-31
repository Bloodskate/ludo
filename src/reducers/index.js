import { combineReducers } from 'redux';

import SquaresReducer from './board_reducer';

const rootReducer = combineReducers({
  squares: SquaresReducer
});

export default rootReducer;