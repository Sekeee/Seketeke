import React from 'react'
import './weatherapi.scss';

const axios = require('axios');

export default function WeatherAPI({ setData }) {

    let concatArray = []
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

                array.forEach((el, i) => {

                    axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${array[i].coordinate[1]},${array[i].coordinate[0]}`)
                        .then(function (weather) {

                            weather.data.daily.data.forEach((element, index) => {
                                weathers.push({
                                    name: el.name,
                                    time: new Date(element.time*1000),
                                    icon: element.icon,
                                    temperature: Math.round((element.apparentTemperatureHigh - 32) * 5/9),
                                })
                            })
                            currentweathers.push({
                                current: {
                                    name: el.name,
                                    currentTime: weather.data.currently.time,
                                    currentIcon: weather.data.currently.icon,
                                    currentTemperature: Math.round((weather.data.currently.apparentTemperature - 32) * 5/9),
                                }

                            })
                            concatArray = currentweathers.concat(weathers)
                            weathers = [];
                            currentweathers = [];
                            finalData.push(concatArray)
                        })

                })
                setTimeout( () => setData(finalData) , 1000 )
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







