import React from "react"
import Tile from "./components/Tile"
import ResetButton from "./components/ResetButton"
import PlayerDisplay from "./components/PlayerDisplay"
import Announcer from "./components/Announcer"
import "./App.css"


export default function App() {

        const resetBoard = () => {
              setBoard ( ['', '', '', '', '', '', '', '', ''])
              setIsGameActive(true)
              if (currentPlayer === 'O') {
                changePlayer();
            }
             
          }
          
  return (
    <div>
      <PlayerDisplay />
      <Announcer />
      <Tile handleClick={userAction} />
      
    </div>
  )
}