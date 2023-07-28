// App.js
import React from 'react';
import TemperatureControl from './Temperature';
import './Temperature.css';

const App = () => {
  return (
    <center>
    <div>

      <h1>Temperature Control App</h1>
      <TemperatureControl />
    </div>
    </center>
  );
};

export default App;
