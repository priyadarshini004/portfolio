import React from 'react';
import Navbar from './navigation';
import './projects.css';
import img1 from './assets/Screenshot (3).png';
import img2 from './assets/Screenshot (2).png';
import img3 from './assets/Screenshot (1).png';

function projects() {
  return (
    <div>
        <Navbar/>
        <div id="projects"className='project-section'>
            <div className='project-section-box'>
                <h1 className='project-section-title'>Projects</h1>
                <div className='project-section-description'>
                    <div className='project-1'>
                        <img src={img1}></img>
                        <p>This website was made in a group of four using a cat API. The website has different games like match
                            the pairs, guess the breed, choose the correct breed for the following characteristics. It also has 
                            catopedia- random facts about cats. A perfect Website for cat lovers.<br/>
                            <a href='https://gato-kasp.netlify.app/'>Click to visit</a>
                        </p>
                    </div>
                    <div className='project-2'>
                        <p>A website created using React. This is login page which routes to a landing page.
                            This is a sample landing page of a pilates class website.<br/>
                            <a href='https://dapper-brioche-cdd8c3.netlify.app/'>Click to visit</a>
                        </p>
                        <img src={img2}></img>
                    </div>
                    <div className='project-3'>
                        <img src={img3}></img>
                        <p>
                            Who doesn't like listening songs. Here is a website having few of my favourite songs.
                            This website is completely made by HTML,CSS and Javascript. There is play next,previous,pause
                            and shuffle options. Visit the website and have a moody day.<br/>
                            <a href='https://priyadarshini004.github.io/moody/'>Click to Visit</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default projects;