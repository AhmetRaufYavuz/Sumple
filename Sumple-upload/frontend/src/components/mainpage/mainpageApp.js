import React from "react"; 
import Content from "./layouts/Content";
import Widged from "./layouts/Widged";
import Container from "./layouts/Container";
import Sidebar from "./layouts/Sidebar";
import './mainpage.css'

function MainpageApp(){
 return (
  <Container>
  <Sidebar/>
  <Content/>
  <Widged />
 </Container>
 );


};
export default MainpageApp;