import React from 'react'
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

import './Description.css'


const Descreption = ({weather,units}) => {
    const tempUnit = units === "metric" ? "°C" : "°F";
    const windUnit = units === "metric" ? "m/s" : "m/h";
    const cards =[
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "Min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
          },
          {
            id: 2,
            icon: <FaArrowUp />,
            title: "Max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
          },
          {
            id: 3,
            icon: <BiHappy />,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
          },
          {
            id: 4,
            icon: <MdCompress />,
            title: "pressure",
            data: weather.pressure,
            unit: "hPa",
          },
          {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: "humidity",
            data: weather.humidity,
            unit: "%",
          },
          {
            id: 6,
            icon: <FaWind />,
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: windUnit,
          },
    ]
  return (



    
    <div className="section section_description">
      {
        cards.map(({id,icon,title,data,unit})=>{

     return(
        <div className="card" key = {id}>
            <div className="description_card-icon">
              <div className='icons'>
              {icon}
               <small>{title}</small>
              </div>
               <h2>{`${data} ${unit}`}</h2>
            </div>
        </div>
     )
        })
      }
      
    </div>
  )
}

export default Descreption