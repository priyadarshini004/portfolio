import React from 'react';
import profile from './assets/profile-pic (1).png';
import Navbar from './navigation';
import './home.css';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
  return (
    <div>
      <Navbar/>
      <div id = "home" className='main-container'>
      <img src={profile} alt="Profile" />
      <div className='main-container-box'>
        
        <h1 className='main-container-title '>
          
          <span>Priyadarshini</span><br/>
          <span>Muduli</span>
        </h1>
        <p className='main-container-description'>
          Hi! This is Priyadarshini Muduli, a front-end designer from Bhubaneswar, India.
          <br/>
          Welcome to my digital portfolio.
        </p>
        <div className='footer-section'>
      <a href='https://github.com/priyadarshini004'><GitHubIcon/></a>
      <a href='https://www.linkedin.com/in/priyadarshini-muduli-8a7ab0258'><LinkedInIcon/></a>
    </div>
      </div>
      
    </div>
    <About/>
    <Skills/>
    <Projects/>
   </div>
  );
}

export default Home;
