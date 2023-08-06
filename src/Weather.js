import React from "react";
// import axios from "axios";

export default function Weather() {
  return (
    <div className="container">
      <br />
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your city name..."
            />
          </div>
          <div className="col-3">
            <input className="btn btn-primary" type="submit" value="Search" />
            <button type="button" className="btn btn-success">
              Current
            </button>
          </div>
        </div>
      </form>
      <br />
      <div className="start">
        <h2 className="top">Pretoria</h2>
        <h3>Monday 12:05</h3>
        <h6 className="props">
          <div className="des">Sunny</div>
          Humidity:
          <span>50</span>% Wind:
          <span>14</span>
          km/h
        </h6>
        <h1 className="heading">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="clear"
            className="sunny"
          />
          <span>21</span>
          <a href="/" className="deg">
            °C
          </a>
          |
          <a href="/" className="far">
            °F
          </a>
        </h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="row"></div>
      <br />
      <p>
        This project was coded by Princess Alao and is
        <a href="https://github.com/Priala/My-weather-project" target="_blank">
          Open source code
        </a>
        on Github and hosted on
        <a
          href="https://main--fastidious-creponne-b064c2.netlify.app/"
          target="_blank"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
