import React from "react";

const Announcer = ({ winner, currentPlayer, gameOver, handleReset }) => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];

      const checkForWinner = () => {
        for (let combination of winningCombinations) {
          const [a, b, c] = combination;
          if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
          ) {
            return squares[a];
          }
        }
        return null;
      };
  if (gameOver) {
    if (winner) {
      return (
        <div className="announcer">
          <h2>{`Player ${winner} Wins!`}</h2>
          <button onClick={handleReset}>Reset</button>
        </div>
      );
    } else {
      return (
        <div className="announcer">
          <h2>It's a draw!</h2>
          <button onClick={handleReset}>Reset</button>
        </div>
      );
    }
  }

  return (
    <div className="announcer">
      <h2>{`Player ${currentPlayer}'s Turn`}</h2>
    </div>
  );
};

export default Announcer;