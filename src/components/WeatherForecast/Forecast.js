import { useState, useEffect } from "react";

import "../componentStyles.css";

function getCurrentSerie(data){
    let currentHour = Date().split(" ")[4].split(":")[0]
    const currentSerie = data.timeseries.find((timeserie) => timeserie.time.split("T")[1].split(":")[0] === currentHour)
    return currentSerie
}

function dataFormatter(data){
    const currentTimeSerie = getCurrentSerie(data)
    return({
        air_temperature: currentTimeSerie.data.instant.details.air_temperature,
        wind_speed: currentTimeSerie.data.instant.details.wind_speed,
        wind_speed_of_gust: currentTimeSerie.data.instant.details.wind_speed_of_gust,
        wind_from_direction: currentTimeSerie.data.instant.details.wind_from_direction,
        wind_speed: currentTimeSerie.data.instant.details,
        currentTimeSerie: currentTimeSerie,
        updated_at : data.meta.updated_at,
        timeseries : data.timeseries
    })
}

export function Forecast(props){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    let url = "https://api.met.no/weatherapi/locationforecast/2.0/complete?lat="+props.location.lat+"&lon="+props.location.lon
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((actualData) => setData(actualData.properties))
     }, []);

    if (data){
        console.log("Formatted data", dataFormatter(data))
        const currentTimeSerie = getCurrentSerie(data)
        const wind_from_direction = currentTimeSerie.data.instant.details.wind_from_direction
        const  wind_speed = currentTimeSerie.data.instant.details.wind_speed
        const wind_speed_of_gust = currentTimeSerie.data.instant.details.wind_speed_of_gust



        return(
            <div className="ForecastCard">
            <h3>{props.location.displayName}</h3>
            <section style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <p>{currentTimeSerie.data.instant.details.air_temperature} ℃</p>
                <p>Vind: {wind_speed} m/s   {wind_speed_of_gust} {wind_from_direction}</p>
                <p>Nedbør: </p>
            </section>
        </div>
        )

    }
    return(
        <p>Loading...</p> 
    )
}