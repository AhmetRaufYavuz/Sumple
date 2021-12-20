import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/signup/signupApp';
import LoginApp from './components/login/loginApp';
import MainpageApp from './components/mainpage/mainpageApp';
import LandingPage from './components/landingpage/App';
import Upload from './components/uploadpage/uploadApp';
import ProfileApp from './components/profile/profileApp';



function App() {




  return (
    <Routes>
    
    <Route  path='/' element = {
    <LandingPage/>
    }/>

    <Route  path='/login' element = {
    <LoginApp/>
    }/>
    <Route path='/main' element={
      <MainpageApp/>
      //<About/>
    } />

    <Route  path='/upload' element = {
    <Upload/>
    }/>

    <Route path='/signup' element={
      <Signup/>
    } />

    <Route path='/profile' element={
      <ProfileApp/>
    } />

    
    
    
    </Routes>
  );
}

export default App;
