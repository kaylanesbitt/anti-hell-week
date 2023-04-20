import React from 'react';
import './index.css';
import Incubator from './routes/Incubator';
import Headmaster from './routes/Headmaster';
import President from './routes/President';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Incubator />} />
        <Route path='/headmaster' element={<Headmaster />} />
        <Route path='/president' element={<President />} />
      </Routes>
    </>
  );
}

export default App;
