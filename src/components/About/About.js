import React from 'react';
import './About.css'
import sk from '../../images/sk.jpg'
const About = () => {
    return (
        <div className='container'>
            <div>
                <img src={sk} alt= "subrata"/>
                <h2>Name: Subrata Sarker</h2>
                <p className='aboutme py-3'> Description:- Every persone have a gole. People reached gole after Hard work . one day i dicide my gole going to be a web-developer but its vary dificult for me because i am a frist son of my parents when i liveing with my family more time spend in this course but i am in a full time job for living . i have no more time for this course i am very upset for this condition. i am sorry becouse i can not complete this course on time but i promise that one day i complete my mission. please support me in future. </p>
            </div>
            
        </div>
    );
};

export default About;