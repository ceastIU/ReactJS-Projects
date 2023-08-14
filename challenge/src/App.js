import { useState } from 'react';
import './App.css';
import Box from './Box';
import ColorInput from './ColorInput';

function App() {
  const [color,setColor] = useState('Empty Value');


  return (
    <div className="App">
      <Box
        color ={color}
        setColor={setColor}
      />
      <ColorInput 
        color ={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
