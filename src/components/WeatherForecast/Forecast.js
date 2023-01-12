import { useState, useEffect } from "react";
import "../componentStyles.css"

import { componentstyles } from "../ComponentStyles";
import { WeatherSymbol } from "./WeatherSymbol";
import { WindSymbol } from "./WindSymbol";



function getCurrentSerie(data){
    let currentHour = Date().split(" ")[4].split(":")[0]
    const currentSerie = data.timeseries.find((timeserie) => timeserie.time.split("T")[1].split(":")[0] === currentHour)
    return currentSerie
}

function dataFormatter(data){
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

function isPositive(airTemperature){
    return (parseInt(airTemperature) > 0)
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

        let wind_speed_of_gust = actualData.wind_speed_of_gust
        wind_speed_of_gust = "(" + wind_speed_of_gust + ")"

        return(
            <div style={componentstyles.forecast}>
            <h4 className="DarkBold">{props.location.displayName}</h4>
            <section style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                <article style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <div style={{marginRight:"10px"}}>
                        {isPositive(actualData.air_temperature) ? 
                            (<p className="PositiveCelsius">{actualData.air_temperature} ℃</p>)
                            :(<p className="NegativeCelsius">{actualData.air_temperature} ℃</p>)
                        }
                    </div>
                    <WeatherSymbol symbol_code={actualData.symbol_code}/>
                    
                </article>
                <article style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <p className="Dark">{actualData.wind_speed} m/s</p>
                    <WindSymbol wind_from_direction={actualData.wind_from_direction}/>
                </article>
            </section>
        </div>
        )

    }
    return(
        <p>Loading...</p> 
    )
}