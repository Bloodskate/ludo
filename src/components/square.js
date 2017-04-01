import React, { Component } from 'react';
import { connect } from 'react-redux';

import Token from './token';
import { init } from '../config/initialize';


class Square extends Component {
  
  squareColor() {
    let red = [...init.red_home_squares, ...init.red_path_squares, init.red_start_square];
    let blue = [...init.blue_home_squares, ...init.blue_path_squares, init.blue_start_square];
    let green = [...init.green_home_squares, ...init.green_path_squares, init.green_start_square];
    let yellow = [...init.yellow_home_squares, ...init.yellow_path_squares, init.yellow_start_square];
    let { globalId } = this.props.square;
    if(red.includes(globalId)) {
      return "red";
    }
    if(blue.includes(globalId)) {
      return "blue";
    }
    if(green.includes(globalId)) {
      return "green";
    }
    if(yellow.includes(globalId)) {
      return "yellow";
    }
    if(init.dead_states.includes(globalId)) {
      return "black";
    }
    return "white";
  }

  unevenBorderColor(color, id) {
    let borderTop = id.includes("9") ? "black" : color;
    let borderBottom = id.includes("5") ? "black" : color;
    let borderLeft = id.includes("j") ? "black" : color;
    let borderRight = id.includes("f") ? "black" : color;

    return `${borderTop} ${borderRight} ${borderBottom} ${borderLeft}`;
  }

  //Maybe utilizing state will make this code cleaner 
  borderColor() {
    let { globalId } = this.props.square;
    let borderColor = "black";


    borderColor = init.red_home_squares.includes(globalId) ? this.unevenBorderColor("red", globalId) : 
                    init.blue_home_squares.includes(globalId) ? this.unevenBorderColor("blue", globalId) : 
                      init.green_home_squares.includes(globalId) ? this.unevenBorderColor("green", globalId) : 
                        init.yellow_home_squares.includes(globalId) ? this.unevenBorderColor("yellow", globalId) : "black";

    return borderColor;
  }

  render() {
    const starting_states = [init.red_start_square, init.blue_start_square, init.green_start_square, init.yellow_start_square];
    let { globalId } = this.props.square;
    return (
      <div 
        id={globalId}
        className="square" 
        style={{backgroundColor: this.squareColor(), borderColor: this.borderColor()}}>
        <div>
          <div className="safe">
            { starting_states.includes(globalId) || init.safe_states.includes(globalId) ? "☆" : ""}
          </div>
        {
          this.props.token === "yes" ? <Token /> : "" 
        }
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {

// }

export default Square;