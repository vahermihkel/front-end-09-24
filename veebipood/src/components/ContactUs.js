import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fum24bj', 'template_ld2lsyd', form.current, {
        publicKey: 'Xbn0xj_4LjNugxYGl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> 
      <input type="text" name="from_name" /> <br />
      <label>Email</label>
      <input type="email" name="from_email" /> <br />
      <label>Message</label>
      <textarea name="message" /> <br />
      <label>Rating</label>
      <input type="range" min={1} max={5} name="rating" /> <br />
      <input type="submit" value="Send" />
    </form>
  );
};