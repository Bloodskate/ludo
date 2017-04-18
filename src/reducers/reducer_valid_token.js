import { VALID_TOKENS } from '../actions';

const valid_tokens = (state= [], action) => {
  switch(action.type) {
    case VALID_TOKENS:
      return {};
    default:
      return state;
  }
}

export default valid_tokens;