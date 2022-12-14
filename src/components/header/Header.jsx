import React, { useState } from 'react';
import './Header.css';

import SmileAnimoji from '../../assets/smile_animoji.png';
import { FaHamburger } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

const links = [
  { text: 'About', emojiCode: '', url: 'about' },
  { text: 'Portfolio', emojiCode: '', url: 'portfolio' },
  { text: 'Contact', emojiCode: '', url: 'contact' },
];

const LinkItem = ({ text, emojiCode, url }) => {
  return (
    <li>
      <a href={'#' + url}>
        <span>{emojiCode}</span>
        {' ' + text}
      </a>
    </li>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    const body = document.getElementsByTagName('body')[0];
    if (!isMobileMenuOpen) {
      body.classList.add('noscroll');
    } else {
      body.classList.remove('noscroll');
    }
  };

  return (
    <header className='header'>
      <div className='header--name'>
        <a href='#hero'>
          <span className='text-primary'>ROBERTO</span> TRASATTI
        </a>
      </div>

      <div className='header--logo'>
        <img src={SmileAnimoji} alt='Roberto Trasatti Animoji' />
      </div>

      <nav className='header--nav'>
        <ul className='header--links'>
          {links.map((link, index) => (
            <LinkItem key={index} {...link} />
          ))}
        </ul>

        <div className='header--hamburger--icon' onClick={openMenu}>
          {isMobileMenuOpen ? <CgClose /> : <FaHamburger />}
        </div>

        {isMobileMenuOpen && (
          <ul className='header--links--mobile'>
            {links.map((link, index) => (
              <LinkItem key={index} {...link} />
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
