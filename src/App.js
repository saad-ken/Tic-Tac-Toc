import { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./helpers";
import './styles/root.scss'


const New_Game = [
  {board:Array(9).fill(null) , isOnext:true}
]

function App() {

    const [history, setHistory] = useState(New_Game)
    const [currentMove, setCurrentMove] = useState(0)
    const curr = history[currentMove]
    
    const {winner,winningSquare} = calculateWinner(curr.board)


    

    const handleSquare = (position)=>{
      if(curr.board[position] || winner){
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

    const moveTo =(move) =>{
      setCurrentMove(move)
    }

    const onNewGame =()=>{
      setHistory(New_Game)
      setCurrentMove(0)
    }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <StatusMessage winner={winner} current ={curr}/>
      <Board 
      board={curr.board} 
      handleSquare={handleSquare}
      winningSquare ={winningSquare}/>
      <button type="button" onClick={onNewGame} >Start New Game</button>
      <History history = {history} moveTo={moveTo} currentMove={currentMove}/>
    </div>  
  );
}

export default App;
