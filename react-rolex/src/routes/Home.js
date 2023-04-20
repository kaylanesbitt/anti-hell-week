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
            <h1 className='header-text'>{render()}</h1>
            <div className="container">
                <Calendar className='calendar' />
                {/* <DataCard className='deposits' /> */}
                <DataCard className='deposits' />
            </div>
        </div>
    );
}

function render() {
    const data =[{"name":"test 1"},{"name":"test 2"}];
    const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

        return (

            <div>
                <h1>{listItems[0]}</h1>
                <p> {listItems[1]}</p>
            </div>
        );
}



export default App;