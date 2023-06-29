import React from "react"
import Tile from "./components/Tile"
import ResetButton from "./components/ResetButton"
import PlayerDisplay from "./components/PlayerDisplay"
import Announcer from "./components/Announcer"
import "./App.css"

export default function App() {

  return (
    <div className="app">
      <h1>Tic-Tac-Toe Game</h1>
      <PlayerDisplay />
      <Tile />
      <Announcer />
      <ResetButton />
    </div>
  )
}