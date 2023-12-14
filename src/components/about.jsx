import React from 'react';
import Navbar from './navigation';
import './about.css';
import bg from './assets/bg.jpeg';

function about() {
  return (
    <div>
        <Navbar/>
    <div id = "about" className='about-section'>
        <div className='about-section-box'>
          
            <h1 className='about-section-title'>About Me</h1>
            <p className='about-section-description'>
                My name is Priyadarshini Muduli. I am from Bhubaneswar,Odisha.
                I have completed my matriculation from Saint Arnold's School, Bhubaneswar and my intermediate from
                DAV Public School,Pokhariput. I am currently persuing my bachelors of technology degree in Electronics 
                and Telecommunication depatrment from Veer Surendra Sai University of technology.
                My hobbies include dancing,acting and listening music.<br/>
            </p>
        </div>
    </div>
    </div>
  )
}

export default about;