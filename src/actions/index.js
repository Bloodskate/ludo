import initRows from './action_board';
import initTokens, { move, getTokenPos } from './action_token';
import initTurn from './action_turn';

//constants
export const INITIALIZED_SQUARES = 'INITIALIZED_SQUARES'; 
export const INITIALIZED_ROWS = 'INITIALIZED_ROWS'; 
export const INITIALIZED_TOKENS = 'INITIALIZED_TOKENS';
export const INITIALIZED_TURN = 'INITIALIZED_TURN';
export const TOKEN_SET_POS = 'TOKEN_SET_POS';
export const TOKEN_MOVED = 'TOKEN_MOVED';
export const TOKEN_COMPLETE = 'TOKEN_COMPLETE';
export const CHANGE_TURN = 'CHANGE_TURN';
export const CHANGE_VAL = 'CHANGE_VAL';
export const PLAYER_CHANGED = 'PLAYER_CHANGED';
//Action Creators

export function startTurn() {
  let turn = initTurn();
  return {
    type: INITIALIZED_TURN,
    turn
  }
}

export function changeValue(val) {
  return {
    type: CHANGE_VAL,
    val
  }
}

export function changeTurn(turn) {
  return {
    type: CHANGE_TURN,
    prev: {
      player: turn.player,
      value: turn.value,
      six_count : turn.six_count
    }
  }
}

function changePlayer(turn) {
  let payload;
  if((turn.value === 6 && turn.six_count !== 3) || turn.value === 1) {
    payload = Object.assign({}, turn, {
      six_count: turn.six_count++,
      value: 0,
      progress: false
    });
  } else {
    let player = turn.player === 'red' ? 'blue'
                : turn.player === 'blue' ? 'yellow'
                : turn.player === 'yellow' ? 'green'
                : turn.player === 'green' ? 'red' : null;
    payload = Object.assign({}, turn, {
      player,
      value: 0,
      progress: false
    });
  }
  return {
    type: PLAYER_CHANGED,
    turn: payload
  }
}

function moveToken(token, value) {
  let pos = move(token, value, token.player);
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

export function execTurn(token, turn) {
  return dispatch => {
    if(token.player === turn.player && turn.value !== 0) {
      dispatch(moveToken(token, turn.value));
      dispatch(changePlayer(turn));
    }
  }
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