import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: 'Ebenezer Tope',
      text: 'A very wonderful and high rated Physiotherapy in Akure, Ondo State.',
    },
    {
      id: 2,
      name: 'Oluwapelumi Omoleke',
      text: 'They have one of the best hands.I would highly recommend this place to anyone in need of physiotherapy services anytime anyday. Very impressive service delivery with positive results!!!!',
    },
    {
      id: 3,
      name: 'Ambrose Kolurejo',
      text: 'Service was okay',
    },
    {
      id: 4,
      name: 'Ebenezer Tope',
      text: 'A very wonderful and high rated Physiotherapy in Akure, Ondo State.',
    },
    {
      id: 5,
      name: 'Oluwapelumi Omoleke',
      text: 'They have one of the best hands.I would highly recommend this place to anyone in need of physiotherapy services anytime anyday. Very impressive service delivery with positive results!!!!',
    },
    {
      id: 6,
      name: 'Ambrose Kolurejo',
      text: 'Service was okay',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [startIndex]);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1));
  };

  return (
    <div className='testimony'>
      <h3>See what some of our patients have to say</h3>
      <div className="testimonial-container">
        {testimonials.slice(startIndex, startIndex + 3).map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-text">
              <p>{testimonial.text}</p>
            </div>
            <div className="testimonial-author">
              <p>- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow-container">
        <button className="prev-arrow" onClick={handlePrev}>&#8249;</button>
        <button className="next-arrow" onClick={handleNext}>&#8250;</button>
      </div>
      <div><iframe width="100%" height="280" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=280&amp;hl=en&amp;q=3,%20Ado%20street%20ijapo%20Estate%20Akure%20ondo%20state+(Alexa%20Physiotherapy%20and%20Rehabilitation%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
    </div>
  );
};

export default Testimonial;
