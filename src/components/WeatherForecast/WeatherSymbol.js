const symbolkeys = [
    {
        symbol_code:"clearsky_day",
        image_key: "01d"
    },
    {
        symbol_code: "clearsky_polartwilight",
        image_key: "01m",
    },
    {
        symbol_code: "clearsky_night",
        image_key: " 01n",
    },
    {
        symbol_code: "fair_day",
        image_key: "02d",
    },
    {
        symbol_code: "fair_polartwilight",
        image_key: "02m",
    },
    {
        symbol_code: "fair_night",
        image_key: "02n",
    },
    {
        symbol_code: "partlycloudy_day",
        image_key: "03d",
    },
    {
        symbol_code: "partlycloudy_polartwilight",
        image_key: "03m",
    },
    {
        symbol_code: "partlycloudy_night",
        image_key: "03n",
    },
    {
        symbol_code: "cloudy",
        image_key: "04",
    },
    {
        symbol_code: "rainshowers_day",
        image_key: "05d",
    },
    {
        symbol_code: "rainshowers_polartwilight",
        image_key: "05m",
    },
    {
        symbol_code: "rainshowers_night",
        image_key: "05n",
    },
    {
        symbol_code: "rainshowersandthunder_day",
        image_key: "06d"
    },
    {
        symbol_code: "rainshowersandthunder_polartwilight",
        image_key: "06m"
    },
    {
        symbol_code: "rainshowersandthunder_night",
        image_key: "06n"
    },
    {
        symbol_code: "sleetshowers_day",
        image_key: "07d"
    },
    {
        symbol_code: "sleetshowers_polartwilight",
        image_key: "07m"
    },
    {
        symbol_code: "sleetshowers_night",
        image_key: "07n"
    },
    {
        symbol_code: "snowshowers_day",
        image_key: "08d"
    },
    {
        symbol_code: "snowshowers_polartwilight",
        image_key: "08m"
    },
    {
        symbol_code: "snowshowers_night",
        image_key: "08n"
    },
    {
        symbol_code: "rain",
        image_key: "09"
    },
    {
        symbol_code: "heavyrain",
        image_key: "10"
    },
    {
        symbol_code: "heavyrainandthunder",
        image_key: "11"
    },
    {
        symbol_code: "sleet",
        image_key: "12"
    },
    {
        symbol_code: "snow",
        image_key: "13"
    },
    {
        symbol_code: "snowandthunder",
        image_key: "14"
    },
    {
        symbol_code: "fog",
        image_key: "15"
    },
    {
        symbol_code: "sleetshowersandthunder_day",
        image_key: "20d"
    },
    {
        symbol_code: "sleetshowersandthunder_polartwilight",
        image_key: "20m"
    },
    {
        symbol_code: "sleetshowersandthunder_night",
        image_key: "20n"
    },
    {
        symbol_code: "snowshowersandthunder_day",
        image_key: "21d"
    },
    {
        symbol_code: "snowshowersandthunder_polartwilight",
        image_key: "21m"
    },
    {
        symbol_code: "snowshowersandthunder_night",
        image_key: "21n"
    },
    {
        symbol_code: "rainandthunder",
        image_key: "22"
    },
    {
        symbol_code: "sleetandthunder",
        image_key: "23"
    },
    {
        symbol_code: "lightrainshowersandthunder_day",
        image_key: "24d"
    },
    {
        symbol_code: "lightrainshowersandthunder_polartwilight",
        image_key: "24m"
    },
    {
        symbol_code: "lightrainshowersandthunder_night",
        image_key: "24n"
    },
    {
        symbol_code: "heavyrainshowersandthunder_day",
        image_key: "25d"
    },
    {
        symbol_code: "heavyrainshowersandthunder_polartwilight",
        image_key: "25m"
    },
    {
        symbol_code: "heavyrainshowersandthunder_night",
        image_key: "25n"
    },
    {
        symbol_code: "lightssleetshowersandthunder_day",
        image_key: "26d"
    },
    {
        symbol_code: "lightssleetshowersandthunder_polartwilight",
        image_key: "26m"
    },
    {
        symbol_code: "lightssleetshowersandthunder_night",
        image_key: "26n"
    },
    {
        symbol_code: "heavysleetshowersandthunder_day",
        image_key: "27d"
    },
    {
        symbol_code: "heavysleetshowersandthunder_polartwilight",
        image_key: "27m"
    },
    {
        symbol_code: "heavysleetshowersandthunder_night",
        image_key: "27n"
    },
    {
        symbol_code: "lightssnowshowersandthunder_day",
        image_key: "28d"
    },
    {
        symbol_code: "lightssnowshowersandthunder_polartwilight",
        image_key: "28m"
    },
    {
        symbol_code: "lightssnowshowersandthunder_night",
        image_key: "28n"
    },
    {
        symbol_code: "heavysnowshowersandthunder_day",
        image_key: "29d"
    },
    {
        symbol_code: "heavysnowshowersandthunder_polartwilight",
        image_key: "29m"
    },
    {
        symbol_code: "heavysnowshowersandthunder_night",
        image_key: "29n"
    },
    {
        symbol_code: "lightrainandthunder",
        image_key: "30"
    },
    {
        symbol_code: "lightsleetandthunder",
        image_key: "31"
    },
    {
        symbol_code: "heavysleetandthunder",
        image_key: "32"
    },
    {
        symbol_code: "lightsnowandthunder",
        image_key: "33"
    },
    {
        symbol_code: "heavysnowandthunder",
        image_key: "34"
    },
    {
        symbol_code: "lightrainshowers_day",
        image_key: "40d"
    },
    {
        symbol_code: "lightrainshowers_polartwilight",
        image_key: "40m"
    },
    {
        symbol_code: "lightrainshowers_night",
        image_key: "40n"
    },
    {
        symbol_code: "heavyrainshowers_day",
        image_key: "41d"
    },
    {
        symbol_code: "heavyrainshowers_polartwilight",
        image_key: "41m"
    },
    {
        symbol_code: "heavyrainshowers_night",
        image_key: "41n"
    },
    {
        symbol_code: "lightsleetshowers_day",
        image_key: "42d"
    },
    {
        symbol_code: "lightsleetshowers_polartwilight",
        image_key: "42m"
    },
    {
        symbol_code: "lightsleetshowers_night",
        image_key: "42n"
    },
    {
        symbol_code: "heavysleetshowers_day",
        image_key: "43d"
    },
    {
        symbol_code: "heavysleetshowers_polartwilight",
        image_key: "43m"
    },
    {
        symbol_code: "heavysleetshowers_night",
        image_key: "43n"
    },
    {
        symbol_code: "lightsnowshowers_day",
        image_key: "44d"
    },
    {
        symbol_code: "lightsnowshowers_polartwilight",
        image_key: "44m"
    },
    {
        symbol_code: "lightsnowshowers_night",
        image_key: "44n"
    },
    {
        symbol_code: "heavysnowshowers_day",
        image_key: "45d"
    },
    {
        symbol_code: "heavysnowshowers_polartwilight",
        image_key: "45m"
    },
    {
        symbol_code: "heavysnowshowers_night",
        image_key: "45n"
    },
    {
        symbol_code: "lightrain",
        image_key: "46"
    },
    {
        symbol_code: "lightsleet",
        image_key: "47"
    },
    {
        symbol_code: "heavysleet",
        image_key: "48"
    },
    {
        symbol_code: "lightsnow",
        image_key: "49"
    },
    {
        symbol_code: "heavysnow",
        image_key: "50"
    }

]

function codeToKey(code){
    const key = symbolkeys.find((symbol) => {
        if(symbol.symbol_code == code){
            return symbol
        }
    })
    return key.image_key
}

export function WeatherSymbol(props){
    let svgKey = codeToKey(props.symbol_code) +".svg"
    let imagePath = "/WeatherSymbols/"+svgKey

    return(
        <div>
            <img style={{maxHeight:"50px"}} src={process.env.PUBLIC_URL + imagePath}/>
        </div>
        
    )
}