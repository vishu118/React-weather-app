import hotBg from "./Assets/hot.jpg";
import coldBg from "./Assets/cold.jpg";
import Descreption from "./Components/Descreption";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./Components/WeatherService";

function App() {
  const [city, setCity] = useState("Ranchi");
  const [weather, setweather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setweather(data);

      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);
    };
    fetchData();
  }, [units]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currUnit = button.innerText.slice(1);

    const isCelcisus = currUnit === "℃";
    button.innerText = isCelcisus ? "℉" : "℃";
    setUnits(isCelcisus ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
              />
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>{weather.name}</h3>
                <img src={weather.iconURL} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>
                  {weather.temp.toFixed()}
                  {units === "metric" ? "℃" : "℉"}
                </h1>
              </div>
            </div>

            {/* bottom description */}
            <Descreption weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
