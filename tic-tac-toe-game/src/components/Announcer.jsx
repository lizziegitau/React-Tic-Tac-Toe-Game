import React from "react"

export default function Announcer({cells}) {

    const [winner,setWinner] = React.useState(null)

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

      React.useEffect(() => {
        const winner = checkWinner(cells)
        setWinner(winner)
      }, [cells])

      function checkWinner(cells) {
        if (cells.every(cell => cell === "")) {
            return null
        }
        for(let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i]
            if(
                cells[a] &&
                cells[a] === cells[b] &&
                cells[a] === cells[c]
            ) {
                return cells[a]
            }
        }

        if (cells.every(cell => cell !== "")) {
            return "Draw"
        }
        return null
      }

      return (
        <div className="game-result">
            {winner === "Draw" ? (
                <div>
                    <p>It's a Tie </p>
                </div>
            ) : (
                <div>
                    <p>Player {winner} wins</p>
                </div>
            )}
        </div>
      )

}