import initRows from './actions_board';
import initTokens from './actions_token';

//constants
export const INITIALIZED_SQUARES = 'INITIALIZED_SQUARES'; 
export const INITIALIZED_ROWS = 'INITIALIZED_ROWS'; 
export const INITIALIZED_TOKENS = 'INITIALIZED_TOKENS';
export const TOKEN_SET_POS = 'TOKEN_SET_POS';

//Action Creators
export function initializedSquares(squares) {
  return {
    type: INITIALIZED_SQUARES,
    payload: squares
  }
};

export function startBoard() {
  let rows = initRows();
  return {
    type: INITIALIZED_ROWS,
    payload: rows
  }
} 

export function startTokens() {
  let tokens = initTokens();
  return {
    type: INITIALIZED_TOKENS,
    payload: tokens
  }
}