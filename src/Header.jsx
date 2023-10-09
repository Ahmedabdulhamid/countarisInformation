import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { changeMode } from './Redux/getAllCountaries';
import {BsMoon} from 'react-icons/bs'
import { useDispatch,useSelector } from 'react-redux';
import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
   const dispatch=useDispatch()
   const {mode}=useSelector((s)=>s.data)
   console.log(mode);
  return (
    <div>
      <Navbar expand="lg" className={`bg-${mode===true?'light  header':"dark  header1"} `} >
      <Container >
        <Navbar.Brand href="#home"style={{fontFamily:"Nunito Sans",fontWeight:"800"}}className={ `text-${mode===true?"dark":"light"}`}
        as={Link}
        to='/'
        
        >
          
          
           Where In Worled ?</Navbar.Brand>
       
          <Nav className="ms-auto">
            <Nav.Link  style={{fontFamily:"Nunito Sans"}} onClick={()=>dispatch(changeMode())} className={ `text-${mode===true?"dark":"light"}`}> <BsMoon/> Dark mood</Nav.Link>
            
           
          </Nav>
        
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
