import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [activeSection, setActiveSection] = useState('about-me');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-me', 'skills', 'projects'];
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
      <nav className='bg-nav flex justify-between items-center py-5 px-4 border-nav'>
        <div className='flex-1 flex justify-center items-center'>
          <ul className="hidden md:flex justify-center space-x-7">
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
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;