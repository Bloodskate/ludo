import { colNames, home, end_path, start, safe_states, end_states, oob_states } from '../constants';

export function pad(x) {
  return x < 10 ? '0' + x : x;
}

function squareColor(name) {
  let red = [...home.red, ...end_path.red, start.red];
  let blue = [...home.blue, ...end_path.blue, start.blue];
  let green = [...home.green, ...end_path.green, start.green];
  let yellow = [...home.yellow, ...end_path.yellow, start.yellow];

  let color = red.includes(name) ? 'red' :
                blue.includes(name) ? 'blue' :
                  green.includes(name) ? 'green' :
                    yellow.includes(name) ? 'yellow' : 
                      oob_states.includes(name) ? 'black' : 'white';
  return color;
}

function unevenBorderColor(color, name) {
  let borderTop = name.includes("9") ? 'black' : color;
  let borderLeft = name.includes("j") ? 'black' : color;
  let borderRight = name.includes("f") ? 'black' : color;
  let borderBottom = name.includes("5") ? 'black' : color;

  return `${borderTop} ${borderRight} ${borderBottom} ${borderLeft}`;
}

function borderColor(name) {
  let borderColor = 
    home.red.includes(name) ? unevenBorderColor('red', name) : 
      home.blue.includes(name) ? unevenBorderColor('blue', name) : 
        home.green.includes(name) ? unevenBorderColor('green', name) : 
          home.yellow.includes(name) ? unevenBorderColor('yellow', name) : 'black';

  return borderColor;
}

function content(name) {
  let content = 
    safe_states.includes(name) ? "☆" :
      [start.red, start.blue, start.green, start.yellow].includes(name) ? "S" :
        end_states.includes(name) ? "G" : "";
  
  return content;
}

export default function initRows() {
  let squares = [];
  let rows = colNames.map(i => Array(15));

  for(let id = 0, i = 0; i < 15; i++) {
    for(let j = 0; j < 15; j++) { 
      
      let square = {
        index: id,
        name: colNames[j] + pad(i),
        borderColor: '',
        color: '',
        content: ''
      }
      square.borderColor = borderColor(square.name);
      square.color = squareColor(square.name);
      square.content = content(square.name);

      squares[id] = square;
      id++;
      rows[i][j] = square;
    }
  } 
  // this.props.initializedRows(rows);
  return rows;
}