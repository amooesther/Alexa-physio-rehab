import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import contact from '../../Assets/contact.jpg';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://wwwalexaphysiorehab.com/info@alexaphysiorehab.com', { // Update with your backend server URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to send the message. Please try again.');
    });
  };

  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-container">
        <h2>Leave us a message</h2>
        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" value={formData.message} onChange={handleChange} cols="40" rows="15" placeholder="Type in your message" required></textarea>
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
