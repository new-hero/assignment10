import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../fairbase.init';


const Register = () => {
  
  const navigate=useNavigate();

  const handlelogin= ()=>{
    navigate("/login")
  }
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true} );
  if(user){
    navigate('/')
  }
  let errorelement
  if (error) {
      errorelement= error.message;
  }
  const handleSubmit= e => {
    e.preventDefault();
    const email= e.target.useremail.value
    const password= e.target.userpassword.value
    createUserWithEmailAndPassword(email, password)
  }

  
    return (
        <div className='w-25 mx-auto mt-5'>
          <Form onSubmit={handleSubmit}>
           
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='useremail' placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='userpassword' placeholder="Password" />
            </Form.Group>
        
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
            <p className='mt-3'>Have a Profile? <span className='text-primary' onClick={handlelogin}> Go to Login </span> </p>  
            <p className='text-danger'> {errorelement}</p>

          </div>
    );
};

export default Register;