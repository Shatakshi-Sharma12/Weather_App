# ⛅️ Real-Time Weather Dashboard 🌦️

Welcome to the **Real-Time Weather Dashboard** — your sleek, responsive, and interactive weather companion! 🌍  
This app allows you to search for any city and instantly fetch the **current weather** along with a **5-day forecast**, using live data from the OpenWeatherMap API. It even comes with a **dark/light mode toggle** to suit your vibe 🌙☀️.
Try it here : https://weather-app-six-rho-46.vercel.app/
---

## 🚀 Features

- 🔍 **Search by City** – Type in any city and get instant weather updates.
- 🌡️ **Current Conditions** – Temperature, humidity, wind speed, and weather description with icons.
- 📅 **5-Day Forecast** – Glance at what’s coming next with beautiful forecast cards.
- 🎨 **Dark/Light Mode Toggle** – Switch themes with a single click.
- ⚡ **Real-Time Data** – Powered by [OpenWeatherMap API](https://openweathermap.org/).

---

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS  
- **Backend**: Node.js, Express.js  
- **API**: OpenWeatherMap  

---

## 📦 Project Structure

📁 client ┣ 📂 components ┃ ┣ 📄 SearchBar.js ┃ ┣ 📄 WeatherCard.js ┃ ┗ 📄 ForecastCard.js ┣ 📄 App.js ┣ 📄 App.css ┗ 📄 index.js

📁 server ┣ 📄 server.js ┣ 📄 weatherRoute.js ┗ 📄 .env

##  Install dependencies
cd server
npm install

# Frontend
cd ../client
npm install

## Run the servers
cd server
npm start

cd client
npm start
