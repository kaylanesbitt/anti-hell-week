import './App.css';
import React from 'react'
import Calendar from './components/Calendar';
import Dates from './components/Dates';

function App() {
  return (
    <div className="App">
      <h1 className='header-text'>Calendar</h1>
      <div className="container">
        <Calendar className='calendar' />
        <Dates className='deposits' />
      </div>
    </div>
  );
}

export default App;