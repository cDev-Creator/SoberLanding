import React, { useState, useEffect } from "react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsDoorOpenFill } from 'react-icons/bs';
const iconColor ='#5c8cac';

const API_URL = "https://sl3.onrender.com/bedcount";

const DisplayBeds = () => {
    const [bedsData, setBedsData] = useState([{}]);
    useEffect(() => {
        /* fetch("http://localhost:5000/bedCount") */
        fetch("https://sl3.onrender.com/bedcount")
            .then((response) => response.json())
            .then((data) => setBedsData(data));
    }, []);
    return (
        <div>
        {typeof bedsData.beds === "undefined" ? (
            <p>Loading...</p>
        ) : (
            <div>
                <p> <FaBed fill={iconColor}/> {bedsData.beds} beds <FaBath fill={iconColor}/> 2.5 bath <BsDoorOpenFill fill={iconColor}/>4 bedrooms</p>
            </div>
        )}
    </div>
    );
};

export default DisplayBeds;
