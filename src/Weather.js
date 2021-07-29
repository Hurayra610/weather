import React from "react";
import "./Weather.css";

function Weather({ city, temp, country, maxTemp, minTemp, desc }) {
  return (
    <>
      {city && (
        <div className="info">
          <h1>
            &#9728;{city} -- {country}&#9728;
          </h1>
          <p>Current Temp: {temp} &deg;</p>
          <div className="maxmin">
            <span>Max Temp: {maxTemp}&deg; </span>
            <span> --- Min Temp: {minTemp}&deg;</span>
          </div>
          <p>{desc}</p>
        </div>
      )}
    </>
  );
}

export default Weather;
