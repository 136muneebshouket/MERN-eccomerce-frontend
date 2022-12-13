import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

function Catogerynavbar({catogery}) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
      <Container>
      {/* <NavDropdown title="catogery" id="collasible-nav-dropdown" variant="success">
              <NavDropdown.Item href="#action/3.1"><button  class="btn btn-dark">MEN</button></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <button  class="btn btn-dark">WOMEN</button>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> <button  class="btn btn-dark">KIDS</button></NavDropdown.Item>
             
             
            </NavDropdown> */}
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
       Catogery
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><button onClick={()=>catogery('MEN')} class="btn btn-dark">MEN</button></Dropdown.Item>
        <Dropdown.Item ><button  onClick={()=>catogery('WOMEN')} class="btn btn-dark">WOMEN</button></Dropdown.Item>
        <Dropdown.Item ><button  onClick={()=>catogery('KIDS')} class="btn btn-dark">KIDS</button></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
         
            
          </Nav>
          
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}

export default Catogerynavbar