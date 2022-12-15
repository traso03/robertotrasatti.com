import React from 'react';
import './Hero.css';

import RobertoTrasattiPhoto from '../../assets/hero.png';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero--grid container'>
        <div className='hero--grid--info'>
          <h4>Hi, i'm Roberto Trasatti.</h4>
          <h1>Fullstack Developer Based In Rome.</h1>
          <p>
            I'm a passionate and enthusiastic software developer. I've worked
            for two years in a consultancy company, carrying out assignments for
            important clients such as Aeronautica Militare, Marina Militare and
            Poste Italiane.
          </p>
          <p>
            I'm currently working as a freelance and help individuals and
            companies in the development of their software.
          </p>
          <div className='hero--grid--info--cta'>
            <a href='#contact' className='btn'>
              My Work
            </a>
            <a href='#contact' className='btn btn-primary'>
              Let's Talk
            </a>
          </div>
        </div>
        <div className='hero--grid--photo'>
          <img src={RobertoTrasattiPhoto} alt='Roberto Trasatti' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
