const express = require('express');
const axios = require('axios');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.OPENWEATHER_API_KEY;
console.log("API Key:", API_KEY);

router.get('/', async (req, res) => {
  const city = req.query.city;
  console.log("Requested city:", city);

  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    console.log("Request URL:", url);

    const response = await axios.get(url);
    const data = response.data;

    const forecastList = data.list;

    // Get current weather (first entry)
    const current = forecastList[0];
    const { temp, humidity } = current.main;
    const { speed } = current.wind;
    const weather = current.weather[0];

    // Filter daily forecast (one per day at 12:00:00)
    const dailyForecast = forecastList.filter(item =>
      item.dt_txt.includes('12:00:00')
    ).slice(0, 5);

    const forecast = dailyForecast.map(item => ({
      date: item.dt_txt.split(' ')[0],
      temp: item.main.temp,
      humidity: item.main.humidity,
      windSpeed: item.wind.speed,
      description: item.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
    }));
    // console.log("Forecast:", forecast);
    res.json({
      city: data.city.name,
      current: {
        temperature: temp,
        condition: weather.main,
        description: weather.description,
        icon: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
        humidity,
        windSpeed: speed
      },
      forecast
    });
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    res.status(404).json({ error: 'City not found or API error' });
  }
});

module.exports = router;
