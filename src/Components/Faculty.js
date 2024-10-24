import React, { useEffect, useState } from 'react';
import './Faculty.css';
import HOD from './HOD.jpg';
import Pradeep_Kumar_H_M from './PRADEEP_KUMAR_H_M.jpeg';
import LEELAVATHI_R from './LEELAVATHI_R.png';
import BHOOVIKA_SALIAN from './BHOOVIKA_SALIAN.jpg';

const boxData = [
  { 
    image: HOD,
    name: 'Parashuram D Talawar',
    designation: 'Section Grade Lecture & HOD',
    email: 'pdtalawar23@gmail.com',
    phone: '+91 9448104224'
  },
  { 
    image: Pradeep_Kumar_H_M,
    name: 'Pradeep Kumar H M',
    designation: 'Lecturer',
    email: 'pradeephmkumar@gmail.com',
    phone: '+91 8197217970'
  },
  { 
    image: LEELAVATHI_R,
    name: 'Leelavathi R',
    designation: 'Lecturer',
    email: 'rajleelavathi@gmail.com',
    phone: '+91 8310143336'
  },
  { 
    image: BHOOVIKA_SALIAN,
    name: 'Bhoovika Salian',
    designation: 'Lab Assistant',
    email: 'salianbhoovika@gmail.com',
    phone: '+91 7019707396'
  },
 
];

function Faculty() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % boxData.length);
    }, 3000); // Change box every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const { image, name, designation, email, phone } = boxData[currentIndex];

  return (<>
    <h2 className='faculty-head'>Faculty Details</h2>
    <div id='faculty'>
      <div className='slider-container'>
        <div className='slider-slide'>
          <div className='slider-image'>
            <img src={image} alt={name} />
          </div>
          <div className='slider-info'>
            <h3>{name}</h3>
            <p><strong>Designation:</strong> {designation}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
          </div>
        </div>
      </div>

     
      
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Phone</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Parashuram D Talawar</td>
            <td>Section Grade Lecturer & HOD</td>
            <td>pdtalawar23@gmail.com</td>
            <td>+91 94481044224</td>
            <td><a href="#">More Info</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pradeep Kumar H M</td>
            <td>Lecturer</td>
            <td>pradeephmkumar@gmail.com</td>
            <td>+91 8197217970</td>
            <td><a href="#">More Info</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Leelavathi R</td>
            <td>Lecturer</td>
            <td>rajleelavathi@gmail.com</td>
            <td>+91 8310143336</td>
            <td><a href="#">More Info</a></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Bhoovika Salian</td>
            <td>Lab Assistant</td>
            <td>salianbhoovika@gmail.com</td>
            <td>+91 7019707396</td>
            <td><a href="#">More Info</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Faculty;
