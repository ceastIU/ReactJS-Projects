import { useState } from 'react';
import './App.css';
import Box from './Box';
import ColorInput from './ColorInput';

function App() {
  const [color,setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText,setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Box
        color ={color}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <ColorInput 
        color ={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
