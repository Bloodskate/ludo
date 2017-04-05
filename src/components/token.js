import React, { Component } from 'react';

let path = [
        "b06", "c06", "d06", "e06", "f06", 
        "g05", "g04", "g03", "g02", "g01", "g00",
        "h00", 
        "i00", "i01", "i02", "i03", "i04", "i05", 
        "j06", "k06", "l06", "m06", "n06", "o06",      
      ];

function setOffset(otop, oleft) {
  return (previousState, currentProps) => {
    let state = {...previousState, top: otop, left: oleft};
    console.log("state", state);
    return state;
  };
}

function incrementCount() {
  return (prev, curr) => {
    return {...prev, c: prev.c + 1, id: path[prev.c + 1]};
  };
}

class Token extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 0,
      left: 0,
      c: 0,
      id: path[0]
    }
  }

  getPos() {
    console.log("Getting Position");
    let domElement = document.getElementById(this.state.id);
    let { offsetTop, offsetLeft } = domElement;
    if(offsetTop !== this.state.top || offsetLeft !== this.state.left) {
      this.setState(setOffset(offsetTop, offsetLeft));
      this.forceUpdate();
    }
    console.log(`Position retrieved as ${offsetTop}, ${offsetLeft}.`);
  }
  
  componentDidMount() {
    console.log("Mounting");
    this.getPos();
    console.log("Mounted");
  }

  componentWillUpdate() {
  }



  componentDidUpdate() {
    console.log("updated to",this.state);
    this.getPos();
  }

  move() {
    console.log(`moving from ${this.state.id}`);
    this.setState(incrementCount());
    console.log(`moved to ${this.state.id}`);
  }

  render() {
    return (
      <div 
        className="token" 
        style={{top: this.state.top, left: this.state.left}}
        onClick={() => this.move()}
      >

        {console.log(this.state)}
      </div>
    );
  }
}

export default Token;