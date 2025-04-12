import React from 'react';
import './WeatherCard.css';

function WeatherCard({ data, city }) {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">{city}</h2>
        <p className="current-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      <div className="weather-info">
        <div className="temperature-container">
          <h1 className="temperature">{data.temperature}°C</h1>
          <p className="description">{data.description}</p>
        </div>
        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{data.humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{data.windSpeed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;