import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The temperature in New York is ${response.data.main.temp}°C`);
  }
  let apiKey = "36627385a0b4fa9441ba14c41f6e63ca";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Running Weather</h2>;
}
