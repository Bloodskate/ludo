import initRows from './action_board';
import initTokens, { move, getTokenPos } from './action_token';
import initTurn from './action_turn';

//constants
// export const INITIALIZED_SQUARES = 'INITIALIZED_SQUARES'; 
export const INITIALIZED_ROWS = 'INITIALIZED_ROWS'; 
export const INITIALIZED_TOKENS = 'INITIALIZED_TOKENS';
export const INITIALIZED_TURN = 'INITIALIZED_TURN';
export const DICE_ROLL = 'DICE_ROLL';
export const TURN_START = 'TURN_START';
export const VALID_TOKENS = 'VALID_TOKENS';
export const NEXT_TURN = 'NEXT_TURN';
export const TOKEN_MOVED = 'TOKEN_MOVED';
// export const TOKEN_SET_POS = 'TOKEN_SET_POS';
// export const TOKEN_COMPLETE = 'TOKEN_COMPLETE';
// export const CHANGE_TURN = 'CHANGE_TURN';
// export const CHANGE_VAL = 'CHANGE_VAL';
// export const PLAYER_CHANGED = 'PLAYER_CHANGED';
//Action Creators

export function initGame() {
  let rows = initRows();
  let turn = initTurn();
  let tokens = initTokens();
  return dispatch => {
    dispatch({
      type: INITIALIZED_ROWS,
      rows
    });
    dispatch({
      type: INITIALIZED_TOKENS,
      tokens
    });
    dispatch({
      type: INITIALIZED_TURN,
      turn
    });
  }
} 

function rollDice() {
  let rollValue = Math.ceil(Math.random() * 6);
  return {
    type: DICE_ROLL,
    rollValue
  }
}

export function startTurn(getState) {
  return (dispatch, getState) => {
    dispatch(rollDice());
    let { turn } = getState();
    dispatch({
      type: TURN_START
    });
    // dispatch(validTokens(turn, tokens));
    dispatch({
      type: VALID_TOKENS,
      player: turn.player,
      value: turn.value
    })
  }
}

function moveToken(token, turn) {
  let pos = move(token, turn.value, token.player);
  let { top, left } = getTokenPos(pos);
  // console.log(pos, top, left);
  let active = turn.value === 1 ? true : false;
  return {
    type: TOKEN_MOVED,
    token: Object.assign({}, token, {
      pos,
      top,
      left,
      active
    })
  }
}

function nextTurn(token, turn) {
  let payload;
  if((turn.value === 6 && turn.six_count !== 3) || turn.value === 1) {
    payload = Object.assign({}, turn, {
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
    type: NEXT_TURN,
    turn: payload
  }
}

export function execTurn(token, turn) {
  return dispatch => {
    if(token.valid) {
      dispatch(moveToken(token, turn));
      dispatch(nextTurn(token, turn));
    }
  }
}





































// export function changeValue(val) {
//   return {
//     type: CHANGE_VAL,
//     val
//   }
// }

// export function changeTurn(turn) {
//   return {
//     type: CHANGE_TURN,
//     prev: {
//       player: turn.player,
//       value: turn.value,
//       six_count : turn.six_count
//     }
//   }
// }

// function changePlayer(turn) {
//   let payload;
//   if((turn.value === 6 && turn.six_count !== 3) || turn.value === 1) {
//     payload = Object.assign({}, turn, {
//       six_count: turn.six_count++,
//       value: 0,
//       progress: false
//     });
//   } else {
//     let player = turn.player === 'red' ? 'blue'
//                 : turn.player === 'blue' ? 'yellow'
//                 : turn.player === 'yellow' ? 'green'
//                 : turn.player === 'green' ? 'red' : null;
//     payload = Object.assign({}, turn, {
//       player,
//       value: 0,
//       progress: false
//     });
//   }
//   return {
//     type: PLAYER_CHANGED,
//     turn: payload
//   }
// }


// export function execTurn(token, turn) {
//   return dispatch => {
//     if(token.player === turn.player && turn.value !== 0) {
//       token.active && dispatch(moveToken(token, turn));
//       dispatch(changePlayer(turn));
//     }
//   }
// }
