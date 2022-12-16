import React from 'react';
import './Portfolio.css';
import TopSecret from '../../assets/top-secret.jpg';
import LaboratorioHel from '../../assets/laboratoriohel.jpg';

const projects = [
  {
    id: 1,
    title: 'WebApp for Aeronautica Militare',
    image: TopSecret,
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: 'App Desktop for Marina Militare',
    image: TopSecret,
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: 'WebService for Poste Italiane',
    image: TopSecret,
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: 'Laboratorio H&L',
    image: LaboratorioHel,
    github: null,
    demo: 'https://laboratoriohel.it/',
  },
];

const Project = ({ id, title, image, github, demo }) => {
  return (
    <article className='portfolio--grid--item'>
      <div className='portfolio--grid--item--image'>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className='portfolio--grid--item--cta'>
        {github && (
          <a href={github} className='btn' target='_blank' rel='noreferrer'>
            Github
          </a>
        )}
        {demo && (
          <a
            href={demo}
            className='btn btn-primary'
            target='_blank'
            rel='noreferrer'
          >
            Live
          </a>
        )}
      </div>
    </article>
  );
};

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='portfolio--grid container'>
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
