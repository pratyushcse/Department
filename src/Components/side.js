import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './SideBar';
import StudentDetails from './StudentDetails';
import Faculty from './Faculty';
import Facilities from './Facilities';

function Side() { // Renamed to Side (capitalized)
  return (
    <div>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/department" element={<Department />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/student" element={<StudentDetails />} />
          <Route path="/facility" element={<Facilities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Side;
