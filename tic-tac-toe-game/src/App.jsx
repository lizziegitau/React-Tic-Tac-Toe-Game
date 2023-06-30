import React from "react"
import Tile from "./components/Tile"
import ResetButton from "./components/ResetButton"
import PlayerDisplay from "./components/PlayerDisplay"
import Announcer from "./components/Announcer"
import "./App.css"

export default function App() {
  let [board,setBoard] = React.useState(Array(9).fill(null))
  const [isGameActive,setIsGameActive] = (true)
  let currentPlayer = 'X';
  

  const PLAYERX_WON = 'PLAYERX_WON';
  const PLAYERO_WON = 'PLAYERO_WON';
  const TIE = 'TIE';



  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

        if (roundWon) {
              announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
              setIsGameActive(false)
              return;
          }

        if (!board.includes(''))
            announce(TIE);
    }
        const userAction = (tile, index) => {

          
          // if(isValidAction(tile) && isGameActive) {
          //     tile.innerText = currentPlayer;
          //     tile.classList.add(`player${currentPlayer}`);
          //     setBoard(updateBoard);
          //     handleResultValidation();
          //     changePlayer();
          }
        }
        const isValidAction = (tile) => {
          if (tile.innerText === 'X' || tile.innerText === 'O'){
              return false;
          }

          return true;
      };

        const updateBoard =  (index) => {
          board[index,tile] = currentPlayer;
      }

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
