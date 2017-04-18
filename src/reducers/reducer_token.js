import { INITIALIZED_TOKENS, VALID_TOKENS } from '../actions';

const validateTokens = (state, action) => {
  let tokens = state.map(token => {
    if(token.player === action.player){
      if(action.value === 1) {
        token.valid = true;
      } else {
        if (token.active) token.valid = true;
      }
    }
    return token;
  });
  return tokens;
}

const tokens = (state = null, action) => {
  switch(action.type) {
    case INITIALIZED_TOKENS:
      return action.tokens;
    case VALID_TOKENS:
      let result = validateTokens(state, action);
      return result;
    // case TOKEN_MOVED:
    //   return state.map(t => token(t, action));
    default:
      return state;
  }
}

export default tokens;


























// const token = (state, action) => {
//   switch(action.type) {
//     case TOKEN_MOVED:
//       if( state.id !== action.token.id ) {
//         return state;
//       }
//       return Object.assign({}, state, action.token);
//     default: 
//       return state;
//   }
// }