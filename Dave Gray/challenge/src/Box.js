import React from 'react'

const Box = ({ color, hexValue, isDarkText }) => {
  return (
    <section 
        className='square' 
        style={{backgroundColor: color,
        color: isDarkText ? "#000" : '#FFF'}} 
    >
        <p>{color ? color : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}

Box.defaultPropts = {
    color: "Empty Color Value"
}

export default Box