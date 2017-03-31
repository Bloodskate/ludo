import React from 'react';

import Square from './square';

export default ({row}) => {
  return (
    <div className="square-row" >
    {row.map((element, index) => {
      return (
        <Square square={element} key={index} />
      )
    })}
    </div>
  )
}