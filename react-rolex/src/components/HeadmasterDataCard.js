import './DataCardStyles.css';
import React from 'react';
import { headmasterData } from '../routes/Data';

let nameList=[];
headmasterData.forEach((item,index)=>{
  nameList.push( <li key={index}>{item.name}</li>)
})

let countList=[];
headmasterData.forEach((item,index)=>{
  countList.push( <li key={index}>{item.count}</li>)
})

let exam1List=[];
headmasterData.forEach((item,index)=>{
  exam1List.push( <li key={index}>{item.exam1}</li>)
})

let exam2List=[];
headmasterData.forEach((item,index)=>{
  exam2List.push( <li key={index}>{item.exam2}</li>)
})

let exam3List=[];
headmasterData.forEach((item,index)=>{
  exam3List.push( <li key={index}>{item.exam3}</li>)
})

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <>
                  <h2>{nameList[0]}</h2>
                  <ul>
                    Student Count: {countList[0]}
                    Exam 1 Date: {exam1List[0]}
                    Exam 2 Date: {exam2List[0]}
                    {/* Exam 3 Date: {exam3List[0]} */}
                  </ul>

                  <h2>{nameList[1]}</h2>
                  <ul>
                    Student Count: {countList[1]}
                    Exam 1 Date: {exam1List[1]}
                    Exam 2 Date: {exam2List[1]}
                    Exam 3 Date: {exam3List[1]}
                  </ul>

                  <h2>{nameList[2]}</h2>
                  <ul>
                    Student Count: {countList[2]}
                    {/* Exam 1 Date: {exam1List[2]}
                    Exam 2 Date: {exam2List[2]}
                    Exam 3 Date: {exam3List[2]} */}
                  </ul>

                  <h2>{nameList[3]}</h2>
                  <ul>
                    Student Count: {countList[3]}
                    Exam 1 Date: {exam1List[3]}
                    Exam 2 Date: {exam2List[3]}
                    {/* Exam 3 Date: {exam3List[3]} */}
                  </ul>

                  <h2>{nameList[4]}</h2>
                  <ul>
                    Student Count: {countList[4]}
                    Exam 1 Date: {exam1List[4]}
                    {/* Exam 2 Date: {exam2List[4]}
                    Exam 3 Date: {exam3List[4]} */}
                  </ul>

                  <h2>{nameList[5]}</h2>
                  <ul>
                    Student Count: {countList[5]}
                    Exam 1 Date: {exam1List[5]}
                    {/* Exam 2 Date: {exam2List[5]}
                    Exam 3 Date: {exam3List[5]} */}
                  </ul>
                </>
            </div>
        </div>
    </div>
  )
}

export default PricingCard