import React from 'react';
import './UsersSection.css';

const UsersSection = () => {
  return (
    <div className="users-section">
      <div className="section-header">
        <h2>Users</h2>
      </div>
      <div className="section-content">
        <ul className="user-list">
          <li>
            <span>User 1:</span> Description of User 1
          </li>
          <li>
            <span>User 2:</span> Description of User 2
          </li>
          <li>
            <span>User 3:</span> Description of User 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UsersSection;
