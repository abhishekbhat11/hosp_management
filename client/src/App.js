import React, { useState, useEffect } from 'react';
import './styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import DepartmentContent from './DepartmentContent';
import CommonContent from './CommonContent';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import OnlinePharmacy from './OnlinePharmacy';
import BookAppointment from './BookAppointment';

function HospitalManagementSystem() {
  const locationUrl =
    "https://www.google.com/maps/place/PES+University/@12.9352194,77.5335009,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3e468d8d36d3:0x694d74f6ac640acf!8m2!3d12.9352194!4d77.5360758!16zL20vMDYwcjB3?entry=ttu";

  const handleLocationClick = () => {
    window.open(locationUrl, '_blank');
  };

  const locationImage = 'location.png';
  const emergencyIconImage = 'emergencyicon.png';
  const hospitalLogoImage = 'hospitallogo.png';

  const showEmergencyPhoneNumberAlert = () => {
    const emergencyPhoneNumber = "911";
    window.alert(`Emergency Phone Number: ${emergencyPhoneNumber}`);
  };

  const departmentOptions = [
    'Cardiac Sciences',
    'Dental Science',
    'Neurology',
    'Ophthalmology',
    'Dermatology',
  ];

  const [activeTab, setActiveTab] = useState('CommonContent');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSignUpSuccess = () => {
    // Switch to the "CommonContent" tab upon successful signup
    setActiveTab('CommonContent');
  };

  const handleLoginSuccess = () => {
    // Switch to the "CommonContent" tab upon successful login
    setActiveTab('CommonContent');
  };

  return (
    <Router>
      <div className="hospital-page">
        <div className="header">
          <a href={locationUrl} target="_blank" onClick={handleLocationClick} className="hospital-location">
            <img src={locationImage} width="100" height="100" alt="Location" />
          </a>
          <div className="emergencyicon" onClick={showEmergencyPhoneNumberAlert}>
            <img src={emergencyIconImage} width="100" height="100" alt="Emergency Icon" />
          </div>
          <div className="contact-info">
            <p>Telephone 1: +1 (123) 456-7890</p>
            <p>Telephone 2: +1 (987) 654-3210</p>
          </div>
        </div>

        <div className="header">
          <div className="hospital-logo">
            <img src={hospitalLogoImage} width="100" height="100" alt="Hospital Logo" />
          </div>
          <div className="hospital-name" style={{ fontSize: '32px', marginLeft: '10px' }}>
            PES Hospital
          </div>

          <div className="navigation">
            <div className="dropdown">
              <button className="department-tab" onClick={() => handleTabChange('DepartmentContent')}>
                Departments
                <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '5px' }} />
              </button>
              <div className="dropdown-content">
                {departmentOptions.map((department, index) => (
                  <div key={index} onClick={() => handleTabChange('DepartmentContent')}>
                    <Link to={`/departments/${department.toLowerCase().replace(/ /g, '-')}`}>
                      {department}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="patient-login">
              <button className="login-button" onClick={() => handleTabChange('LoginForm')}>
                Login
              </button>
            </div>
            <div className="patient-sign-up">
              <button className="sign-up-button" onClick={() => handleTabChange('SignUpForm')}>
                Sign up
              </button>
            </div>
            <button className="online-pharmacy" onClick={() => handleTabChange('OnlinePharmacy')}>
              Online Pharmacy
            </button>
            <button className="book-appointment" onClick={() => handleTabChange('BookAppointment')}>
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/departments/:departmentSlug" element={<DepartmentContent />} />
      </Routes>
      {activeTab === 'CommonContent' && <CommonContent />}
      {activeTab === 'LoginForm' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
      {activeTab === 'SignUpForm' && <SignUpForm onSignUpSuccess={handleSignUpSuccess} />}
      {activeTab === 'OnlinePharmacy' && <OnlinePharmacy />}
      {activeTab === 'BookAppointment' && <BookAppointment />}
    </Router>
  );
}

export default HospitalManagementSystem;