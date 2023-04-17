import React from "react";

function ClassZero() {
    const url = 'http://localhost:8000/0'
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const message = []

    fetch(url, options)
        .then(response => response.json())
        .then(json => message = json)
        .catch(error => console.error(error))

    const stuff = message.forEach((elt) => {
        <div>
            <h1>{elt}</h1>
        </div>
    })

    return (
        <div>
            {stuff}
        </div>
    )
}

export default ClassZero;