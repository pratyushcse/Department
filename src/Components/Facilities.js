import React from 'react';

import './Facilities.css'; // Import CSS for styling
import Python_Lab from './Python.jpg'
import Newtork_Lab from './Computer_Network.jpg'
import Hardware_Lab from './Computer_Hardware.jpg'
import DBMS_Lab from './DBMS.jpg'
function Facilities() {
  // Example data for facilities
  const facilities = [
    { name: 'Python Lab', image: Python_Lab  },
    { name: 'Network Lab', image:  Newtork_Lab },
    { name: 'Hardware Lab', image: Hardware_Lab },
    { name: 'DBMS Lab', image: DBMS_Lab },
    
  ];

  return (
    <div className="facilities">
      <h1 className='heading'>Facilities</h1>
      <div className="facilities-list">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-item">
            <img id='image' src={facility.image} alt={facility.name} />
            <p>{facility.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
