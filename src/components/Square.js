import React from 'react'

const Square = ({value,click,isWinningSquare}) => {
    return (
        <button 
        style={
            {fontWeight : isWinningSquare ? 'bold' : 'normal'}
        }
        type="button" 
        onClick={click} 
        className='square'>{value}</button>
    )
}

export default Square
