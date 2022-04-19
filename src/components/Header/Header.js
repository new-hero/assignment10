import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../fairbase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const navigate=useNavigate();
  const handlelogout=()=>{
    signOut(auth);
    navigate('/')
    
  
  }
  const [user]=useAuthState(auth)
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

                {
                user?<Button onClick={handlelogout}>Log out</Button>:<Nav.Link as={Link} to="/login" className='text-light'>Login</Nav.Link>
                }
                </Nav>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>
    );
};

export default Header;