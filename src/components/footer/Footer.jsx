import React from 'react';
import './Footer.css';

import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer--grid'>
        <div className='footer--info'>All rights reserved.</div>
        <div className='footer--socials'>
          <a
            href='mailto:contact@robertotrasatti.com'
            target='_blank'
            rel='noreferrer'
          >
            <MdEmail />
          </a>
          <a
            href='https://linkedin.com/in/robertotrasatti/'
            target='_blank'
            rel='noreferrer'
          >
            <BsLinkedin />
          </a>
          <a href='https://github.com/traso03' target='_blank' rel='noreferrer'>
            <BsGithub />
          </a>
        </div>
      </div>
      <div className='footer--copyright'>© Roberto Trasatti 2022</div>
    </footer>
  );
};

export default Footer;
