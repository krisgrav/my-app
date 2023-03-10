import React, {useState, useEffect} from "react";

import "./Components.css"
import "../Fonts.css"



export function TimeAndDate(){
    const [day, setDay] = useState()
    const [weekday, setWeekday] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()
    const refreshInterval = 10000

    function getNow(){
        let data = Date().split(" ")
            return {
                day:parseInt(data[2]),
                weekday:data[0],
                month:data[1],
                year:parseInt(data[3]),
                hour:data[4].split(":")[0],
                minute:data[4].split(":")[1],
                second:data[4].split(":")[2]
            }
    }

    function setData(){
        const now = getNow()
        setDay(now.day)
        setWeekday(now.weekday)
        setMonth(now.month)
        setYear(now.year)
        setHour(now.hour)
        setMinute(now.minute)
        setSecond(now.second)
    }

    useEffect(() => {
        setData()
        const interval = setInterval(() => {
            setData()
        }, refreshInterval)
        return () => clearInterval(interval)
    }, []
    )

    return (
        <div className="TimeAndDate">
            <h4 className="Dark">{weekday} {day}. {month}</h4>
            <h1 className="Dark">{hour}:{minute}</h1>
        </div>
        
    )
}