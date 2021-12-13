import React, { useState } from 'react';
import './login.css';
import Login from './login';

function LoginApp() {
    const [token, setToken] = useState('');
  const [loggedin, setLoggedIn] = useState('');

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
  return <Login userLogin={userLogin}/>;
}

export default LoginApp;
