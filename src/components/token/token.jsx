import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moveToken } from '../../actions';
import styles from './token.css';

class Token extends Component {

  render() {
    let { token } = this.props;
    return (
      <div
        style={{backgroundColor: token.player, top: token.top+1 , left: token.left+1 }} 
        className={styles.token}
        onClick={() => this.props.moveToken(token)}  
      > 

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, { moveToken })(Token);
