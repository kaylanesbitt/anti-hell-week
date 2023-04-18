import React, { useState, useEffect } from "react";
import { zeroData } from './zeroData'



function ClassZero() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/0`)
            .then(response => response.json())
            .then((usefulData) => {

            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);



}
export default ClassZero