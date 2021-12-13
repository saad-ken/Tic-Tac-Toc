import React from 'react'

const Square = ({value,click}) => {
    return (
        <button 
        type="button" 
        onClick={click} 
        className='square'>{value}</button>
    )
}

export default Square
