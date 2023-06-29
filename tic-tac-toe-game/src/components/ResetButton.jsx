import React from "react"

export default function ResetButton() {

    const [board, setBoard] = React.useState(generateEmptyBoard())

    const handleReset = () => {
        setBoard(generateEmptyBoard())
        setCurrentPlayer("X")
        setWinner(null)
      }

    function generateEmptyBoard() {
        return Array(3).fill(null).map(() => Array(3).fill(null))
      }

    return (
        <div className="reset-button">
            <button onClick={handleReset}>PLAY AGAIN</button>
            
        </div>
    )
}