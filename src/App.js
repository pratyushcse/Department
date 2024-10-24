import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar';
import Department from './Components/Department';
import Faculty from './Components/Faculty';
import StudentDetails from './Components/StudentDetails';
import Facilities from './Components/Facilities';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="app">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/department" element={<Department />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/student" element={<StudentDetails />} />
            <Route path="/facilities" element={<Facilities />} />
            
          </Routes>
        </div>
        
      </div>
      
    </BrowserRouter>
    
    </>
  );
}

export default App;
