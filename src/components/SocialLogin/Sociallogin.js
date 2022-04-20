import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../fairbase.init';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    let errorelement;
    if(error){
        errorelement= error.message;
    }
    if(user){
        navigate("/")
    }

    return (
        <div>
            <Button onClick={()=>signInWithGoogle()}> Login with Google </Button>
            <p>{errorelement}</p>
        </div>
    );
};

export default Sociallogin;