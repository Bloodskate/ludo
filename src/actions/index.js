//constants
export const INITIALIZED_SQUARES = 'INITIALIZED_SQUARES'; 
export const INITIALIZED_ROWS = 'INITIALIZED_ROWS'; 
export const INITIALIZED_TOKENS = 'INITIALIZED_TOKENS';

//Action Creators
export function initializedSquares(squares) {
  return {
    type: INITIALIZED_SQUARES,
    payload: squares
  }
};

export function initializedRows(rows) {
  return {
    type: INITIALIZED_ROWS,
    payload: rows
  }
} 

export function initializedTokens(tokens) {
  return {
    type: INITIALIZED_TOKENS,
    payload: tokens
  }
}