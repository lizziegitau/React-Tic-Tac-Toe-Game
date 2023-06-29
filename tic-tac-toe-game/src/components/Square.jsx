

import React from 'react'
import { useState } from 'react';

const Square = () => {
    const [value, setValue] = useState(null);
    function handleTileClick(){
      setValue("X")
    }
    return (
      <div>
        <button className="tile" onClick={handleTileClick}>{value}</button>
        
      </div>
    )
  }


export default Square
  