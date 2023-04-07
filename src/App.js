import hotBg from "./Assets/hot.jpg"
import coldBg from "./Assets/cold.jpg";
import Descreption from "./Components/Descreption";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./Components/WeatherService";



function App() {

  useEffect(()=>{

    const fetchData = async ()=>{
      
      const data = await getFormattedWeatherData('ranchi')
      setweather(data)
    }
    fetchData()
  },[])
  

  const [weather ,setweather] = useState(null)

  // const [city, setCity] = useState("Paris");
  // const [weather, setWeather] = useState(null);
  // const [units, setUnits] = useState("metric");
  // const [bg, setBg] = useState(hotBg);

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     const data = await getFormattedWeatherData(city, units);
  //     setWeather(data);

  //     // dynamic bg
  //     const threshold = units === "metric" ? 20 : 60;
  //     if (data.temp <= threshold) setBg(coldBg);
  //     else setBg(hotBg);
  //   };

  //   fetchWeatherData();
  // }, [units, city]);

  // const handleUnitsClick = (e) => {
  //   const button = e.currentTarget;
  //   const currentUnit = button.innerText.slice(1);

  //   const isCelsius = currentUnit === "C";
  //   button.innerText = isCelsius ? "°F" : "°C";
  //   setUnits(isCelsius ? "metric" : "imperial");
  // };

  // const enterKeyPressed = (e) => {
  //   if (e.keyCode === 13) {
  //     setCity(e.currentTarget.value);
  //     e.currentTarget.blur();
  //   }
  // };

  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
      {weather && (

          <div className="container">
            <div className="section section__inputs">
              <input
                type="text"
                name="city"
                placeholder="Enter City..."
              />
              <button>°F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>City</h3>
                <img src="" alt="weatherIcon" />
                <h3>cloudy</h3>
              </div>
              <div className="temperature">
                <h1>34°C</h1>
              </div>
            </div>

            {/* bottom description */}
           <Descreption/>
          </div>
      )}
      </div>
    </div>
  );
}

export default App;