import React from 'react';
import './AnalyticsSection.css';

const AnalyticsSection = () => {
  return (
    <div className="analytics-section">
      <div className="section-header">
        <h2>Analytics</h2>
      </div>
      <div className="section-content">
        <div className="stat">
          <h3>Stat 1</h3>
          <p>Stat 1 description</p>
        </div>
        <div className="stat">
          <h3>Stat 2</h3>
          <p>Stat 2 description</p>
        </div>
        <div className="stat">
          <h3>Stat 3</h3>
          <p>Stat 3 description</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
