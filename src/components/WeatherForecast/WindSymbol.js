export function WindSymbol(props){

    function getWindDirection(wind_from_direction){
        const wind = parseInt(wind_from_direction)
        if(wind >= 0 && wind <= 20 || wind >= 340){
            return "north"
        }
        if(wind > 20 && wind <= 65){
            return "north-east"
        }
        if(wind > 65 && wind <= 110){
            return "east"
        }
        if(wind > 110 && wind <= 155){
            return "south-east"
        }
        if(wind > 155 && wind <= 205){
            return "south"
        }
        if(wind > 205 && wind <= 250){
            return "south-west"
        }
        if(wind > 250 && wind <= 290){
            return "west"
        }
        if(wind > 290 && wind <= 340){
            return "north-west"
        }
    }


    let windCode = getWindDirection(props.wind_from_direction)+".svg"
    let imagePath = "/WindSymbols/"+windCode

    return(
        <div>
            <img style={{maxHeight:"50px"}} src={process.env.PUBLIC_URL + imagePath}/>
        </div>
    )

}