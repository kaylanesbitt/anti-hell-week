import '../App.css';
import React from 'react'
import Calendar from '../components/Calendar';
//import Dates from './components/Dates';
import DataCard from '../components/DataCard';
import Navbar from '../components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='header-text'>Class Two</h1>
      <div className="container">
        <Calendar className='calendar' />
        {/* <DataCard className='deposits' /> */}
        <DataCard className='deposits' />
      </div>
    </div>
  );
}

export default App;