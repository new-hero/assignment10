import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Login from './../Login/Login';

const Register = () => {
    return (
        <div className='w-50 mx-auto mt-5'>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Enter full name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I will agree all terms and condition" />
  </Form.Group>
  <p className='mt-3'>Have a Profile? <span className='text-primary'> Login </span> </p>
  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
            
        </div>
    );
};

export default Register;