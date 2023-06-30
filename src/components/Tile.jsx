import React from 'react'
import { useState } from 'react';
/*import Square from "./Square";


/*const Square = () => {
  const [value, setValue] = useState(null);
  function handleTileClick(){
    setValue("X")
  }
  return (
    <div>
      <button className="tile" onClick={handleTileClick}>{value}</button>
      
    </div>
  )
}*/




function Tile() {

  
  return (
    <main className="board">
      
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      
    </main>
  )
}
export default Tile
