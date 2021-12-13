import React from 'react';
import Login from './components/login/login';
import About from './components/mainpage/mainPage';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/signup/signupApp';
import LoginApp from './components/login/loginApp';
import MainpageApp from './components/mainpage/mainpageApp';



function App() {




  return (
    <Routes>


    <Route  path='/login' element = {
    <LoginApp/>
    }/>
    <Route path='/main' element={
      <MainpageApp/>
      //<About/>
    } />
    <Route path='/signup' element={
      <Signup/>
    } />
    
    
    </Routes>
  );
}

export default App;
