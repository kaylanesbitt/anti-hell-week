import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './routes/Home';
import ClassZero from './routes/ClassZero';
import Message from './routes/Message';
import ClassTwo from './routes/ClassTwo';
import ClassThree from './routes/ClassThree';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/message' element={<Message />} />
        <Route path='/0' element={<ClassZero />} />
      </Routes>
    </div>
  )
}

export default App

/*
<>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/classtwo' element={<ClassTwo />} />
        <Route path='/classthree' element={<ClassThree />} />
      </Routes>
    </>
*/
