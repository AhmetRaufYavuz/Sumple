import React, { Component} from 'react';
import {Navigate} from 'react-router-dom';

class Login extends Component {

  state = {
    credentials: {username: '', password: ''}
  }
  

  login = event => {
    fetch('http://127.0.0.1:8000/auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then(data=>data.json())
    .then(
      data => {
        //localStorage.setItem('status', data.ok);
        //console.log(localStorage.getItem('status'));
        /*if(data.non_field_errors[0]== "Unable to log in with provided credentials."){
          console.log('no');
        }*/
        if(data.token ==null){
          localStorage.setItem('status' , data.non_field_errors[0]);
        }
        else{
          localStorage.setItem('status' , 'success');
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', this.state.credentials.username)
        }
        
        this.props.userLogin(data.token);
      }

    )
    
    
    
    .catch( error => {
      console.error(error)
      
    }
    )
  }


  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  

  render() {

    if ((localStorage.getItem('status'))== "success") {
      localStorage.removeItem('status');
      return <Navigate to="/main" />
    } 
     else{
       
      return (
        <div className="app">
        <div className="form-inner">
          <h1>Login user form</h1>
          {(localStorage.getItem('state') == 'success') ? ( <div className="error">error</div> ) : ''}
          <div className="form-group">
            <label>
              Username:
              <input type="text" name="username"
              value={this.state.credentials.username}
              onChange={this.inputChanged}/>
            </label>
          </div>

          <div className="form-group">
          <br/>
          <label>
            Password:
            <input type="password" name="password"
             value={this.state.credentials.password}
             onChange={this.inputChanged} />
          </label>
          <br/>
          </div>
          <button onClick={this.login}>Login</button>
        </div>
        </div>
      );
    }

  }
}

export default Login;
