import React, { useState, useEffect } from "react";

const DisplayBeds = () => {
    const [bedsData, setBedsData] = useState([{}]);

    useEffect(() => {
        fetch("http://localhost:5000/bedCount")
            .then((response) => response.json())
            .then((data) => setBedsData(data));
    }, []);

    console.log(bedsData);

    return (
        <div>
            {typeof bedsData.beds === 'undefined' ? (
                <p>Loading...</p>
            ) : (
                bedsData.beds.map((bed, i) => (
                    <h2 key={i}> We have {bed} rooms available!</h2>
                ))
            )}
        </div>
    );
};

export default DisplayBeds;