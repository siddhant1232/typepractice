import React, { useState } from "react";
import useWeatherStore from "../store/weather";

const WeatherComponent: React.FC = () => {
  const { city, weather, loading, error, fetchWeather } = useWeatherStore();
  const [inputCity, setInputCity] = useState(city);

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          className="p-2 border rounded w-full"
          placeholder="Enter city"
        />
        <button
          onClick={() => fetchWeather(inputCity)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {weather && weather.main && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p>🌡 Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
          <p>☁ Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
