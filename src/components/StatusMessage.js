import React from 'react'

const StatusMessage = ({winner , current ,}) => {
    // const message = winner ? `Winner is ${winner}` : `Next Player is ${curr.isOnext ? 'X' : 'O'}`;

    const noMovesLeft = current.board.every((el)=> el !== null)

    return (
        <h2>
        {winner &&  `Winner is ${winner}`}
        {!winner && !noMovesLeft && `Next Player is ${current.isOnext ? 'X' : 'O'}`}
        {!winner && noMovesLeft && 'Match Tied'}
        </h2>
    )
}

export default StatusMessage
