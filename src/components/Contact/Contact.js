import "./Contact.scss";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  
  const SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault(); //when the form is submitted, this function is called to prevent default refresh

    emailjs
      .sendForm(
        `${SERVICE_ID}`,
        `${TEMPLATE_ID}`,
        form.current,
        `${PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset(); //if the form successfully submits, reset the inputs in the text boxes
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <h2 className="contact__header">CONTACT ME</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}

export default Contact;
