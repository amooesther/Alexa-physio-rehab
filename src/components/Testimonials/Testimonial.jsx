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
      text: 'They have one of the best hands. I would highly recommend this place to anyone in need of physiotherapy services anytime anyday. Very impressive service delivery with positive results!!!!',
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
      text: 'They have one of the best hands. I would highly recommend this place to anyone in need of physiotherapy services anytime anyday. Very impressive service delivery with positive results!!!!',
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
    setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className='testimony'>
      <h3>See what some of our patients have to say</h3>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="testimonial-card"
            style={{ display: (index >= startIndex && index < startIndex + 3) ? 'block' : 'none' }}
          >
            <div className="testimonial-text">
              <p>{testimonial.text}</p>
            </div>
            <div className="testimonial-author">
              <p>- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
