import React from 'react'
import { useRef } from 'react'

const ColorInput = ({ color,setColor }) => {
    const inputRef = useRef();
  return (
    <form>
        <label htmlFor='addItem'>Add Color Name</label>
        <input
            autoFocus
            ref={inputRef}
            id='addColor'
            type='text'
            placeholder='Add Color Name'
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
        />
    </form>
  )
}

export default ColorInput