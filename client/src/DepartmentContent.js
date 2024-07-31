import React from 'react';
import { useParams } from 'react-router-dom';
import CardiacSciencesImage from './cardiacsciences.png';
import DentalScienceImage from './dentalscience.png';
import NeurologyImage from './neurology.png';
import OphthalmologyImage from './opthalmology.png';
import DermatologyImage from './dermatology.png';

const centerContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
  margin: '1px 100px 20px 100px',
  background: '#D3D3D3',
  padding: '20px',
};

function DepartmentContent() {
  const { departmentSlug } = useParams();

  const departmentData = {
    'cardiac-sciences': {
      title: 'Cardiac Sciences',
      content: 'Cardiology is the study of the heart...',
      image: CardiacSciencesImage,
    },
    'dental-science': {
      title: 'Dental Science',
      content: 'Dentistry, also known as dental medicine...',
      image: DentalScienceImage,
    },
    'neurology': {
      title: 'Neurology',
      content: 'Neurology is the branch of medicine dealing...',
      image: NeurologyImage,
    },
    'ophthalmology': {
      title: 'Ophthalmology',
      content: 'Ophthalmology is a surgical subspecialty...',
      image: OphthalmologyImage,
    },
    'dermatology': {
      title: 'Dermatology',
      content: 'Dermatology is the branch of medicine dealing...',
      image: DermatologyImage,
    },
  };

  const departmentDetails = departmentData[departmentSlug];

  if (!departmentDetails) {
    return (
      <div style={centerContentStyle}>
        <h2>Department not found</h2>
      </div>
    );
  }

  const { title, content, image } = departmentDetails;

  return (
    <div style={centerContentStyle}>
      <h1>{title}</h1>
      <p>{content}</p>
      <img src={image} alt={title} />
    </div>
  );
}

export default DepartmentContent;
