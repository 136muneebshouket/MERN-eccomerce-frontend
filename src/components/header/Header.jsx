import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header({ usercarts, useremail }) {
  const [state, setState] = useState(false)

  useEffect(() => {
    if (useremail == "muneeb136@gmail.com") {
      setState(true)
    }

  }, [useremail])

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
        <Container>
          <Navbar.Brand href="#home"><strong>BUY it__{useremail}</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><Link to="/" className='text-light fw-bold'><button class="btn btn-dark">Home</button></Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/Carts" className='text-light fw-bold'><button class="btn btn-dark">Carts&nbsp;<Badge bg="danger">{usercarts}</Badge></button></Link></Nav.Link>
              {/* <NavDropdown className='text-dark' title="catogery" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">       <Link to="/MEN" ><button  class="btn btn-secondary">MEN</button></Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="/WOMEN" ><button  class="btn btn-secondary">WOMEN</button></Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/KIDS" ><button  class="btn btn-secondary">KIDS</button></Link></NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><Link to="/signup" className='text-light fw-bold'><button class="btn btn-dark">signup/login</button></Link></Nav.Link>

            </Nav>


            {state ?
              <Nav>
                <Nav.Link href="#deets"><Link to="/Sell" className='text-light fw-bold'><button class="btn btn-dark">Add item</button></Link></Nav.Link>

              </Nav> : <p>u r not admin</p>}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
