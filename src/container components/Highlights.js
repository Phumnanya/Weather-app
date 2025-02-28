import React, {useContext} from "react";
import { Weathercontext } from "./Context";

function Highlights() {
    const { weatherData } = useContext(Weathercontext);
    const { hourlyData } = useContext(Weathercontext);

    if(!weatherData) {
        return<p> </p>
    }
    if (!hourlyData) {
        return <p> </p>
    }

    return(
        <div className="highlights">
        <div>
                <h2>Current Weather</h2>
            </div>
            <div className="info_container">
                <div className="info">
                    <h2>Wind</h2>
                    <h4>{weatherData.wind.speed}km/h</h4>
                    <p>WSW</p>
                </div>
                <div className="info">
                    <h2>Humidity</h2>
                    <h4>{weatherData.main.humidity}%</h4>
                    <p>Normal</p>
                </div>
                <div className="info">
                    <h2>Visibility</h2>
                    <h4>{weatherData.visibility}</h4>
                    <p>Average</p>
                </div>
            </div>

            <div>
                <h2>Hourly Weather</h2>
            </div>
            <div className="hourly_forecast">
                <div className="hourly">
                    <h5>{new Date(hourlyData.list[0].dt * 1000).toLocaleTimeString()}</h5>
                    <img src={`https://openweathermap.org/img/wn/${hourlyData.list[0].weather[0].icon}@2x.png`} alt="icon" />
                    <p>{Math.round(hourlyData.list[0].main.temp)}°C</p>
                    <p>{hourlyData.list[0].weather[0].main}</p>
                </div>
                <div className="hourly">
                    <h5>{new Date(hourlyData.list[1].dt * 1000).toLocaleTimeString()}</h5>
                    <img src={`https://openweathermap.org/img/wn/${hourlyData.list[1].weather[0].icon}@2x.png`} alt="icon" />
                    <p>{Math.round(hourlyData.list[1].main.temp)}°C</p>
                    <p>{hourlyData.list[1].weather[0].main}</p>
                </div>
                <div className="hourly">
                    <h5>{new Date(hourlyData.list[2].dt * 1000).toLocaleTimeString()}</h5>
                    <img src={`https://openweathermap.org/img/wn/${hourlyData.list[2].weather[0].icon}@2x.png`} alt="icon" />
                    <p>{Math.round(hourlyData.list[2].main.temp)}°C</p>
                    <p>{hourlyData.list[2].weather[0].main}</p>
                </div>
                <div className="hourly">
                    <h5>{new Date(hourlyData.list[3].dt * 1000).toLocaleTimeString()}</h5>
                    <img src={`https://openweathermap.org/img/wn/${hourlyData.list[3].weather[0].icon}@2x.png`} alt="icon" />
                    <p>{Math.round(hourlyData.list[3].main.temp)}°C</p>
                    <p>{hourlyData.list[3].weather[0].main}</p>
                </div>
                <div className="hourly">
                    <h5>{new Date(hourlyData.list[4].dt * 1000).toLocaleTimeString()}</h5>
                    <img src={`https://openweathermap.org/img/wn/${hourlyData.list[4].weather[0].icon}@2x.png`} alt="icon" />
                    <p>{Math.round(hourlyData.list[4].main.temp)}°C</p>
                    <p>{hourlyData.list[4].weather[0].main}</p>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
