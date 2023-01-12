import { useState, useEffect } from "react";
import { locations } from "./Locations";
import { Forecast } from "./Forecast";
import { componentstyles } from "../ComponentStyles";

export function WeatherForecast(){


    return(
        <div style={componentstyles.wrapper}>
            {
                locations.map((location) =>
                {
                    return <Forecast location={location}/>
                })
            }
        </div>
    )
}