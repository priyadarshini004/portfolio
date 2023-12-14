import React from 'react';
import Navbar from './navigation';
import c from './assets/c.png';
import cpp from './assets/c++.png';
import html from './assets/html.png';
import css from './assets/css.png';
import javascript from './assets/javascript.png';
import react from './assets/react.png';
import './skills.css';

function skills() {
  return (
    <div>
      <Navbar/>
      <div id = "skills"className='skill-content-box'>
        <h1 className='skill-content-title'>Skills</h1>
        <div className='skill-content-description'>
          <div className='c'>
         <img src={c} className='c'></img>
         <p>C Language</p>
         </div>
         <div className='cpp'>
          <img src={cpp}></img>
          <p>C++ Language</p>
          </div>
          <div className='html'>
          <img src={html} className='html'></img>
          <p>HTML</p>
          </div>
          <div className='css'>
          <img src={css}></img>
          <p>CSS</p>
          </div>
          <div className='javascript'>
          <img src={javascript}></img>
          <p>Javascript</p>
          </div>
          <div className='react'>
          <img src={react}></img>
          <p>React</p>
          </div>        
        </div>
      </div>
    </div>  
  )
};

export default skills;