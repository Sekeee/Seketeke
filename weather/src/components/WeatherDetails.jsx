import React from 'react'
import "../App";
import "./weatherdetails.scss";

export default function WeatherDetails({detail}) {

console.log(`weatherdetail` , detail);
let details = detail.slice(1,detail.length);

  return (

    <div className='container'>
       {details.map((x , i) => (
       <div className='item' key={i}> 
            <div> {i} </div>
            <h1> {x.temperature} </h1>
        </div>
       ))} 
    </div>
  )
}
