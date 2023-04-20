import '../App.css';
import React from 'react'
import Calendar from '../components/Calendar';
import PresidentDataCard from '../components/PresidentDataCard';
import Navbar from '../components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='header-text'>President Data</h1>
        <div className="container">
          <Calendar className='calendar' />
          <PresidentDataCard className='deposits' />
        </div>
      </div>
  );
}

export default App;