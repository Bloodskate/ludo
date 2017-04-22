import { INITIALIZED_TOKENS, TURN_START, TOKEN_MOVED, ACTIVATED_TOKEN, KILLING_TOKENS } from '../actions';
import { checkTokenExists } from '../actions';
import { getTokenPos } from '../actions/action_token';
import { token_dead_pos } from '../constants';


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
        zIndex: state.zIndex + 4
      });
    case KILLING_TOKENS:
      if( !checkTokenExists(action.victims, state) ) {
        return state;
      }
      let pos = token_dead_pos[state.id]
      let { top, left } = getTokenPos(pos);
      return Object.assign({}, state, {
        pos,
        top,
        left
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
    case KILLING_TOKENS:
      return state.map(t => token(t, action));
    default:
      return state;
  }
}

export default tokens;
























