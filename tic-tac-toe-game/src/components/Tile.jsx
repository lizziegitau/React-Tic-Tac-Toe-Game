import React from "react"

export default function Tile() {

  function handleTileClick() {
    // You guys will tell me what do here i don't know 
  }
  
  return (
    <main className="board">
      <div className="tile" onClick={handleTileClick}></div>
      <div className="tile" onClick={handleTileClick}></div>
      <div className="tile" onClick={handleTileClick}></div>
      <div className="tile" onClick={handleTileClick}></div>
      <div className="tile" onClick={handleTileClick}></div>
      <div className="tile" onClick={handleTileClick}></div>
      <div className="tile" onClick={handleTileClick}></div>
      <div className="tile" onClick={handleTileClick}></div>
      <div className="tile" onClick={handleTileClick}></div>
    </main>
  )
}