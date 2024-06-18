import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Appointment.css'
import NavBar from '../../components/NavBar/NavBar';
import { UserContext } from '../../components/user/UserContext'; 
import emailjs from 'emailjs-com';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { user, loginPrompt } = useContext(UserContext); 

  const handleConfirmAppointment = () => {
    if (!user) {
      loginPrompt(); 
      return;
    }

   
    const templateParams = {
      to_email: user.email,
      to_name: user.name,
      selected_date: selectedDate.toString(),
      clinic_email: 'alexaphysiorehab.com',
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.log('Failed to send email:', error);
      });
  };

  return (
    <div>
      <NavBar/>
      <div className='appointWrap'>
        <h2 className='Appoint'>Welcome to Alexa Physiotherapy and Rehabilitation Clinic</h2>
        <h3 className='appoints'>Choose the Date and time you want to visit</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Select a date and time"
        />
        <button onClick={handleConfirmAppointment}>CONFIRM APPOINTMENT</button>
      </div>
    </div>
  );
}

export default Appointment;
