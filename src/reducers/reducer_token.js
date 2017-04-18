import { INITIALIZED_TOKENS, VALID_TOKENS, TOKEN_MOVED } from '../actions';


const token = (state, action) => {
  switch(action.type) {
    case TOKEN_MOVED:
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
       return state.map(t => token(t, action));
    default:
      return state;
  }
}

export default tokens;
























