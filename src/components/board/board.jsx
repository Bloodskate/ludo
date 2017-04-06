import React, { Component } from 'react';
import { connect } from 'react-redux';

import { initializedSquares, initializedRows } from '../../actions';
import { colNames, home, end_path, start, safe_states, end_states, dead_states } from '../../constants';

import SquareRow from '../square-row/square-row';

import styles from './board.css';

class Board extends Component {

  componentWillMount() {
    this.initBoard();
  }

  pad(x) {
    return x < 10 ? '0' + x : x;
  }

  squareColor(name) {
    let red = [...home.red, ...end_path.red, start.red];
    let blue = [...home.blue, ...end_path.blue, start.blue];
    let green = [...home.green, ...end_path.green, start.green];
    let yellow = [...home.yellow, ...end_path.yellow, start.yellow];

    let color = red.includes(name) ? 'red' :
                  blue.includes(name) ? 'blue' :
                    green.includes(name) ? 'green' :
                      yellow.includes(name) ? 'yellow' : 
                        dead_states.includes(name) ? 'black' : 'white';
    return color;
  }

  unevenBorderColor(color, name) {
    let borderTop = name.includes("9") ? 'black' : color;
    let borderLeft = name.includes("j") ? 'black' : color;
    let borderRight = name.includes("f") ? 'black' : color;
    let borderBottom = name.includes("5") ? 'black' : color;

    return `${borderTop} ${borderRight} ${borderBottom} ${borderLeft}`;
  }

  borderColor(name) {
    let borderColor = 
      home.red.includes(name) ? this.unevenBorderColor('red', name) : 
        home.blue.includes(name) ? this.unevenBorderColor('blue', name) : 
          home.green.includes(name) ? this.unevenBorderColor('green', name) : 
            home.yellow.includes(name) ? this.unevenBorderColor('yellow', name) : 'black';

    return borderColor;
  }

  content(name) {
    let content = 
      safe_states.includes(name) ? "☆" :
        [start.red, start.blue, start.green, start.yellow].includes(name) ? "S" :
          end_states.includes(name) ? "G" : "";
    
    return content;
  }

  initBoard() {
    let squares = [];
    let rows = colNames.map(i => Array(15));

    for(let id = 0, i = 0; i < 15; i++) {
      for(let j = 0; j < 15; j++) { 
        
        let square = {
          index: id,
          name: colNames[j] + this.pad(i),
          borderColor: '',
          color: '',
          content: ''
        }
        square.borderColor = this.borderColor(square.name);
        square.color = this.squareColor(square.name);
        square.content = this.content(square.name);

        squares[id] = square;
        id++;
        rows[i][j] = square;
      }
    }
    
    // this.props.initializedSquares(squares);
    this.props.initializedRows(rows);
    //*************************** */
    // Set State squares and rows //
    //*************************** */
  }

  renderRows() {
    return (
      this.props.init.map((row, index) => {
        return (
          <SquareRow row={row} key={index} />
        )
      })
    )
  }

  renderLoading() {
    return (
      <div>
        Loading...
      </div>
    )
  }

  render() {
    console.log(this.props.init)
    return (
      <div className={styles.main}>
        <div className={styles.board}>
          {
            this.props.init ? this.renderRows() : this.renderLoading()
          }
        </div>
        <div className={styles.sidebar}></div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    title: state.test.title,
    init: state.init
  }
}

export default connect(mapStateToProps, { initializedSquares, initializedRows })(Board);