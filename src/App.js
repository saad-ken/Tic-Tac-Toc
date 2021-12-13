import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import './styles/root.scss'

function App() {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [isOnext, setIsOnext] = useState(false)

    const winner = calculateWinner(board)

    console.log(winner);

    const message = winner ? `Winner is ${winner}` : `Next Player is ${isOnext ? 'O' : 'X'}`

    const handleSquare = (position)=>{
      if(board[position] || winner){
        return
      }

        setBoard(prev =>{

            return prev.map((square , pos) =>{
                if (pos === position) {
                    return isOnext ? 'O' : 'X'
                } else {
                    return square
                }
            })
        })

        setIsOnext(prev => !prev)
    }


  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquare={handleSquare}/>
      
    </div>
  );
}

export default App;
