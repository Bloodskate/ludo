import React from 'react';

import Square from '../square/square';
import styles from './square-row.css';

export default ({row}) => {
  return (
    <div className={styles.row} >
    {row.map((element, index) => {
      return (
        <Square square={element} key={index} />
      )
    })}
    </div>
  )
}