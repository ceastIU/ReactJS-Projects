import React from 'react'
import { useRef } from 'react'
import colorNames from 'colornames'

const ColorInput = ({ color, setColor, setHexValue, isDarkText, setIsDarkText }) => {
    const inputRef = useRef();
    return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='addItem'>Add Color Name</label>
        <input
            autoFocus
            ref={inputRef}
            id='addColor'
            type='text'
            placeholder='Add Color Name'
            required
            value={color}
            onChange={(e) => {
                setColor(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
        />
        <button 
            type="button"
            onClick={()=> setIsDarkText(!isDarkText)}
        >
        toggle text color
        </button>
    </form>
  )
}

export default ColorInput