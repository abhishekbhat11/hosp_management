import React, { useState } from 'react';
import './BookAppointment.css'; // Import your CSS file for styling

function BookAppointment() {
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  const handleBookAppointment = () => {
    // You can add your booking logic here, e.g., send a request to a server
    // For simplicity, we'll just set a flag to indicate a successful booking
    setIsAppointmentBooked(true);
  };

  return (
    <div className="book-appointment-container">
      <h3>Appointment Booking Form</h3>
      {isAppointmentBooked ? (
        <div>
          <p>Appointment booked successfully for {patientName} on {appointmentDate} at {appointmentTime}.</p>
        </div>
      ) : (
        <div>
          <form>
            <div>
              <label htmlFor="patientName">Patient Name:</label>
              <input
                type="text"
                id="patientName"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="appointmentDate">Appointment Date:</label>
              <input
                type="date"
                id="appointmentDate"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="appointmentTime">Appointment Time:</label>
              <input
                type="time"
                id="appointmentTime"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleBookAppointment}>
              Book Appointment
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default BookAppointment;
