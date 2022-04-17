import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">Responsible Doctor</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
      <Nav className="ms-auto">
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
        {/* <Link to='/'> Home</Link>
        <Link to='/about'> about</Link>
        <Link to='/blogs'> blogs</Link> */}
        </div>
    );
};

export default Header;