import React from 'react'
import './weatherlist.scss'
import WeatherIcon from 'react-icons-weather';

export default function WeatherList({ setDetail , data }) {

    const handleClick = (weeklyData) => {
        console.log(`clicked`);
        console.log(weeklyData);
        setDetail(weeklyData)
    }

    if (data === undefined)
        return (
            <div className='loading'>
                loading...
            </div>
        )
    return (
        <div className='item-container'>
            {data.map((el , i) => (
                <div className='item' key={i} onClick = {() => handleClick(data[i])} > 
                    <div className='title'>{el[0].current.name}</div>  
                    <h1> {Math.round(el[0].current.currentTemperature)} C </h1>
                    <WeatherIcon name="darksky" iconId={el[0].current.currentIcon} flip="horizontal" rotate="90" className = "icon"/>
                    <span> {el[0].current.currentIcon} </span>
                </div>
            ))}
        </div>
    )
}
