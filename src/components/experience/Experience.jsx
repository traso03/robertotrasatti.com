import React from 'react';
import './Experience.css';

import { AiOutlineCheckCircle } from 'react-icons/ai';

const experiences = {
  frontend: [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Experienced' },
    { name: 'React', level: 'Basic' },
    { name: 'Bootstrap', level: 'Experienced' },
    { name: 'Tailwind', level: 'Basic' },
  ],
  backend: [
    { name: '.NET', level: 'Intermediate' },
    { name: 'Java', level: 'Basic' },
    { name: 'SQL', level: 'Intermediate' },
  ],
};

const Technology = ({ name, level }) => {
  return (
    <article className='experience--grid--content--details'>
      <AiOutlineCheckCircle className='experience--grid--content--details--icon' />
      <div>
        <h4>{name}</h4>
        <small className='text-dark'>{level}</small>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='experience--grid container'>
        <div className='experience--grid--frontend'>
          <h3>Frontend Development</h3>
          <div className='experience--grid--content'>
            {experiences.frontend.map((experience) => {
              return <Technology key={experience.name} {...experience} />;
            })}
          </div>
        </div>
        <div className='experience--grid--backend'>
          <h3>Backend Development</h3>
          <div className='experience--grid--content'>
            {experiences.backend.map((experience) => {
              return <Technology key={experience.name} {...experience} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
