import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Service = ({service}) => {
    const navigate= useNavigate();
    const{ name, price , img, description}=service;
    const handleTakeService= id=>{
        navigate(`/service/${id}`)
    }

    return (
        <div>
        <div>
            <img className='img-fluid' src={img} alt='doctor'/>
            <h2>{name}</h2>
            <h2> {price} taka</h2>
            <p>{description}</p>
            <Button onClick={()=>handleTakeService(name)}>Take Service</Button>
        </div>
        </div>
    );
};

export default Service;