import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeValue } from '../../actions';
import styles from './dice.css';

class Dice extends Component {
  spin() {
    let value = Math.ceil(Math.random() * 6);
    this.props.changeValue(value);
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          {this.props.value}
        </div>
        <button 
          className={`btn btn-primary ${styles.button}`}
          onClick={() => this.spin()}
        >
          Spin
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.turn.value
  }
}

export default connect(mapStateToProps, { changeValue })(Dice);
