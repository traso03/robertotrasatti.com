import React from 'react';
import './Footer.css';

import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer--grid'>
        <div className='footer--info'>P. IVA 12345678910</div>
        <div className='footer--socials'>
          <a href='#'>
            <AiOutlineLinkedin />
          </a>
          <a href='#'>
            <AiOutlineGithub />
          </a>
        </div>
      </div>
      <div className='footer--copyright'>© Roberto Trasatti 2022</div>
    </footer>
  );
};

export default Footer;
