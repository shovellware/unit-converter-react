import React from 'react';
import Temperature from './Temperature.jsx';
import Weight from '../Components/Weight/Weight'
import '../Styles/App.css';

const App = () => (
  <div className="App">
    <div className="ms-Grid-col">
      <Temperature />
      <Weight />
    </div>
  </div>
);

export default App;
