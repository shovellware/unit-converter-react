import React, { useEffect, useState } from 'react';
import Temperature from './Temperature.js';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Temperature />
      </header>
    </div>
  );
}

export default App;

// const [fahrenheit, setFahrenheit] = useState('');
// const [celsius, setCelsius] = useState('');


// const updateFahBox = e =>{
//   setFahrenheit(e.target.value);
//   setCelsius((e.target.value - 32) * 5 /9);
// };

// const updateCel = e =>{
//   setCelsius(e.target.value); 
// };
// fahBox={updateFahBox} celBox={updateCel} celValue={celsius} fahValue={fahrenheit}
