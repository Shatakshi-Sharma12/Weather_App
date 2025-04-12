import React from 'react';
import './ForecastCard.css';

function ForecastCard({ data }) {
  return (
    <div className="forecast-card">
      <h4 className="forecast-date">{data.date}</h4>
      <img src={data.icon} alt={data.description} className="forecast-icon" />
      <div className="forecast-info">
        <p className="forecast-desc">{data.description}</p>
        <p className="forecast-temp">{data.temp}°C</p>
      </div>
    </div>
  );
}

export default ForecastCard;