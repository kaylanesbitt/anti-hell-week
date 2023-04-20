import '../App.css';
import React from 'react'
import Calendar from '../components/Calendar';
import HeadmasterDataCard from '../components/HeadmasterDataCard';
import Navbar from '../components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='header-text'>Headmaster Data</h1>
        <div className="container">
          <Calendar className='calendar' />
          <HeadmasterDataCard className='deposits' />
        </div>
      </div>
  );
}

export default App;