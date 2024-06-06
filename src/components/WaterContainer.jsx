import React from 'react';
import './WaterContainer.css';

const WaterContainer = ({ currentLevel, maxLevel }) => {
  const percentage = (currentLevel / maxLevel) * 100;

  return (
    <div className="water-cont-comp">
      <div className={`overflow ${percentage > 100 ? 'overflowing' : ''}`}>
        {percentage > 100 && <div className="animate-overflow"></div>}
      </div>
      <div className="water-container">
        <div className="water-level" style={{ height: `${percentage > 100 ? 100 : percentage}%` }}>
          <div className="water"></div>
        </div>
      </div>
    </div>
  );
};

export default WaterContainer;
