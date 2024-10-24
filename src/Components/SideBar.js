import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css'; // Import CSS for styling

function SideBar() {
  return (
    <div className="sidebar">
      
      <ul>
        <li>
          <NavLink  to="/department" activeClassName="active-link"><span className='opt'>Department</span></NavLink>
        </li>
        <li>
          <NavLink to="/faculty" activeClassName="active-link"><span className='opt'>Faculty</span></NavLink>
        </li>
        <li>
          <NavLink to="/student" activeClassName="active-link"><span className='opt'>Student Details</span></NavLink>
        </li>
        <li>
          <NavLink to="/facilities" activeClassName="active-link"><span className='opt'>Facilities</span></NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
