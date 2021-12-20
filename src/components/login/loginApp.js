import React, { useState } from 'react';
import './login.css';
import Login from './login';
import Navbar from '../landingpage/components/Navbar/Navbar';

function LoginApp() {
  const [token, setToken] = useState('');
  const [loggedin, setLoggedIn] = useState(null);

  const userLogin = (tok) => {
    setToken(tok);
    console.log(tok);
    console.log(localStorage.getItem('status'));

    if(localStorage.getItem('status') == 'success'){
      setLoggedIn(true);
    }
    else
    {
      setLoggedIn(false);
      
    }


    //this.props.Login(loggedin);
    
  }
  return (
    <body>
      <div className="App">
         <Navbar/>
      </div>
      <div className="MainContainerLogin">
      <Login userLogin={userLogin}/>
      </div>
    </body>
  
    );
}

export default LoginApp;
