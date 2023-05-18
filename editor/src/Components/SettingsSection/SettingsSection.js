import React from 'react';
import './SettingsSection.css';

const SettingsSection = () => {
  return (
    <div className="settings-section">
      <div className="section-header">
        <h2>Settings</h2>
      </div>
      <div className="section-content">
        <ul className="settings-list">
          <li>
            <span>Setting 1:</span> Description of Setting 1
          </li>
          <li>
            <span>Setting 2:</span> Description of Setting 2
          </li>
          <li>
            <span>Setting 3:</span> Description of Setting 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsSection;
