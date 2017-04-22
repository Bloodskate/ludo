import React, { Component } from 'react';
import { connect } from 'react-redux';

import { execTurn, checkTokenExists } from '../../actions';
import styles from './token.css';

class Token extends Component {

  getStyles() {
    let { token, turn, valid_tokens } = this.props;    
    return {
      backgroundColor: token.player,
      top: token.top+1,
      left: token.left+1,
      zIndex:  token.zIndex,//turn.player === token.player ? '1' : 0,
      transform: checkTokenExists(valid_tokens, token) ? 'scale(1.1, 1.1)' : 'none'
    }
  }
  // && turn.progress && turn.player === token.player
  render() {
    let { token, turn, valid_tokens } = this.props;
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
    turn: state.turn,
    valid_tokens : state.valid_tokens
  }
}

export default connect(mapStateToProps, { execTurn })(Token);
