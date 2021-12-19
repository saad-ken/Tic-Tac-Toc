import React from 'react'

const Square = ({value,click,isWinningSquare}) => {
    return (
        <button 
        type="button" 
        onClick={click} 
        className={`square ${isWinningSquare ? 'winning': ''} ${value === 'X' ? 'text-x' : 'text-o'} `}>{value}</button>
    )
}

export default Square
