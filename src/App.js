import './App.css';
import './style.css';
import React from 'react';
import {WeeklyForecast} from './weeklyForecast.js';

function App() {
  return (
    <div className="container">
    <h1>Weekly Weather Forecast</h1>
    <WeeklyForecast />
    </div>
  );
}

export default App;
