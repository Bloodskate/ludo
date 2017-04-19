import { INITIALIZED_TOKENS, TURN_START, TOKEN_MOVED, ACTIVATED_TOKEN } from '../actions';
import { checkTokenExists } from '../actions';


const token = (state, action) => {
  switch(action.type) {
    case TOKEN_MOVED:
    case ACTIVATED_TOKEN:
      if( state.id !== action.token.id ) {
        return state;
      }
      return Object.assign({}, state, action.token);
    case TURN_START:
      if( !checkTokenExists(action.turn_tokens, state) ) {
        return state;
      }
      return Object.assign({}, state, {
        z_index: state.z_index + 4
      });
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
    case TURN_START:
      return state.map(t => token(t, action));
    default:
      return state;
  }
}

export default tokens;
























