import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Card from './components/Card/Card';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const baseUrl = 'https://api.weatherapi.com/v1/current.json';

  async function fetchWeatherByCity(city) {
    try {
      const weatherUrl = `${baseUrl}?key=${API_KEY}&q=${city}`;
      const weatherRes = await fetch(weatherUrl);
      if (!weatherRes.ok) throw new Error('Weather not found');
      const weatherData = await weatherRes.json();

      return weatherData;
    } catch (error) {
      setHasError(true);
      console.log(error);
    }
  }

  async function handleOnSearch(city) {
    setSearchQuery(city);
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await fetchWeatherByCity(city);
      setWeather(data);
    } catch (error) {
      setWeather(null);
      setHasError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='app'>
      <Header />
      <Form onSearch={handleOnSearch} />

      <div className='app__content'>
        {isLoading && !hasError && <Spinner />}
        {!isLoading && !hasError && !weather && <span>Search a city!</span>}
        {!isLoading && !hasError && weather && <Card weather={weather} />}
        {hasError && <span>City not found</span>}
      </div>
    </div>
  );
}

export default App;
