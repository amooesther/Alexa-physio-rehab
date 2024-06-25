import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import contact from '../../Assets/contact.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-container">
        <h2>Leave us a message</h2>
        <div className="contact-content">
          <div className="contact-form">
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" />
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="+234 800 000 0000" />
              <label htmlFor="message">Message</label>
              <textarea id="message" cols="40" rows="15" placeholder="Type in your message"></textarea>
              <button type="submit">Send Your Message</button>
            </form>
          </div>
          <div className="contact-image">
            <img src={contact} alt="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
