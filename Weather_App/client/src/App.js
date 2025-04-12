import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/Forecast';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [themeTransition, setThemeTransition] = useState(false);
  const [transitionPos, setTransitionPos] = useState({ x: 0, y: 0 });

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:8080/weather?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      console.error(err);
      setError('Could not fetch weather data. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = (e) => {
    const rect = e.target.getBoundingClientRect();
    setTransitionPos({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setThemeTransition(true);
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (themeTransition) {
      const timer = setTimeout(() => setThemeTransition(false), 800);
      return () => clearTimeout(timer);
    }
  }, [themeTransition]);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div
        className={`theme-transition ${themeTransition ? 'active' : ''}`}
        style={{
          '--x': `${transitionPos.x}px`,
          '--y': `${transitionPos.y}px`,
          color: darkMode ? '#1a1a2e' : '#c2e9fb'
        }}
      />
      <div className="container">
        <button onClick={toggleMode} className="mode-toggle">
          {darkMode ? '☀️' : '🌙'}
        </button>
        <h1 className="dashboard-title">Weather Dashboard</h1>
        <SearchBar onSearch={fetchWeather} />
        
        {loading && <div className="loader" />}
        {error && <div className="error-message">{error}</div>}
        
        {weather && (
          <div className="weather-content">
            <WeatherCard data={weather.current} city={weather.city} />
            {weather.forecast && weather.forecast.length > 0 && (
              <div className="forecast-container">
                <h2 className="forecast-title">5-Day Forecast</h2>
                <div className="forecast-grid">
                  {weather.forecast.map((day, index) => (
                    <ForecastCard key={index} data={day} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;