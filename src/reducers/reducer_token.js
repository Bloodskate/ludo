import { INITIALIZED_TOKENS } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case INITIALIZED_TOKENS:
      return action.payload;
    default:
      return state;
  }
}