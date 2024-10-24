import React, { useState } from 'react';
import './Department.css'; // Import CSS for styling

function Department() {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (box) => {
    setActiveBox(activeBox === box ? null : box); // Toggle the active box
  };

  return (
    <div className="department">
      <div className="department-heading-box">
        <h1 className="department-title">Computer Science Department</h1>
      </div>
      <div className="department-content">
        <div
          className={`department-box ${activeBox === 'vision' ? 'active' : ''}`}
          onClick={() => handleBoxClick('vision')}
        >
          <h3 className="department-subtitle"><u>Vision</u></h3><br />
          <p className="department-paragraph">
            To build a strong learning environment in the field of Computer Science and Engineering that responds to the challenges of the century.
          </p><br /> 
        </div>

        <div
          className={`department-box ${activeBox === 'mission' ? 'active' : ''}`}
          onClick={() => handleBoxClick('mission')}
        >
          <h3 className="department-subtitle"><u>Mission</u></h3><br />
          <p className="department-paragraph">
            Mission 1: To produce computer science diploma graduates who are trained in design, implementation, testing, and maintenance of computational systems through a competitive curriculum in collaboration with industry and other organizations.
            <br /><br />
            Mission 2: Providing state-of-the-art facilities for enhancing skills in the field of computer science and engineering.
            <br /><br />
            Mission 3: To encourage ethical values and leadership abilities in the minds of students so as to work towards the growth of society.
          </p><br />
        </div>
      </div>
    </div>
  );
}

export default Department;
