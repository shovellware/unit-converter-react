import React from 'react';
import Temperature from './Temperature.jsx';
import Weight from '../Components/Weight/Weight'
import '../Styles/App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Temperature />
      <Weight />
    </header>
  </div>
);

export default App;
