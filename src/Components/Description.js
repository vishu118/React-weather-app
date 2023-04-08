import React from 'react'
import "./Description.css"

import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";


const Description = () => {
  return (
    <div className='section section__descriptions'>
        <div className="card">
            <div className="description_card-icon">
                <FaArrowUp/>
                <small>Min</small>

            </div>
            <h2>32℃</h2>
        </div>
        <div className="card">
            <div className="description_card-icon">
                <FaArrowUp/>
                <small>Min</small>

            </div>
            <h2>32℃</h2>
        </div>
        <div className="card">
            <div className="description_card-icon">
                <FaArrowUp/>
                <small>Min</small>

            </div>
            <h2>32℃</h2>
        </div>
        <div className="card">
            <div className="description_card-icon">
                <FaArrowUp/>
                <small>Min</small>

            </div>
            <h2>32℃</h2>
        </div>
    </div>
  )
}

export default Description
