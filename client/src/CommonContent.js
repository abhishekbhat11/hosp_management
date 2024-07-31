import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function CommonContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'HN1.jpg',
    'HN2.jpg',
    'HN3.jpg',
    'HN4.png',
    'HN5.png',
  ];

  const amenities = [
    'A1.png',
    'A2.png',
    'A3.png',
    'A4.png',
    'A5.png',
  ];
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Auto transition every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const commonContentStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '1200px', // Set a constant width
    height: '600px', // Set a constant height
    marginTop: '20px',
    marginBottom: '20px',
    marginTop: '80px'
  };

  const doctorInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
  };

  const doctorContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '80px',
    marginTop: '80px',
  };

  const doctorImageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginRight: '20px',
  };

  const doctorNameStyle = {
    fontSize: '24px',
    margin: '0',
  };

  const doctorQualificationsStyle = {
    fontSize: '18px',
    margin: '0',
  };

  const imageSliderStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '100px'
  };

  const sliderImageStyle = {
    width: '800px',
    height: '400px',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '10px',
  };

  const sectionBackgroundStyle = {
    background: '#D3D3D3', // Light grey background color
    padding: '20px', // Adjust padding as needed
  };

  const doctors = [
    {
      name: 'Dr. Robert Downey Jr.',
      qualifications: 'MBBS, MD, Specialist in Cardiology',
      image: 'doc1.png',
    },
    {
      name: 'Dr. Steve Rogers',
      qualifications: 'MBBS, MD, Specialist in Neurology',
      image: 'doc2.png',
    },
    {
      name: 'Dr. Mark Ruffalo',
      qualifications: 'MBBS, MD, Specialist in Pediatrics',
      image: 'doc3.png',
    },
    {
      name: 'Dr. Scarlett Johansen ',
      qualifications: 'MBBS, MD, Specialist in Dermatology',
      image: 'doc4.png',
    },
    {
      name: 'Dr. Jeremy Renner',
      qualifications: 'MBBS, MD, Specialist in Ophthalmology',
      image: 'doc5.png',
    },
    {
        name: 'Dr. Chris Hemsworth',
        qualifications: 'MBBS, MD, Specialist in Ophthalmology',
        image: 'doc6.png',
      },
  ];

  return (
    <div className="common-content" style={commonContentStyle}>
      <div className="image-slider" style={imageContainerStyle}>
        <button className="slider-button" onClick={prevImage}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <img src={images[currentImageIndex]} alt="Slider" style={imageStyle} />
        <button className="slider-button" onClick={nextImage}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      {/* Render information for doctors in two separate rows */}
      <div className="doctor-container" style={doctorContainerStyle}>
        {/* First Row: Doctors 1, 2, and 3 */}
        <div className="doctor-info" style={doctorInfoStyle}>
          {doctors.slice(0, 3).map((doctor, index) => (
            <div key={index}>
              <img src={doctor.image} alt="Doctor" style={doctorImageStyle} />
              <h1 style={doctorNameStyle}>{doctor.name}</h1>
              <p style={doctorQualificationsStyle}>{doctor.qualifications}</p>
            </div>
          ))}
        </div>
        {/* Second Row: Doctors 4 and 5 */}
        <div className="doctor-info" style={doctorInfoStyle}>
          {doctors.slice(3).map((doctor, index) => (
            <div key={index}>
              <img src={doctor.image} alt="Doctor" style={doctorImageStyle} />
              <h1 style={doctorNameStyle}>{doctor.name}</h1>
              <p style={doctorQualificationsStyle}>{doctor.qualifications}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={sectionBackgroundStyle}>
      {/* Add an image slider */}
      <h1>Amenities</h1>
      <div className="image-slider" style={imageSliderStyle}>
        <button className="slider-button" onClick={prevImage}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <img src={amenities[currentImageIndex]} alt="Slider" style={sliderImageStyle} />
        <button className="slider-button" onClick={nextImage}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      </div>
      <div className="feedback">Feedback</div>
      <div className="faq">FAQ</div>
    </div>
  );
}

export default CommonContent;
