import React from "react"
import { useState } from "react"


export default function PlayerDisplay() {
    const [turn,setTurn] = useState("X");
    const [cells,setCells] = useState(Array(9).fill(''));
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
          
        
      
    
    
    return (
        <div className="player-display">
            <h2 className="current-player">Current Player:{turn}</h2>
            <main className="board">
            <Square num={0}/>
            <Square num={1}/>
            <Square num={2}/>
            <Square num={3}/>
            <Square num={4}/>
            <Square num={5}/>
            <Square num={6}/>
            <Square num={7}/>
            <Square num={8}/>
       

            </main>
            
            
            
        </div>
    )
}