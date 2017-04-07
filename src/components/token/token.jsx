import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './token.css';

class Token extends Component {

  getPos(){
    return null;
  }

  getStyles() {
    let { token } = this.props;
    let { top, left } = this.getPos() || {
      top: 220,
      left: 220
    };
    return {
      backgroundColor: token.player,
      borderColor: 'black'
    }
  }

  componentDidMount() {
    this.getStyles();
  }

  render() {
    let { token } = this.props;
    return (
      <div
        style={{backgroundColor: token.player, top: token.top+1 , left: token.left+1 }} 
        className={styles.token}> 

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(Token);
