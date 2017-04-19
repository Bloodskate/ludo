import { VALID_TOKENS, END_TURN } from '../actions';



const valid_tokens = (state= [], action) => {
  switch(action.type) {
    case VALID_TOKENS:
      return action.valid_tokens;
    case END_TURN:
      return [];
    default:
      return state;
  }
}

export default valid_tokens;