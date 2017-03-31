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

  //Maybe utilizing state will make this code cleaner 
  borderColor() {
    let { globalId } = this.props.square;
    let borderColor = "black";
    if(init.blue_home_squares.includes(globalId)){
      borderColor = "blue";
      if(globalId[0] === "j" && globalId[2] === "5") {
        borderColor = "blue blue black black";
      } else if (globalId[2] === "5") {
        borderColor = "blue blue black blue";
      } else if (globalId[0] === "j") {
        borderColor = "blue blue blue black";
      }
    } else if(init.red_home_squares.includes(globalId)){
      borderColor = "red";
      if(globalId[0] === "f" && globalId[2] === "5") {
        borderColor = "red black black red";
      } else if (globalId[2] === "5") {
        borderColor = "red red black red";
      } else if (globalId[0] === "f") {
        borderColor = "red black red red";
      }
    } else if(init.green_home_squares.includes(globalId)){
      borderColor = "green";
      if(globalId[0] === "f" && globalId[2] === "9") {
        borderColor = "black black green green";
      } else if (globalId[2] === "9") {
        borderColor = "black green green green";
      } else if (globalId[0] === "f") {
        borderColor = "green black green green";
      }
    } else if(init.yellow_home_squares.includes(globalId)){
      borderColor = "yellow";
      if(globalId[0] === "j" && globalId[2] === "9") {
        borderColor = "black yellow yellow black";
      } else if (globalId[2] === "9") {
        borderColor = "black yellow yellow yellow";
      } else if (globalId[0] === "j") {
        borderColor = "yellow yellow yellow black";
      }
    }
    return borderColor;
  }

  genClass() {
    let style = "square " + this.props.square.globalId ;
    return style;
  }

  render() {
    return (
      <div 
        id={this.props.square.globalId}
        className={this.genClass()} 
        style={{backgroundColor: this.squareColor(), borderColor: this.borderColor()}}>
        {
          this.props.token === "yes" ? <Token /> : "" 
        }
      </div>
    );
  }
}

// function mapStateToProps(state) {

// }

export default Square;