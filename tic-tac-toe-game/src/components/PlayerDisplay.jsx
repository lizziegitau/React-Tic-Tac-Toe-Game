import React from "react"


export default function PlayerDisplay(){
  return(
    <div>
          <section className="title">
              <h1>Tic Tac Toe</h1>
          </section>
          <section className="display">
              Player <span className="display-player playerX">X</span>'s turn
          </section>
    </div>
  )
}