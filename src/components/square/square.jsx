import React from 'react';

import styles from './square.css';

export default ({square}) => {
  return (
    <div
      style={{backgroundColor: square.color, borderColor: square.borderColor}} 
      className={styles.square}>
      <div className={styles.content}>
        {
          square.content
        }
      </div>
    </div>
  )
}