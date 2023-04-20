import React from 'react'
import { useState, useEffect } from 'react'
import headmasterCourses from './connection.js'
import zeroData from './data.js'


function ClassZero() {
    const axios = require('axios')
    const [classData, setClassData] = useState([])

    useEffect(() => {
        headmasterCourses(tuples => {
            setClassData(tuples)
        })
    }, [])

    const classes = zeroData.map((data, id) => {
        return <div key={id}>
            <h2>{data.department} {data.number}: {data.name}</h2>
            <p>Exam Dates:</p>
            <p>{data.exam1}</p>
            <p>{data.exam2}</p>
            <p>{data.exam3}</p>
        </div>
    })
    return (
        <div>{classes}</div>
    )
}
export default ClassZero

