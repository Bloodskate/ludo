import { INITIALIZED_TURN, DICE_ROLL, TURN_START, NEXT_TURN } from '../actions';

const turn = (state=null, action) => {
  switch(action.type) {
    case INITIALIZED_TURN:
      return action.turn;
    case DICE_ROLL:
      let prev = state.value;
      let count = (state.prev_value === 0 || state.prev_value === 6) && state.value === 6 ? state.six_count + 1 : 0;
      return Object.assign({}, state, {
        value: action.rollValue,
        prev_value: prev,
        six_count: count
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
    case NEXT_TURN: 
      return action.turn;
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