import React, { Component } from 'react';

import styles from './dice.css';

class Dice extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          
        </div>
        <button className={`btn btn-primary ${styles.button}`}>
          Spin
        </button>
      </div>
    );
  }
}

export default Dice;
