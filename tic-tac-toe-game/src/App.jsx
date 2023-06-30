import React from "react"
import PlayerDisplay from "./components/PlayerDisplay"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <h1>Tic Tac Toe Game</h1>
      <PlayerDisplay />
    </div>
  )
}