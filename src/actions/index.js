//constants
export const INITIALIZED_SQUARES = 'INITIALIZED_SQUARES'; 
export const INITIALIZED_ROWS = 'INITIALIZED_ROWS'; 

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