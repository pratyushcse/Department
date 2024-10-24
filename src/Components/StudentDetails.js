import React from 'react';
import './StudentDetails.css';

function StudentDetails() {
  return (
    <div className="student-details-container">
      <div className="student-details-heading">
        <h1>Student Details</h1>
      </div>

      <div className="student-group-box">
        <h3 className='year'>2024-27 BATCH</h3>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Boys</th>
              <th>Girls</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1st</td>
              <td>29</td>
              <td>33</td>
              <td>62</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="student-group-box">
        <h3 className='year'>2023-26 BATCH</h3>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Boys</th>
              <th>Girls</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2nd</td>
              <td>25</td>
              <td>45</td>
              <td>65</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="student-group-box">
        <h3 className='year'>2022-25 BATCH</h3>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Boys</th>
              <th>Girls</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3rd</td>
              <td>25</td>
              <td>40</td>
              <td>62</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentDetails;
