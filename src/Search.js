import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [feedback, setFeedback] = useState();
  const [city, setCity] = useState();

  function displayForecast(response) {
    setFeedback(
      <ul>
        <li>Temperature:{Math.round(response.data.main.temp)}°C</li>
        <li>Humidity:{Math.round(response.data.main.humidity)}‰</li>
        <li>Wind Speed:{Math.round(response.data.wind.speed)}Km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="forecast icon"
          />
        </li>
      </ul>
    );
  }

  function submitCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36627385a0b4fa9441ba14c41f6e63ca&units=metric`;
    axios.get(url).then(displayForecast);
  }

  function content(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={submitCity}>
        <input type="search" placeholder="Enter a city..." onChange={content} />
        <input type="submit" value="Search" />
      </form>
      <div className="feedback"> {feedback} </div>
    </div>
  );
}
