import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startTurn } from '../../actions';
import styles from './dice.css';

class Dice extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}
          style={{borderColor: this.props.player}}
        >
          {this.props.value}
        </div>
        <button 
          disabled={this.props.progress}
          className={`btn btn-primary ${styles.button}`}
          onClick={() => this.props.startTurn()}
        >
          Spin
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.turn.value,
    progress: state.turn.progress,
    player: state.turn.player
  }
}

export default connect(mapStateToProps, { startTurn })(Dice);
