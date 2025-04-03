import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setweatherInfo] = useState({
        city : "Random Place",
        feelsLike: 26.54,       
        humidity: 7,
        temp: 27.92,
        tempMax: 27.92,
        tempMin: 27.92,
        weather: "clear sky"
    });

    let updateInfo = (newInfo) =>{
        setweatherInfo(newInfo);
    };

    return(
        <div style={{textAlign : "center"}}>
            <h2>Weather App</h2>
             <SearchBox updateInfo = {updateInfo}/>
             <InfoBox  info={weatherInfo}/>
        </div>
    );
}