import React from "react"; 
import Content from "./layouts/Content";
import Widged from "./layouts/Widged";
import Container from "./layouts/Container";
import Sidebar from "./layouts/Sidebar";

const App = () =>{
 return (
   <Container>
    <Sidebar/>
    <Content/>
    <Widged />
   </Container>
 );


};
export default App;