import { CHANGE_TURN, CHANGE_VAL, INITIALIZED_TURN, PLAYER_CHANGED } from '../actions';

const turn = (state=null, action) => {
  switch(action.type) {
    case INITIALIZED_TURN:
      return action.turn;
    case CHANGE_TURN: 
      return Object.assign({}, state, action.prev);
    case CHANGE_VAL:
      return Object.assign({}, state, {
        value: action.val,
        progress: true
      });
    case PLAYER_CHANGED: 
      return action.turn;
    default:
      return state;
  }
}

const changeTurn = (prev) => {
  return Object.assign({}, prev, {
    six_count: prev.six_count++
  })
}

export default turn;