import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark-blue text-white py-6">
      <div className="container mx-auto px-2">
        <h3 className="text-center text-lg font-bold text-accent-footer tracking-wider pointer-events-none p-4">Contacts</h3>
            <ul className="mt-1 flex justify-center p-2">
              <li><a href="mailto:armisatas@gmail.com" className="text-footer m-5">armisatas@gmail.com</a></li>
              <span className="line-after"></span>
              <li><a className="text-footer m-5">+370 657 58869</a></li>
              <span className="line-after"></span>
              <li><a className="text-footer m-5">Joniškis, Statybininkų g. 27-5</a></li>
            </ul>
            <ul className="mt-1 flex justify-center p-2">
              <li>
                <a href="#" className="text-footer m-5">
                  Github <span className="ml-1"><FontAwesomeIcon icon={faGithub} /></span>
                </a>
                <span className="line-after"></span>
              </li>
              <li>
                <a href="#" className="text-footer m-5">
                  LinkedIn <span className="ml-1"><FontAwesomeIcon icon={faLinkedin} /></span>
                </a>
                <span className="line-after"></span>
              </li>
              <li>
                <a href="#" className="text-footer m-5">
                  Instagram <span className="ml-1"><FontAwesomeIcon icon={faInstagram} /></span>
                </a>
              </li>
            </ul>
        <hr className="my-6 border-blue" />
        <p className="text-sm text-footer-last text-center pointer-events-none">
          Arminas Attas - Portfolio
        </p>
        <div className='text-sm text-footer-last text-center pointer-events-none'>
          2023
        </div>
      </div>
    </footer>
  );
}

export default Footer;
