export default function initTurn() {
  let colors = ['red', 'blue', 'yellow', 'green'];
  return {
    player: colors[0],
    value: 0,
    progress: false,
    six_count: 0,
    prev_value: 0
  }
}
