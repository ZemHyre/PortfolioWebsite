import React, { useRef } from 'react';

import { Navbar, AboutMe, Skills, Projects, Education, Footer } from './components'

function App() {

  return(
    <div className='bg-primary w-full'> 
        <Navbar/>
        <section id="about-me" className="section-aboutme">
          <AboutMe/>
        </section>
        <section id="skills" className="section-skills">
          <Skills/>
        </section>
        <section id="projects" className="section-projects">
          <Projects/>
        </section>
        <section id="education" className="section-education">
          <Education/>
        </section>
        <div className="section-footer">
          <Footer/>
        </div>
    </div>
  )
}

export default App