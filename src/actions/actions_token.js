import { pad } from './actions_board';
import { token_dead_pos } from '../constants';


export function getTokenPos(name) {
  let vert = name.slice(1,3);
  let hori = name.slice(0,1);
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
        square: token_dead_pos[count],
        top: 0,
        left: 0
      }
      let { top , left } = getTokenPos(token.square);
      token.top = top;
      token.left = left;
      tokens[count] = token;
      count++;
    }
  }
  return tokens;
  // this.props.initializedTokens(tokens);
}