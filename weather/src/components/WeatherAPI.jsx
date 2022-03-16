import React from 'react'
const axios = require('axios');
// import './weatherapi.scss';

export default function WeatherAPI({ setData }) {
    
    let currentweathers = []
    let weathers = []
    let array = []
    let city
    let finalData = []


    const handleInput = (e) => {
        city = e.target.value
    }


    const handleSearch = () => {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1Ijoic2V0Z2VsIiwiYSI6ImNsMGFlMjU0NzAxNHczY3BkdGJzenBlZGYifQ.76aghxce77VdI9QWpJPcWQ`)
            .then(function (data) {
                data.data.features.forEach((el, index) => {
                    array.push({
                        name: el.text,
                        coordinate: el.geometry.coordinates,
                    })
                })
                // console.log(array);

                array.forEach((el, i) => {
                    
                    axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${array[i].coordinate[1]},${array[i].coordinate[0]}`)
                        .then(function (weather) {
                            
                            weather.data.hourly.data.forEach((element , index) => {
                                weathers.push({
                                    name: el.name,
                                    time: new Date(element.time),
                                    icon : element.icon,
                                    temperature : element.apparentTemperature,
                                })
                            })
                            currentweathers.push({
                                current: {
                                    name : el.name,
                                    currentTime : weather.data.currently.time,
                                    currentIcon : weather.data.currently.icon,
                                    currentTemperature : weather.data.currently.apparentTemperature,
                                }
                                    
                            })
                            finalData.push(currentweathers);
                            finalData.push(weathers)
                        })
                        
                    })
                    console.log(finalData);
                    setData(weathers)
                array = [];
            })
    }


    return (
        <div className='form'>
            <input onChange={handleInput}></input>
            <button onClick={handleSearch}> Search </button>
        </div>
    )
}







