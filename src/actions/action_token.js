import { pad } from './action_board';
import { token_dead_pos, path } from '../constants';

export function move(token, number, color) {
  let pos = path[color][path[color].indexOf(token.pos) !== -1 ? path[color].indexOf(token.pos) + number : 0];
  return pos;
}

export function validMove(token, move) {
  let color = token.player;
  let i = path[color].indexOf(token.pos);
  if (path[color].includes(path[color][i + move])) {
    return true;
  }
  return false; 
}

export function getTokenPos(pos) {
  let vert = pos.slice(1,3);
  let hori = pos.slice(0,1);
  let left = ((hori.charCodeAt() - 96) - 1) * 36;
  let top = vert * 36;
  return {
    top,
    left
  }
}

export default function initTokens() {
  let colors = ['red', 'blue', 'yellow', 'green'];
  let tokens = [];
  for( let i = 0, count = 0; i < 4; i++){
    for( let j = 0; j < 4; j++) {
      let token = {
        id: count,
        player: colors[i],
        name: colors[i] + pad(j),
        pos: token_dead_pos[count],
        top: 0,
        left: 0,
        active: false,
        valid: false,
        zIndex: 0
      }
      let { top , left } = getTokenPos(token.pos);
      token.top = top;
      token.left = left;
      tokens[count] = token;
      count++;
    }
  }
  return tokens;
  // this.props.initializedTokens(tokens);
}