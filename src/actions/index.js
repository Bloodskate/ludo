import initRows from './actions_board';
import initTokens, { move, getTokenPos } from './actions_token';

//constants
export const INITIALIZED_SQUARES = 'INITIALIZED_SQUARES'; 
export const INITIALIZED_ROWS = 'INITIALIZED_ROWS'; 
export const INITIALIZED_TOKENS = 'INITIALIZED_TOKENS';
export const TOKEN_SET_POS = 'TOKEN_SET_POS';
export const TOKEN_MOVED = 'TOKEN_MOVED';

//Action Creators
export function moveToken(token) {
  let pos = move(token, 1, token.player);
  if(pos) {
    let { top, left } = getTokenPos(pos);
    return {
      type: TOKEN_MOVED,
      token: Object.assign({}, token, {
        pos,
        top,
        left
      })
    }
  }
  console.log("token complete");
}


export function startBoard() {
  let rows = initRows();
  return {
    type: INITIALIZED_ROWS,
    rows
  }
} 

export function startTokens() {
  let tokens = initTokens();
  return {
    type: INITIALIZED_TOKENS,
    tokens
  }
}