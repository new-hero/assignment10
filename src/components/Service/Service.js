import React from 'react';
import { Button } from 'react-bootstrap';


const Service = ({service}) => {
    const{ name, price , img, description}=service;
    return (
        <div>
        <div>
            <img className='img-fluid' src={img} alt='service image'/>
            <h2>{name}</h2>
            <h2> {price} taka</h2>
            <p>{description}</p>
            <Button>Take Service</Button>
        </div>
        </div>
    );
};

export default Service;