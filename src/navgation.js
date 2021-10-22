import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {Link, Route, Router} from 'react-router-dom'
export default function Navigation() {
    return (
        <div>
            <Navbar className="navig" expand="lg"> 
  <Navbar.Collapse id="basic-navbar-nav">
   
    <Nav className="links ">
 
      <Link  to="/about"><li>ABOUT</li></Link>
    
      <Link   className="text-size" to ="/"> <b>for the love of bread</b></Link>
        <Link to="/Episode"><li>EPISODE</li></Link>
        
        
      
    </Nav>
   

  

  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
