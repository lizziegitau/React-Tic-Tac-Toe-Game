import React from "react"

export default function Tile(handleClick){
  return(
    <section className="container">
            <div className="tile" id="tile" onClick={handleClick}></div>
            <div className="tile" id="tile" onClick={handleClick}></div>
            <div className="tile" id="tile" onClick={handleClick}></div>
            <div className="tile" id="tile" onClick={handleClick}></div>
            <div className="tile" id="tile" onClick={handleClick}></div>
            <div className="tile" id="tile" onClick={handleClick}></div>
            <div className="tile" id="tile" onClick={handleClick}></div>
            <div className="tile" id="tile" onClick={handleClick}></div>
            <div className="tile" id="tile" onClick={handleClick}></div>
        </section>
  )
}
