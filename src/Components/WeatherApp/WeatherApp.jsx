import React, { useState } from 'react';
import './WeatherApp.css';

// all the icons
import cloudIcon from '../../assets/cloud.png';
import humidityIcon from '../../assets/humidity.png';
import searchIcon from '../../assets/search.png';
import windIcon from '../../assets/wind.png';


const WeatherApp = () => {

  let api_key = "7d6f705d45e2d927cc06abfbcdd18c67"

  const [wicon, setWicon] = useState(cloudIcon);



  const search = async () => {
    const element = document.getElementsByClassName("cityInput")

    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`; 

    let response = await fetch(url);

    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    // const icon = document.getElementsByClassName("weather-image");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) +"°c";
    location[0].innerHTML = data.name;
    setWicon( data.weather[0].icon);
    
    
    // if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
    //   setWicon(clearIcon);
    // } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n")

  }

  return (
    <div className='container'>
      
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='Enter City Name' />
        <div className='search-icon' onClick={search}>
          <img src={searchIcon} alt="" />
        </div>
      </div>

      <div className="weather-image">
        <img src={`https://openweathermap.org/img/wn/${wicon}@2x.png`} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>

      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className='icon' />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className='icon' />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>

    </div>
  )


}

export default WeatherApp
