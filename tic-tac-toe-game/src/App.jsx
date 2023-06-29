import React from "react"
import Tile from "./components/Tile"
import Announcer from "./components/Announcer"
import ResetButton from "./components/ResetButton"
import PlayerDisplay from "./components/PlayerDisplay"
import "./App.css"

export default function App() {
  return (
    <div>
      <Tile />
      <PlayerDisplay />
      <Announcer />
      <ResetButton />
    </div>
  )
}