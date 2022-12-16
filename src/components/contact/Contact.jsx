import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BiConversation } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
// import { RiMessengerLine } from 'react-icons/ri';
// import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='contact--grid container'>
        <div className='contact--grid--options'>
          <article className='contact--grid--options--option'>
            <BiConversation className='contact--grid--options--option--icon' />
            <h4>Ask me anything!</h4>
            <h5>It's not necessary we find an agreement.</h5>
          </article>
          <article className='contact--grid--options--option'>
            <MdOutlineEmail className='contact--grid--options--option--icon' />
            <h4>Email</h4>
            <h5>contact@robertotrasatti.com</h5>
            <a
              href='mailto:robertotrasatti.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
          {/* <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Roberto Trasatti</h5>
            <a href='https://m.me/' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article> */}
          {/* <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+39 123456789</h5>
            <a
              href='https://api.whatsapp.com/send?phone+393337891553'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
