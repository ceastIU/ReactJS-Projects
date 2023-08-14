import React from 'react'

const Box = ({ color, setColor }) => {
  return (
    <div className='square' style={{backgroundColor: color}} >
        <p>{color}</p>
    </div>
  )
}

export default Box