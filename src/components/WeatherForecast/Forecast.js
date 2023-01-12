import { useState, useEffect } from "react";

import "../componentStyles.css";

function getCurrentSerie(data){
    let currentHour = Date().split(" ")[4].split(":")[0]
    const currentSerie = data.timeseries.find((timeserie) => timeserie.time.split("T")[1].split(":")[0] === currentHour)
    return currentSerie
}

function dataFormatter(data){
    console.log(data)
    const currentTimeSerie = getCurrentSerie(data)
    return({
        currentTimeserie: currentTimeSerie,
        timeseries : data.timeseries,
        time: currentTimeSerie.time,
        updated_at : data.meta.updated_at,

        air_temperature: currentTimeSerie.data.instant.details.air_temperature,
        wind_speed: currentTimeSerie.data.instant.details.wind_speed,
        wind_speed_of_gust: currentTimeSerie.data.instant.details.wind_speed_of_gust,
        wind_from_direction: currentTimeSerie.data.instant.details.wind_from_direction,
        symbol_code: currentTimeSerie.data.next_1_hours.summary.symbol_code,

        precipitation: {
            next_1_hours: {
                precipitation_amount: currentTimeSerie.data.next_1_hours.details.precipitation_amount,
                precipitation_amount_max: currentTimeSerie.data.next_1_hours.details.precipitation_amount_max,
                precipitation_amount_min: currentTimeSerie.data.next_1_hours.details.precipitation_amount_min,
                probability_of_precipitation: currentTimeSerie.data.next_1_hours.details.probability_of_precipitation,
                symbol_code:currentTimeSerie.data.next_1_hours.summary.symbol_code
            },
            next_6_hours: {                 
                air_temperature_max: currentTimeSerie.data.next_6_hours.details.air_temperature_max, 
                air_temperature_min: currentTimeSerie.data.next_6_hours.details.air_temperature_min, 
                precipitation_amount: currentTimeSerie.data.next_6_hours.details.precipitation_amount,
                precipitation_amount_max: currentTimeSerie.data.next_6_hours.details.precipitation_amount_max,
                precipitation_amount_min: currentTimeSerie.data.next_6_hours.details.precipitation_amount_min,
                symbol_code:currentTimeSerie.data.next_6_hours.summary.symbol_code
            },
            next_12_hours: {
                air_temperature_max: currentTimeSerie.data.next_12_hours.details.air_temperature_max, 
                air_temperature_min: currentTimeSerie.data.next_12_hours.details.air_temperature_min, 
                precipitation_amount: currentTimeSerie.data.next_12_hours.details.precipitation_amount,
                precipitation_amount_max: currentTimeSerie.data.next_12_hours.details.precipitation_amount_max,
                precipitation_amount_min: currentTimeSerie.data.next_12_hours.details.precipitation_amount_min,
                symbol_code: currentTimeSerie.data.next_12_hours.summary.symbol_code
            }
        }
    })
}

function getWindDirection(wind_from_direction){
    const wind = parseInt(wind_from_direction)
    if(wind >= 0 && wind <= 20 || wind >= 340){
        return "Nord"
    }
    if(wind > 20 && wind <= 65){
        return "Nord-øst"
    }
    if(wind > 65 && wind <= 110){
        return "Øst"
    }
    if(wind > 110 && wind <= 155){
        return "Sør-øst"
    }
    if(wind > 155 && wind <= 205){
        return "Sør"
    }
    if(wind > 205 && wind <= 250){
        return "Sør-vest"
    }
    if(wind > 250 && wind <= 290){
        return "Vest"
    }
    if(wind > 290 && wind <= 340){
        return "Nord-vest"
    }
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
        const actualData = dataFormatter(data)
        console.log("Formated data", actualData);

        let wind_speed_of_gust = actualData.wind_speed_of_gust
        wind_speed_of_gust = "(" + wind_speed_of_gust + ")"

        const windDirection = getWindDirection(actualData.wind_from_direction)
        console.log("Wind:", windDirection)
    

        return(
            <div className="ForecastCard">
            <h3>{props.location.displayName}</h3>
            <section style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                <article style={{display:"flex", flexDirection:"row"}}>
                    <p>{actualData.air_temperature} ℃ {actualData.symbol_code}</p>
                </article>
                <article>
                    <p>{actualData.wind_speed}{wind_speed_of_gust} m/s fra {windDirection}.</p>
                </article>
            </section>
        </div>
        )

    }
    return(
        <p>Loading...</p> 
    )
}