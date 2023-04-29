import React, { useState, useEffect } from "react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsDoorOpenFill } from 'react-icons/bs';
const iconColor ='#5c8cac';

const DisplayBeds = (rat,rat1) => {
    const [bedsData, setBedsData] = useState([{}]);
    useEffect(() => {
        fetch("http://localhost:5000/bedCount")
            .then((response) => response.json())
            .then((data) => setBedsData(data));
    }, []);
    return (
        <div>
            {typeof bedsData.beds === "undefined" ? (
                <p>Loading...</p>
            ) : (
                bedsData.beds.map((bed, i) => (
                    <div key={i}>
                    <p> <FaBed fill={iconColor}/> {bed} beds available <FaBath fill={iconColor}/> 2.5 bath <BsDoorOpenFill fill={iconColor}/>4 bedrooms</p>
                   {/*  <p>{bed}</p> */}
                    </div>
                ))
            )}
        </div>
    );
};

export default DisplayBeds;