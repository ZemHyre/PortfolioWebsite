import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [activeSection, setActiveSection] = useState('about-me');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-me', 'skills', 'projects', 'education'];
      const currentScrollPos = window.pageYOffset + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section.offsetTop <= currentScrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="sticky top-0 z-10">
      <nav className='bg-nav flex justify-between items-center py-6 px-16 border-nav'>
        <ul className="flex justify-center space-x-12">
          <li>
            <Link
              activeClass="active"
              to="about-me"
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              className={`text-nav cursor-pointer ${
                activeSection === 'about-me' ? 'nav-selected' : ''
              }`}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              className={`text-nav cursor-pointer ${
                activeSection === 'skills' ? 'nav-selected' : ''
              }`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              className={`text-nav cursor-pointer ${
                activeSection === 'projects' ? 'nav-selected' : ''
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              className={`text-nav cursor-pointer ${
                activeSection === 'education' ? 'nav-selected' : ''
              }`}
            >
              Education
            </Link>
          </li>
        </ul>
        <button className="px-4 py-2 btn-text font-bold nav-btn rounded-full mr-3">
          Contact Me
        </button>
      </nav>
    </div>
  );
}

export default Navbar;