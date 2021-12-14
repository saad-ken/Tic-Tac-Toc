import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import './styles/root.scss'

// const [isOnext, setIsOnext] = useState(false)
function App() {

    const [history, setHistory] = useState([
      {board:Array(9).fill(null) , isOnext:true}
    ])
    const [currentMove, setCurrentMove] = useState(0)
    const current = history[currentMove]
    const winner = calculateWinner(current.board)


    const message = winner ? `Winner is ${winner}` : `Next Player is ${current.isOnext ? 'X' : 'O'}`

    const handleSquare = (position)=>{
      if(current.board[position] || winner){
        return
      }

        setHistory(prev =>{

          const last = prev[prev.length - 1]

            const newBoard = last.board.map((square , pos) =>{
                if (pos === position) {
                    return last.isOnext ? 'X' : 'O'
                } else {
                    return square
                }
            })

            return prev.concat({board : newBoard , isOnext:!last.isOnext})
        })

      setCurrentMove(prev => prev + 1 )

    }


  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquare={handleSquare}/>
      
    </div>
  );
}

export default App;
