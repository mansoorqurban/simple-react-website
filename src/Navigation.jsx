import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
          <Navbar bg="transparent" expand="md">
  <Container>
    <Navbar.Brand href="#home" className='text-primary'>Mansoor Qurban</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavLink className='nav mx-2'  exact activeClassName='menu-active' to="/">Home</NavLink>
        <NavLink className='nav mx-2'  activeClassName='menu-active' to="/about">About</NavLink>
        <NavLink className='nav mx-2'  activeClassName='menu-active' to="/service">Services</NavLink>
        <NavLink className='nav mx-2'  activeClassName='menu-active' to="/contact">Contact us</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

          </div>
        </div>
       
      </div>

        
        
    )
}

export default Navigation;
