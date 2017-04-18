import React, { Component } from 'react';
import { connect } from 'react-redux';

import { execTurn } from '../../actions';
import styles from './token.css';

class Token extends Component {

  getStyles() {
    let { token, turn } = this.props;    
    return {
      backgroundColor: token.player,
      top: token.top+1,
      left: token.left+1,
      zIndex:  turn.player === token.player ? '1' : 0,
      transform: token.valid && turn.progress && turn.player === token.player ? 'scale(1.1, 1.1)' : 'none'
    }
  }

  render() {
    let { token, turn } = this.props;
    return (
      <div
        style={this.getStyles()} 
        className={styles.token}
        onClick={() => this.props.execTurn(token, turn)}  
      > 

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    turn: state.turn
  }
}

export default connect(mapStateToProps, { execTurn })(Token);
