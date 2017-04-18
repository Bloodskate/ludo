import { INITIALIZED_TURN, DICE_ROLL, TURN_START } from '../actions';

const turn = (state=null, action) => {
  switch(action.type) {
    case INITIALIZED_TURN:
      return action.turn;
    case DICE_ROLL:
      return Object.assign({}, state, {
        value: action.rollValue
      });
    case TURN_START:
      return Object.assign({}, state, {
        progress: true
      });
    // case CHANGE_TURN: 
    //   return Object.assign({}, state, action.prev);
    // case CHANGE_VAL:
    //   return Object.assign({}, state, {
    //     value: action.val,
    //     progress: true
    //   });
    // case PLAYER_CHANGED: 
    //   return action.turn;
    default:
      return state;
  }
}


export default turn;



















// const changeTurn = (prev) => {
//   return Object.assign({}, prev, {
//     six_count: prev.six_count++
//   })
// }