import React, { useEffect, useState } from "react";
import Description from "./Components/Description";
import bg from "./Assets/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass.jpg";
// import coldbg from "./Assets/cold.jpg";
import "./index.css";
import { getData } from "./Components/Data";

const App = () => {
  const [city,setCity] = useState('ranchi')
  const [weather, setWeather] = useState(null);
  const [units, setunits] = useState("metric");
//   const [bg, setBg] = useState(hotbg);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(city, units);
      setWeather(data);

    //   const tempForbg = units === "metric" ? 20 : 40
    //   if( data.temp <= tempForbg)
    //   setBg(coldbg)
    //   else setBg(hotbg)
    };

    fetchData();
  }, [units,city]);


 const handleUnitChange = (e)=>{
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setunits(isCelsius ? "metric" : "imperial");



    
}
const handleChange = (e)=>{
    setCity(e.target.value) 
}

  

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
            
             <input type="text" name="city" placeholder="Enter City..." onChange = {handleChange}/>
            
            
              <button onClick={(e)=>handleUnitChange(e)}>°F</button>
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
            <Description weather={weather} units={units} setunits={units} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
