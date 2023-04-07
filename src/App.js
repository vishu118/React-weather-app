import hotBg from "./Assets/hot.jpg"
import coldBg from "./Assets/cold.jpg";
import Descreption from "./Components/Descreption";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./Components/WeatherService";



function App() {

  useEffect(()=>{

    const fetchData = async ()=>{
      
      const data = await getFormattedWeatherData('ranchi', units)
      setweather(data)
    }
    fetchData()
  },[])
  

  const [weather ,setweather] = useState(null)
   const [units, setUnits] = useState("imperial");

  

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
                <h3>{weather.name}</h3>
                <img src = {weather.iconURL} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{weather.temp.toFixed()}
                { 
                  units === "metric" ? '℃' : '℉'
                }</h1>
              </div>
            </div>

            {/* bottom description */}
           <Descreption weather = {weather} units = {units}/>
          </div>
      )}
      </div>
    </div>
  );
}

export default App;