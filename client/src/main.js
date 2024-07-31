import React from 'react';
import './styling.css'; // Import your CSS file for styling

function HospitalManagementSystem() {
  const locationUrl = "https://www.google.com/maps/place/PES+University/@12.9352194,77.5335009,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3e468d8d36d3:0x694d74f6ac640acf!8m2!3d12.9352194!4d77.5360758!16zL20vMDYwcjB3?entry=ttu"; // Replace with the actual URL you want to link to

  const handleLocationClick = () => {
    window.open(locationUrl, '_blank');
  };

  // Import or provide the path to your images
  const locationImage = 'location.png'; // Location image
  const emergencyIconImage = 'emergencyicon.png'; // Emergency Icon image

  const showEmergencyPhoneNumberAlert = () => {
    const emergencyPhoneNumber = "911"; // Replace with the actual emergency phone number
    window.alert(`Emergency Phone Number: ${emergencyPhoneNumber}`);
  };

  return (
    <div className="hospital-page">
      {/* Top Header */}
      <div className="header">
        <a href={locationUrl} target="_blank" onClick={handleLocationClick} className="hospital-location">
          <img src={locationImage} width="100" height="100" alt="Location" />
        </a>
        <div className="emergencyicon" onClick={showEmergencyPhoneNumberAlert}>
          <img src={emergencyIconImage} width="100" height="100" alt="Emergency Icon" />
        </div>
        <div className="contact-info">Contact Info</div>
      </div>

      {/* Hospital Name and Navigation */}
      <div className="hospital-info">
        <div className="logo-and-name">
          <div className="hospital-logo">Hospital Logo</div>
          <div className="hospital-name">Hospital Name</div>
        </div>
        <div className="navigation">
          <div className="search-bar">Search Bar</div>
          <div className="departments-tab">Departments Tab</div>
          <div className="patient-login">Patient Login/Sign Up</div>
          <div className="online-pharmacy">Online Pharmacy</div>
          <div className="book-appointment">Book Appointment</div>
        </div>
      </div>

      {/* Hospital Notifications */}
      <div className="hospital-notifications">Hospital Notifications</div>

      {/* Doctor Info and Amenities */}
      <div className="doctor-info">Doctor Info</div>
      <div className="amenities">Amenities</div>

      {/* Feedback and FAQ */}
      <div className="feedback">Feedback</div>
      <div className="faq">FAQ</div>
    </div>
  );
}

export default HospitalManagementSystem;
