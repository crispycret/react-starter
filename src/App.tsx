import React from 'react';

import {useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import { Auth, AuthInterface } from './components/auth/auth'; 

import Home from './pages/Home';


function TestComponent (props:any) {
  return (
    <div>
      <h2>{ props.text ? 'Test' : '' + props.text }</h2>
    </div>
  );
}

interface PropsInterface {
  auth: AuthInterface;
}



function App() {


  // Authentication module.
  const auth = Auth();

  // Props to pass to each component
  const props: PropsInterface = {
    auth
  }


  return (
    <div id="app">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home {...props} />} />
          <Route path='/login' element={<TestComponent props={{text:"Login"}} />} />
          <Route path='/register' element={<TestComponent props={{text:"Register"}} />} />
          <Route path='/logout' element={<TestComponent props={{text:"Logout"}} />} />
          <Route path='/dashboard' element={<TestComponent props={{text:"Dashboard"}} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}




export default App;



