import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const API_URL = "https://sl3.onrender.com/bedcount";

const UpdateBeds = () => {
    const [bedsData, setBedsData] = useState([{}]);
    const [bedsToUpdate, setBedsToUpdate] = useState("undefined");
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        /* fetch("http://localhost:5000/bedCount") */
        fetch("https://sl3.onrender.com/bedcount")
            .then((response) => response.json())
            .then((data) => setBedsData(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        /* fetch("http://localhost:5000/bedCount", */
        fetch("https://sl3.onrender.com/bedcount",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ beds: bedsToUpdate }),
        })
        .then((response) => response.json())
        .then((data) => {
            setSuccessMessage(data.message);
            setErrorMessage(null);
        })
        .catch((error) => {
            setSuccessMessage(null);
            setErrorMessage(error.message);
        })
    };

    let bedsAvailable = null;
    if (bedsData && bedsData.beds && bedsData.beds.length > 0) {
      bedsAvailable = bedsData.beds[0];
    }

    return (
        <Container className="text-center p-5">
            {typeof bedsData.beds === "undefined" ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h2 style={{textDecoration:'underline'}}className="p-5" >Update House Availablity</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Beds available: 
                        </label>
                        <input
                            type="number"
                            placeholder={bedsAvailable}
                            value={bedsToUpdate}
                            onChange={(e) => setBedsToUpdate(parseInt(e.target.value))}
                        />
                        <div className="pt-4"> <Button variant="dark" type="submit" >Update</Button></div>
                    </form>

                    {successMessage && <h5 className='mt-5 p-2 rounded' style={{ backgroundColor: "#0eac0021" }}>{successMessage}</h5>}
                    {errorMessage && <h5 className='mt-5 p-2 rounded' style={{ backgroundColor: "#ff000d41"}}>{errorMessage}</h5>} 
                </>
            )}
        </Container>
    );
};

export default UpdateBeds;