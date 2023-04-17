import React, { useState, useEffect } from "react";

function ClassZero() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch('https://localhost:8000/0')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMessage(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    console.log({ message })
    console.log('i')

    return (
        <div>{message}</div>
    )
}

export default ClassZero;