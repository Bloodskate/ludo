import { INITIALIZED_ROWS } from '../actions';

//State is only the state this reducer is responsible for, ie init state
export default function(state = null, action) {
  switch(action.type) {
    case INITIALIZED_ROWS:
      return action.rows;
    default:
      return state;
  }
}