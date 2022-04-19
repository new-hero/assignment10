import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../fairbase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
  const navigate=useNavigate();
  const location= useLocation()
  let from= location.state?.from?.pathname || '/'

  const emailRef=useRef('');
  const passwordRef=useRef('');
  const [
    signInWithEmailAndPassword,
    user, error ] = useSignInWithEmailAndPassword(auth );
  if(user){
    navigate(from, {replace:true});
  }
let errorelement
if (error) {
      errorelement=error.message
}
  
  const handleSubmit=event=>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
  }
  const handleRegister= ()=>{
    navigate("/register")
  }
  const handlereset= async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }
    return (
        <div className='w-25 mx-auto mt-5'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"  ref={passwordRef} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Login
            </Button>
          </Form>
            <p className='mt-3'>New in Doctor Service? <span className='text-danger' onClick={handleRegister}> Create a profile. </span> </p>
            <p>forget password?? <span onClick={handlereset}> Reset password</span></p>
            <p>{errorelement}</p>
        </div>
    );
};

export default Login;