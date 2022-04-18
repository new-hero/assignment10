import React from 'react';
import image1 from '../../images/c.jpg'
import image2 from '../../images/b.jpg'
import image3 from '../../images/d.jpg'
import image4 from '../../images/a.jpg'
import Service from '../Service/Service';
import './Home.css'
// import image1 from '../../images/a.jpg'
const services=[
    {
        id: 1,
        name: 'Patient Meet',
        img: image3,
        price: 500,
        description:'Meet the Doctor share your problem and take advice and tretment from the Doctor. '
    },
    {
        id: 2,
        name: 'Ultrasound',
        img: image2,
        price: 1000,
        description:'Ultrasound service is too mouch helpful for patient. some patient need it. Doctor provide this service.'
    },
    {
        id: 3,
        name: 'Surgery',
        img: image1,
        price: 5000,
        description:'Some serious patient need to emergency surgery. Doctor provide this service in emergency patient.'
    }
];

const Home = () => {
    return (
        <div className='container'>
            <div className='banner mb-5 bg-light'>
            <div className='row'>
            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                <h1 className='text-dark'> Doctor Service</h1>
            </div>
            <div className='col-lg-6'>
                <img src={image4} className='img-fluid' alt='service'/>
            </div>
            </div>
            </div>


            <div className='service'>
            {
            services.map(service=> <Service key={service.id} service={service}></Service>)
            }
            </div>
            
        </div>
        
    );
};

export default Home;