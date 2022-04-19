import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../fairbase.init';

const Sdetailes = () => {

    const [user]=useAuthState(auth);
    const navigate=useNavigate();
    const handlepayment=()=>{
if(user){
   navigate('/success')
}
else(navigate('/login'))
    

    }
    const {service}=useParams();
    return (
        <div className='container text-center'>
            <h1 className='my-5'>You Have select <span className='text-primary'>{service} </span> service </h1>
            <Button onClick={handlepayment}> Payment </Button>
        </div>
    );
};

export default Sdetailes;