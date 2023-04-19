import React, { useState, useEffect } from "react";
import { zeroData } from './zeroData'
import { getCourses, display } from './connection.js'


function ClassZero() {
    return (
        display(getCourses)
    )
}
export default ClassZero