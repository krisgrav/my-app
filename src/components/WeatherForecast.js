import { useState, useEffect } from "react";
import "./Components.css"
import "../Fonts.css"
import { colors } from "../Colors";
import { Audio } from "react-loader-spinner";


import { WeatherSymbol } from "./WeatherForecast/WeatherSymbol";
import { WindSymbol } from "./WeatherForecast/WindSymbol";
import { Box, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const modalStyle = {
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: 'translate(-50%, -50%)',
        width: "fit-content",
        bgcolor: colors.grey,
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        outline: 0
    }

export function WeatherForecast(){
    const [position, setPosition] = useState(null)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [modalState, setModalState] = useState(false)

    const URL1 = "https://api.met.no/weatherapi/locationforecast/2.0/complete?lat="
    const URL2 = "&lon="

    const URL3 = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
    const URL4 = "&key="
    const GOOGLEAPIKEY = "AIzaSyCvqHP5ZImUJ0ErjjmPR3PYB0Eat6uGGRc"

    function isPositive(airTemperature){
        return (parseInt(airTemperature) > 0)
    }

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

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position){
            setPosition(position)
        })
    }, [])

    useEffect(() => {
        if(position){
            fetch(URL3 + position.coords.latitude + "," + position.coords.longitude + URL4 + GOOGLEAPIKEY)
            .then((response) => response.json())
            .then((actualData) => setLocation(actualData.results[0].formatted_address.split(",")[0]))
            .then((actualData) => console.log(actualData.results[0].formatted_address.split(",")[0]))
        }
    }, [position])

    useEffect(() => {
        if(location){
            fetch(URL1 + position.coords.latitude + URL2 + position.coords.longitude)
            .then((response) => response.json())
            .then((actualData) => setData(actualData.properties))
        }
    }, [location]);

    function toggleModal(){
        if(modalState){
            setModalState(false)
        }
        else{
            setModalState(true)
        }  
    }
    
    if (data){
        const actualData = dataFormatter(data)
        const futureTimeseries = actualData.timeseries.slice(actualData.timeseries.indexOf(actualData.currentTimeserie)+1, actualData.timeseries.indexOf(actualData.currentTimeserie)+11)

        return(
            <div className="Forecast" onClick={toggleModal}>
                <h4 className="Dark">{location}</h4>
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
                <div>
                    <Modal open={modalState}>
                        <Box sx={modalStyle}>
                            <TableContainer>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>Vær</TableCell>
                                            <TableCell>Temp.</TableCell>
                                            <TableCell>Nedbør</TableCell>
                                            <TableCell>Vind</TableCell>
                                            <TableCell/>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {futureTimeseries.map((timeserie) => {
                                            const tempString = timeserie.data.instant.details.air_temperature + "℃"
                                            const precipitationString = timeserie.data.next_1_hours.details.precipitation_amount_min + "-" + timeserie.data.next_1_hours.details.precipitation_amount_max
                                            return(
                                                <TableRow key={"forecast"}>
                                                    <TableCell key={"time"}>{(timeserie.time.split("T")[1].split(":")[0] + ":00")}</TableCell>
                                                    <TableCell key={"symbol"}>
                                                        <WeatherSymbol symbol_code={timeserie.data.next_1_hours.summary.symbol_code}/>
                                                    </TableCell>
                                                    <TableCell key={"precipitation"} align="right">{tempString}</TableCell>
                                                    {(timeserie.data.next_1_hours.details.precipitation_amount_max > 0)?
                                                        <TableCell align="right">{precipitationString}</TableCell>:
                                                        <TableCell></TableCell>
                                                    } 
                                                    <TableCell key={"wind"} align="right">
                                                        {(timeserie.data.instant.details.wind_speed + " m/s")}
                                                    </TableCell>
                                                    <TableCell key={"wind_direction"} align="left">
                                                        <WindSymbol wind_from_direction={timeserie.data.instant.details.wind_from_direction}/>
                                                    </TableCell>
                                                </TableRow>
                                            )
                
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>    
                        </Box>
                    </Modal>
                </div>
                
            </div>
        )
    }
    return(
        <div className="Forecast">
            <Audio/>
        </div>    
    )
}