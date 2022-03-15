import React from 'react'
const axios = require('axios');
// import './weatherapi.scss';

export default function WeatherAPI({ setData }) {

    let weathers = []
    let array = []
    let city

    // const [ data, setData ] = useState([])

    const handleInput = (e) => {
        city = e.target.value
    }


    const handleSearch = () => {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1Ijoic2V0Z2VsIiwiYSI6ImNsMGFlMjU0NzAxNHczY3BkdGJzenBlZGYifQ.76aghxce77VdI9QWpJPcWQ`)
            .then(function (data) {
                data.data.features.forEach((el, index) => {
                    array.push({
                        placename: el.place_name,
                        coordinate: el.geometry.coordinates,
                        feelsLike: el.apparentTemperature,
                        id: index
                    })
                })
                let reducedArray = array.filter((el, i) => el.coordinate)

                reducedArray.forEach((el, i) => {
                    axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${reducedArray[i].coordinate[1]},${reducedArray[i].coordinate[0]}`)
                        .then(function (weather) {
                            // console.log(`Current temperature of ${reducedArray[i].placename} is now ` + Math.round((weather.data.currently.temperature - 32) * 5 / 9))
                            // console.log(`But feels like ${Math.round((weather.data.currently.apparentTemperature - 32) * 5 / 9)} due to wind`);
                            weathers.push({
                                placename: reducedArray[i].placename,
                                temperature: Math.round((weather.data.currently.temperature - 32) * 5 / 9),
                                id: reducedArray[i].id
                            })
                            
                        })
                })
                setData(weathers)
                console.log(weathers);
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







