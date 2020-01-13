import React from 'react';
import Temperature from './Temperature.jsx';
import Weight from '../Components/Weight/Weight'
import '../Styles/App.css';
import AppNav from './AppNav';

const App = () => (
  <div className="ms-Grid">
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm2">
        <AppNav />
      </div>
      <div className="ms-Grid-col ms-sm8 ms-lg8">
        <Temperature />
        <Weight />
      </div>
    </div>
  </div>
        
);

export default App;
