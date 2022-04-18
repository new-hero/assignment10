import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky='top'>
            <Container>
            <Navbar.Brand as={Link} to="/">Doctor Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
                <Nav.Link as={Link} to="/blogs" className='text-light'>Blogs</Nav.Link>
                <Nav.Link as={Link} to="/about" className='text-light'>About</Nav.Link>
                </Nav>
              <Nav>
              <Nav className="ms-md-auto">
                <Nav.Link as={Link} to="/login" className='text-light'>Login</Nav.Link>
                <Nav.Link as={Link} to="/register" className='text-light'>Register</Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>
    );
};

export default Header;