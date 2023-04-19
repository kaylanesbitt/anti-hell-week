import React, { useState, useEffect } from "react";
import { zeroData } from './zeroData'


async function getZeroData(callback) {
    const axios = require('axios')
    axios.get('http://localhost:8000/0')
        .then((response) => {
            callback(response.data)
        })
        .catch(err => console.error(err))
}


function ClassZero() {
    const axios = require('axios')
    var tuples = null
    axios.get('http://localhost:8000/0')
        .then((response) => {
            console.log(response.data)
            tuples = response.data
        })
        .catch(err => console.error(err))
    return (
        <div>{tuples}</div>
    )
}
export default ClassZero