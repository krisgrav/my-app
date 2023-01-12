import { useState, useEffect } from "react";
import "../componentStyles.css";
import { locations } from "./Locations";
import { Forecast } from "./Forecast";

export function WeatherForecast(){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    let url = "https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=59.934514&lon=10.780078"

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((actualData) => setData(actualData.properties))
        .then((data) => console.log(data))
     }, []);

    if(data){
        console.log(data)
    }

    return(
        <div className="WeatherForecast">
            <h1>Været</h1>
            <Forecast location={locations.stavanger}/>
        </div>
    )
}