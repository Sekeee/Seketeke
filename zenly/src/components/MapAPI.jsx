import React, { useEffect, useRef, useState } from 'react'
import "../App.css";
import { style } from "./MapStyle"

export default function MapApi() {

    const mapContainerRef = useRef();
    let mapRef = useRef();

    const [nightMode, setNightMode] = useState(false);

    let [pos, setPos] = useState(null);

    useEffect(() => {
        if (nightMode) {
            mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
                center: { lat: 47.9173099, lng: 106.9149359 },
                zoom: 14,
                styles: style,
            });
        } else {
            mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
                center: { lat: 47.9173099, lng: 106.9149359 },
                zoom: 14,
            });
        }

        const watchLocation = navigator.geolocation.watchPosition((position) => {
            setPos({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        }, (message) => {
            console.error(message);
        });

        return () => {
            navigator.geolocation.clearWatch(watchLocation)
        }

    }, [nightMode]);


    useEffect(() => {
        if (!pos) return;

        mapRef.current.setCenter(pos);
        const myMark = new window.google.maps.Marker({
            position: pos,
            map: mapRef.current
        })

        return () => {
            myMark.setMap(null);
        }
    }, [pos]);

    const toggleMapMode = () => {

        setNightMode(!nightMode);
    }

    return (
        <>
            <button onClick={toggleMapMode}> Toggle mode </button>
            <div id='map' ref={mapContainerRef}></div>
        </>

    )
}
