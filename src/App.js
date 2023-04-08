import React from "react";
import hotbg from "./Assets/hot.jpg";
import coldbg from "./Assets/cold.jpg";
import "./index.css";

const App = () => {
  return (
    <div className="app" style={{ backgroundImage:`url(${hotbg})`  }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City..." />
            <button>°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>Ranchi</h3>
              <img src="" alt="weatherIcon" />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>32℉</h1>
            </div>
          </div>

          {/* bottom description */}
        </div>
      </div>
    </div>
  );
};

export default App;
