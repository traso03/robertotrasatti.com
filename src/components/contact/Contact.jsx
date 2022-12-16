import React from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='contact--grid container'>
        <article className='contact--grid--option'>
          <AiOutlineMail className='contact--grid--option--icon' />
          <h4>Email</h4>
          <h5>contact@robertotrasatti.com</h5>
          <a
            href='mailto:contact@robertotrasatti.com'
            target='_blank'
            rel='noreferrer'
          >
            Send a message
          </a>
        </article>
        <article className='contact--grid--option'>
          <AiOutlineLinkedin className='contact--grid--option--icon' />
          <h4>LinkedIn</h4>
          <h5>Roberto Trasatti</h5>
          <a
            href='https://linkedin.com/in/robertotrasatti/'
            target='_blank'
            rel='noreferrer'
          >
            Visit profile
          </a>
        </article>
        <article className='contact--grid--option'>
          <FiGithub className='contact--grid--option--icon' />
          <h4>Github</h4>
          <h5>Traso03</h5>
          <a href='https://github.com/traso03' target='_blank' rel='noreferrer'>
            Look at the code
          </a>
        </article>
      </div>
    </section>
  );
};

export default Contact;
