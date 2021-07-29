import React, { useState } from "react";
import Weather from "./Weather";
import "./FormControl.css";

function FormControl() {
  const [cityName, setCityName] = useState();
  const [countryName, setCountryName] = useState();
  const [city, setCity] = useState();
  const [temp, setTemp] = useState();
  const [country, setCountry] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();
  const [desc, setDesc] = useState();

  const updateCityName = (e) => {
    setCityName(e.target.value);
  };
  const updateCountryName = (e) => {
    setCountryName(e.target.value);
  };

  const calculate = (temparature) => {
    let cell = Math.floor(temparature - 271.15);
    return cell;
  };

  async function ButtonHandler(e) {
    e.preventDefault();
    try {
      const dataFetch = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=f7acfa036b29f618fe6eaac96b816786`
      );
      const response = await dataFetch.json();
      setCity(response.name);
      setCountry(response.sys.country);
      setTemp(calculate(response.main.temp));
      setMaxTemp(calculate(response.main.temp_max));
      setMinTemp(calculate(response.main.temp_min));
      setDesc(response.weather[0].description);
    } catch (err) {
      alert(`Please Fill the box with valid value`);
    }
  }

  return (
    <div className="container">
      <div className="searchBar">
        <input
          type="text"
          className="inputCity"
          placeholder="Type City Name"
          onChange={updateCityName}
        />
        <input
          type="text"
          className="inputCountry"
          placeholder="Type Country Name"
          onChange={updateCountryName}
        />
        <button className="btn" type="submit" onClick={ButtonHandler}>
          Get Weather
        </button>
      </div>
      <div>
        <Weather
          city={city}
          country={country}
          temp={temp}
          maxTemp={maxTemp}
          minTemp={minTemp}
          desc={desc}
        />
      </div>
    </div>
  );
}

export default FormControl;
