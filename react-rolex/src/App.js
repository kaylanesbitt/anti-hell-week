import React, { useState, useEffect } from 'react';
import './index.css';
import Incubator from './routes/Incubator';
import Headmaster from './routes/Headmaster';
import President from './routes/President';
import { Route, Routes } from 'react-router-dom';

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
        <Route path='/' element={<Incubator />} />
        <Route path='/headmaster' element={<Headmaster />} />
        <Route path='/president' element={<President />} />
      </Routes>
    </>
*/
