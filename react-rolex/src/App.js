import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './routes/Home';
import Message from './routes/Message';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/message' element={<Message />} />
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
