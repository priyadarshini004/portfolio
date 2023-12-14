import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
