import React, { useEffect, useState } from "react";
import Description from "./Components/Description";
import hotbg from "./Assets/hot.jpg";
import coldbg from "./Assets/cold.jpg";
import "./index.css";
import { getData } from "./Components/Data";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [units,setunits] = useState('metric')

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("ranchi", units);
      setWeather(data);
    };

    fetchData();
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${hotbg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input type="text" name="city" placeholder="Enter City..." />
              <button>°F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name} , ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temperature} °${
                  units === "metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>

            {/* bottom description */}
            <Description  weather = {weather}
                          units = {units}
                          setunits = {units}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
