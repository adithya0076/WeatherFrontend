import React, { useEffect, useState } from 'react'
import { Card } from './components'
import WeatherMap from './components/map2';
import axios from 'axios';

const App = () => {

  const [weatherData, setWeatherData] = useState([]);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get("https://weatherapi-h0nu.onrender.com/weather/data");
        console.log(response.data);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleOnSearchChange = async (e) => {
    const searchCityData = e.target.value;
    const searchedData =  weatherData.find(district => district.district.toLowerCase() === searchCityData.toLowerCase());
    setSearchData(searchedData);
  }

  return (
    <div>
      <div className="absolute inset-0 bg-white flex items-center justify-center p-4 ">
        <video
          src="https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/am_i_dreaming/underwater.mp4
          "
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-0"
        />

        <div className=" w-full md:w-375 p-4  bg-lightOverlay shadow-2xl rounded-xl backdrop-blur-md flex-col items-center justify-center">

          <div className='max-w-md mx-auto mb-3 bg-darkOverlay rounded-md pb-5 '>
            <p className="text-2xl font-bold bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent text-center">Weather App</p>
          </div>
          <div>
            <div className="flex items-center max-w-md mx-auto bg-white rounded-md">
              <input
                type="search"
                className="w-full px-4 py-2 text-gray-800 rounded-full focus:outline-none"
                placeholder="search"
                value={searchData && searchData.district}
                onChange={handleOnSearchChange}
              />
            </div>
          </div>

          {searchData && <Card searchData={searchData} />}
        </div>

        <div className='p-9 mx-4 bg-lightOverlay shadow-2xl rounded-xl backdrop-blur-md '>
        <WeatherMap weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default App
