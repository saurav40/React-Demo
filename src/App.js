import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
//import Footer from './components/Footer';
//import Button from 'react-bootstrap/Button';
import {ToastContainer,toast} from "react-toastify";
import Home from './components/Home';
import Course from './components/Course';
import Add from './components/Add';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Routes,Route, Router} from 'react-router-dom';
import Menu from './components/Menu';
import Allcourse from './components/Allcourse';


function App() {
  //Aero function
  const btnHandler = ()=>{
    //toast("this is my message");
    //toast.success("done",{position:'bottom-center'});
    toast.error("error");
  };
  return (
    <>
     <BrowserRouter>
      <ToastContainer/>
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
             <Menu/>
          </Col>
        
          <Col md={8}>
          
          <Routes>
              <Route path='/' element={<Home/>}> </Route>
              <Route path='/add-course' element={<Add/>}></Route>
              <Route path='/view-course' element={<Allcourse/>}></Route>
              
              </Routes>
          </Col>
        </Row>
        
      </Container>
      </BrowserRouter>
     
    







      
      
      {/* 
      <Header/>
      <div>
      <Home/>
      <AllCourses/>
      <Course course={{title:'Java Course',description:'Java for beginers..'}}/>
      <Course course={{title:'React Course',description:'React for beginers..'}}/>
      <Course course={{title:'SQL Course',description:'SQL for beginers..'}}/>
      <Add/>
       {/* <h1>This is dummy Component</h1>
      <Button variant="primary" onClick={btnHandler}>Primary</Button> */}
      
      {/* </div>
      <div>
      <Footer/>
      </div> } */}
    </>
  );
}

export default App;
