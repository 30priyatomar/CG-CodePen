import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isSidebarOpen && (
        <ul className="sidebar-menu">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/file-structure">File Structure</Link></li>
          <li><Link to="/file-management">File Management</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
