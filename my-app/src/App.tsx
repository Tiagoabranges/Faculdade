/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(0);

  const mapValueToWidth = (value : any) => {
    // Mapeia o valor de 0 a 6 para a largura de 0% a 100%
    return (value / 6) * 100;
  };

  const handleInputChange = (event: any) => {
    const value = parseInt(event.target.value, 10) || 0;
    setInputValue(value);
  };

  return (
    <div className="div-pai">
      <div className="container">
        <div className="progress-bar" style={{ width: `${mapValueToWidth(inputValue)}%` }}></div>
      </div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        min="0"
        max="6"
      />
    </div>
  );
}

export default App;
