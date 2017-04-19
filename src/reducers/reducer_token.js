import { INITIALIZED_TOKENS, TOKEN_MOVED, ACTIVATED_TOKEN } from '../actions';


const token = (state, action) => {
  switch(action.type) {
    case TOKEN_MOVED:
    case ACTIVATED_TOKEN:
      if( state.id !== action.token.id ) {
        return state;
      }
      return Object.assign({}, state, action.token);
    default: 
      return state;
  }
}


const tokens = (state = null, action) => {
  switch(action.type) {
    case INITIALIZED_TOKENS:
      return action.tokens;
    case TOKEN_MOVED:
    case ACTIVATED_TOKEN:
      return state.map(t => token(t, action));
    default:
      return state;
  }
}

export default tokens;
























