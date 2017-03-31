import React, { Component } from 'react';

import SquareRow from './square_row';
import Token from './token';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: [],
      tokens: [],
      turn: 'G'
    }
  }

  //Initialize board
  componentWillMount() {
    this.initBoard();
  }

  pad(x) {
    return x < 10 ? '0' + x : x;
  }

  initBoard() {
    const squares = [];
    const columnNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

    //instantiating rows and cols as 2d arrays
    const rows = columnNames.map(i => Array(15));
    
    for(let id = 0, i = 0; i < 15; i++) {
      for(let j = 0; j < 15; j++) { 
        let square = {
          index: id,
          globalId: columnNames[j] + this.pad(i)
        }
        squares[id] = square;
        id++;
        rows[i][j] = square;
      }
    }
    this.setState({rows});
    this.setState({squares});
  }

  render() {
    return (
      <div className="main">
        <div className="board">
          {
            this.state.rows.map((row, index) => {
              return (
                <SquareRow row={row} key={index} />
              )
            })
          }
          <Token />
        </div>
        <div className="sidebar"></div>
      </div>
    );
  }
}

export default Board;
