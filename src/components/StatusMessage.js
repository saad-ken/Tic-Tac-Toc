import React from 'react'

const StatusMessage = ({winner , current ,}) => {
    // const message = winner ? `Winner is ${winner}` : `Next Player is ${curr.isOnext ? 'X' : 'O'}`;

    const noMovesLeft = current.board.every((el)=> el !== null)

    return (
        <div className='status-message'>
            {winner && 
            <>
            Winner is <span className={winner === 'X' ? 'text-x' : 'text-o'}>{winner}</span>
            </> }
            
            {!winner && !noMovesLeft && 
            <>
            Next Player is <span className={current.isOnext ? 'text-x' : 'text-o'}>
                {current.isOnext ? 'X' : 'O'}</span>
            </>}

            {!winner && noMovesLeft && (
                <>
                <span className='text-x'>X</span> and <span className='text-o'>O</span> tied
                </>
            )}
        </div>
    )
}

export default StatusMessage
