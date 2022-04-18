import React from 'react';

const Footer = () => {
    const today= new Date();
    const year= today.getFullYear();
    return (
        <div className='text-center bg-dark py-5 text-light mt-5'> 
           <p> &copy; All right resorved by sk {year} </p> 
        </div>
    );
};

export default Footer;