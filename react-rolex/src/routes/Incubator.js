import React from 'react'
import { useState, useEffect } from 'react'
import incubatorData from './data.js'


function Incubator() {
    const classes = incubatorData.map((data, id) => {
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
export default Incubator

