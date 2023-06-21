import "./Contact.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <section id="contact" className="contact">
      <div className="contact__text">
        <h2 className="contact__header">CONTACT ME</h2>
        <p>
          I love hearing about all sorts of projects and from all sorts of people! Don't hesitate to reach out.
        </p>
      </div>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <label className="contact__form--label">Name</label>
        <input className="contact__form--input" type="text" name="user_name" required />
        <label className="contact__form--label">Email</label>
        <input className="contact__form--input" type="email" name="user_email" required />
        <label className="contact__form--label">Message</label>
        <textarea className="contact__form--input" name="message" required />
        <input className="contact__form--submit" type="submit" value="SEND" />
      </form>
    </section>
  );
}

export default Contact;
