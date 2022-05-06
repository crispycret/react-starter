import React from 'react';

import {useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';




function TestComponent (props:any) {
  return (
    <div>
      <h2>{ props.text ? 'None' : '' + props.text }</h2>
    </div>
  );
}



function Home (props:any) {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
} 




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<TestComponent props={{text:"Login"}} />} />
          <Route path='/dashboard' element={<TestComponent props={{text:"Dashboard"}} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}




export default App;



