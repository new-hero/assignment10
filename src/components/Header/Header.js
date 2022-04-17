import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div  sticky='top'>
  <Navbar bg="dark" variant="dark" className='py-2 mb-1'>
    <Container >
    <Navbar.Brand as={Link} to="/">Responsible Doctor</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
      <Nav.Link as={Link} to="/blogs" className='text-light'>Blogs</Nav.Link>
      <Nav.Link as={Link} to="/about" className='text-light'>About</Nav.Link>
      </Nav>
      <Nav className="ms-auto">
      <Nav.Link as={Link} to="/login" className='text-light'>Login</Nav.Link>
      <Nav.Link as={Link} to="/register" className='text-light'>Register</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;