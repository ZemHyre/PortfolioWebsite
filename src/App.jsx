import React, { useRef } from 'react';

import { Navbar, AboutMe, Skills, Projects } from './components'

function App() {

  return(
    <div className='bg-primary w-full'> 
        <Navbar/>
        <section id="about-me" className="section-container">
          <AboutMe/>
        </section>
        <section id="skills" className="section-container">
          <Skills/>
        </section>
        <section id="projects" className="section-container">
          <Projects/>
        </section>
    </div>
  )
}

export default App