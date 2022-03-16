import React from 'react'

export default function WeatherList({ data }) {

    
    if (data === undefined)
        return (
            <div>
                loading...
            </div>
        )
    return (
        <div>
            {data.map(el => (
                <div key={el.id}> The current temperature of {el.placename} is now {el.temperature} </div>
            ))}
        </div>
    )
}
