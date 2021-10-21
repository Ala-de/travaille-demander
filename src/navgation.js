import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {Link, Route, Router} from 'react-router-dom'
export default function Navigation() {
    return (
        <div>
            <Navbar>
  <Navbar.Brand href="#home">for the love of bread</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   
    <Nav className="links">
     
      
      <Link to="/about"><li>ABOUT</li></Link>

        <Link to="/Episode"><li>EPISODE</li></Link>
        
        
      
    </Nav>
   

  

  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
