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
            <h2 style={{ fontSize:'2.5rem'}}>We currently have <span style={{color:"#5c8cac", textDecoration:'underline', textUnderlineOffset: '5px', fontSize:'3rem'}}>{bedsData.beds}</span> slots available for move-in.</h2>
        )}
    </div>
    );
};

export default DisplayBeds;
