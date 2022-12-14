import React from 'react';
import './Hero.css';

import RobertoTrasattiPhoto from '../../assets/hero.png';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero--grid container'>
        <div className='hero--grid--info'>
          <h1>
            I help people and companies build their own{' '}
            <span className='text-primary'>software</span>.
          </h1>
          <p>
            I'm a passionate and enthusiastic software developer from Rome,
            Italy. I've worked as a software developer for two years in a
            consultancy company, carrying out assignments for important clients
            such as Aeronautica Militare, Marina Militare and Poste Italiane.
          </p>
          <p>
            I'm currently working as a Freelance and help individuals and
            companies in the development of their software.
          </p>
          <a href='#contact' className='btn'>
            Contact Me
          </a>
        </div>
        <div className='hero--grid--photo'>
          <img src={RobertoTrasattiPhoto} alt='Roberto Trasatti' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
