import React, { Component,useState} from 'react';
import {Navigate} from 'react-router-dom';
import Content from "./layouts/Content";
import Widged from "./layouts/Widged";
import Container from "./layouts/Container";
import Sidebar from "./layouts/Sidebar";

import './mainpage.css'

class MainpageApp extends Component{
 render(){
    if(localStorage.getItem('token') == null)
    {
        return <Navigate to="/login" />
    }
    else
    {
        return (
        <Container>
        <Sidebar/>
        <Content/>
        <Widged />
       </Container>
       );
    }
   
 }
     
  
 


};
export default MainpageApp;

