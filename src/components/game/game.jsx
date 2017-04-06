import React from 'react';

import Board from '../board/board';

import styles from './game.css';

export default (props) => {
  return (
    <div className={styles.game}>
      <Board />
    </div>
  )
}