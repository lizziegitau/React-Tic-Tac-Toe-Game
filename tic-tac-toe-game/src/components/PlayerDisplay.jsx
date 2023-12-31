import React from "react"
import Announcer from "./Announcer";

export default function PlayerDisplay() {
    const [turn,setTurn] = React.useState("X")
    const [cells,setCells] = React.useState(Array(9).fill(''))

    function handleTileClick(num){
        if (cells[num] !== ''){
            alert("already clicked");
            return;
        }

        let squares = [...cells];
        if (turn === "X"){
            squares[num]= "X";
            setTurn("O");
        }else{
            squares[num]="O";
            setTurn("X");
        }
        setCells(squares);
    };
     const Square = ({num}) => {
        return <button className="tile" onClick={() =>handleTileClick(num)}>{cells[num]}</button>;
    };

    function resetBoard () {
        setTurn("X")
        setCells(Array(9).fill(""))
    }
    
    return (
        <div className="player-display">
            <h2 className="current-player">Current Player:{turn}</h2>
            <main className="board">
            <Square num={0} className="tile"/>
            <Square num={1}/>
            <Square num={2}/>
            <Square num={3}/>
            <Square num={4}/>
            <Square num={5}/>
            <Square num={6}/>
            <Square num={7}/>
            <Square num={8}/>
            </main>

        <div className="reset-button">
            <button onClick={resetBoard}>PLAY AGAIN</button>
        </div>

        <Announcer cells={cells} />
           
        </div>
    )
}