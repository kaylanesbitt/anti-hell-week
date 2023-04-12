import React from 'react';
import './index.css';
import Home from './routes/Home';
import ClassTwo from './routes/ClassTwo';
import ClassThree from './routes/ClassThree';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/classtwo' element={<ClassTwo />} />
        <Route path='/classthree' element={<ClassThree />} />
      </Routes>
    </>
  );
}

export default App;
