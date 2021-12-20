import React from 'react';
import './signupApp.css';
import Form from './Form';
import Navbar from '../landingpage/components/Navbar/Navbar';

function Signup() {
  return (<body>
    <div className="App">
       <Navbar/>
    </div>
    <div className="MainContainerSignup">
    <Form/>
    </div>
  </body>);
}

export default Signup;
