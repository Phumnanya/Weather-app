import React, { useContext} from "react";
import { Weathercontext } from "./Context";

function Main() {
    const { weatherData,loading } = useContext(Weathercontext);

if (loading) { 
return 
<div class="spinner-border text-light"></div>;
}

    if(!weatherData) {
        return<p> </p>
    }

    const mark = (date) => {
        return date.toDateString();
    };
    const today = new Date();

    return(
        <div className="main_widget">
        
            <div className="wgt_info">
            <div className="today">
                <h1>{weatherData.name}</h1>
            </div>
                <div className="wgt_info_contents">
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="icon" />
                </div>
                <div className="wgt_info_contents">
                <h1 id="temperature">{Math.round(weatherData.main.temp)}°C</h1>
                <h2>{mark(today)}</h2>
                </div>
                <div className="description">
                <div className="description_flex">
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="icon2" />
                <p>{weatherData.weather[0].description}</p><br></br>
                </div>
                <div className="description_flex">
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="1con3" />
                <p>{weatherData.weather[0].main}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
