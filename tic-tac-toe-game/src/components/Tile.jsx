import React from "react"
import React from 'react'
import { useState } from 'react';
import Square from "./Square";


/*onst Square = () => {
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




export default function Tile() {

  
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