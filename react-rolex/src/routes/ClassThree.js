import '../App.css';
import React from 'react'
import Calendar from '../components/Calendar';
//import Dates from './components/Dates';
import DataCard from '../components/DataCard';

function App() {
  return (
    <div className="App">
      <h1 className='header-text'>Class Three</h1>
      <div className="container">
        <Calendar className='calendar' />
        {/* <DataCard className='deposits' /> */}
        <DataCard className='deposits' />
      </div>
    </div>
  );
}

export default App;