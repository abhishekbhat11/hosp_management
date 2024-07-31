import React, { useState } from 'react';

const OnlinePharmacy = () => {
  const medicineData = [
    { name: 'Medicine 1', image: 'medicine1.png', price: 10 },
    { name: 'Medicine 2', image: 'medicine2.png', price: 15 },
    { name: 'Medicine 3', image: 'medicine3.png', price: 20 },
    { name: 'Medicine 4', image: 'medicine4.png', price: 12 },
    { name: 'Medicine 5', image: 'medicine5.png', price: 18 },
    { name: 'Medicine 6', image: 'medicine6.png', price: 25 },
    { name: 'Medicine 7', image: 'medicine7.png', price: 30 },
    { name: 'Medicine 8', image: 'medicine8.png', price: 14 },
    { name: 'Medicine 9', image: 'medicine9.png', price: 22 },
    { name: 'Medicine 10', image: 'medicine10.png', price: 28 },
  ];

  const [selectedMedicines, setSelectedMedicines] = useState([]);

  const handleMedicineSelect = (medicine) => {
    const isSelected = selectedMedicines.includes(medicine);
    if (isSelected) {
      setSelectedMedicines(selectedMedicines.filter((selected) => selected !== medicine));
    } else {
      setSelectedMedicines([...selectedMedicines, medicine]);
    }
  };

  const calculateTotalBill = () => {
    return selectedMedicines.reduce((total, medicine) => total + medicine.price, 0);
  };

  return (
    <div>
      <h3>Online Pharmacy</h3>
      {medicineData.map((medicine, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={selectedMedicines.includes(medicine)}
              onChange={() => handleMedicineSelect(medicine)}
            />
            {medicine.name} - ${medicine.price}
          </label>
          <img src={medicine.image} alt={medicine.name} />
        </div>
      ))}
      <h3>Total Bill: ${calculateTotalBill()}</h3>
    </div>
  );
};

export default OnlinePharmacy;
