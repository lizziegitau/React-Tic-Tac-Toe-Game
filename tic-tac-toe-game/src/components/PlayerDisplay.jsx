import React from "react"
import { useState } from "react"


export default function PlayerDisplay() {
    const [turn,setTurn] = useState("x");
    const [cells,setCells] = useState[Array(9).fill('')];
    function handleTileClick(){
        if (cells[num] !== ''){
            alert("already clicked");
            return;
        }
        let squares = [...cells];
        if (turn === "x"){
            squares[num]= "X";
            setTurn("0");
        }else{
            squares[num]="O";
            setTurn("x");
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