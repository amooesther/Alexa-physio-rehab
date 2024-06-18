import React from 'react';
import './AppointmentList.css';

const AppointmentList = ({ appointments }) => {
  return (
    <div className="appointment-list">
      <h2>Appointments</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              {appointment.name} - {appointment.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments booked yet.</p>
      )}
    </div>
  );
};

export default AppointmentList;
