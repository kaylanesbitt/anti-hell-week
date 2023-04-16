import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './routes/Home';
import ClassZero from './routes/ClassZero';
import ClassTwo from './routes/ClassTwo';
import ClassThree from './routes/ClassThree';
import { Route, Routes } from 'react-router-dom';

function App() {

  <div>
    <Routes>
      <Route path='/0' element={<ClassZero></ClassZero>}></Route>
    </Routes>
  </div>

}

export default App;

/*
<>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/classtwo' element={<ClassTwo />} />
        <Route path='/classthree' element={<ClassThree />} />
      </Routes>
    </>
*/
