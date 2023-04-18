import React, { useState, useEffect } from "react";
import { zeroData } from './zeroData'



function ClassZero() {


    return (
        <div>
            {zeroData.map((data, key) => {
                if (data.exam3 != 'NULL') {

                    return (
                        <div key={key}>
                            {data.cid + ", "}
                            {data.count + ", "}
                            {data.exam1 + ", "}
                            {data.exam2 + ", "}
                            {data.exam3}
                        </div>
                    )
                }
                else if (data.exam2 != 'NULL') {
                    return (
                        <div key={key}>
                            {data.cid + ", "}
                            {data.count + ", "}
                            {data.exam1 + ", "}
                            {data.exam2}

                        </div>
                    )
                }
                else if (data.exam1 != 'NULL') {

                    return (
                        <div key={key}>
                            {data.cid + ", "}
                            {data.count + ", "}
                            {data.exam1}

                        </div>
                    )
                }
                else {
                    return (
                        <div key={key}>
                            {data.cid + ", "}
                            {data.count + ", "}
                            <div>No Exams in this class.</div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default ClassZero