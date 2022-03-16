import React from 'react'
import "../App";
import "./weatherdetails.scss";

export default function WeatherDetails({detail}) {

console.log(`weatherdetail` , detail);

  return (
    <div className='container'>
       {detail.map((x , i) => (
       <div className='item' key={i}> 
            <div> {i} </div>
            <h1> {x.temperature} </h1>
        </div>
        
       ))} 
    </div>
  )
}
