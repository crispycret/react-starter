import React from 'react';

import {useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import { Auth, AuthInterface } from './components/auth/auth'; 

import AppBar from './components/AppBar'; 
import Footer from './components/Footer'; 

import Home from './pages/Home';
import NotFound from './pages/404';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'




function TestComponent (props:any) {
  return (
    <div>
      <h2>{ props.text ? 'Test' : '' + props.text }</h2>
    </div>
  );
}



// Interface for the props to pass to each component.
// Some components may need additional props.
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
      
      <AppBar {...props} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home {...props} />} />
          <Route path='/login' element={<Login {...props} />} />
          <Route path='/register' element={<Register {...props} />} />
          <Route path='/logout' element={<Logout {...props} />} />
          <Route path='/dashboard' element={<Dashboard {...props} />} />
          <Route path='*' element={<NotFound {...props} />} />
        </Routes>
      </BrowserRouter>
      <Footer {...props} />

    </div>
  );
}




export default App;



