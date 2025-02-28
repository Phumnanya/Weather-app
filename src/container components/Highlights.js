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

   /* function mark (date) {
        return (date * 1000);
        date.toLocaleTimeString();
    };
    */

    return(
        <div className="highlights">
            
            <div className="today">
                <h1>{weatherData.name}</h1>
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

            <div className="today">
                <h2>Hourly</h2>
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

/*
<div className="week">
                <h2>Week</h2>
            </div>
            <div className="weekly_forecast">
                <div className="wforecast">
                    <h5>Sun</h5>
                    <img src="r05d.png" alt="icon" />
                    <p>15°C</p>
                </div>
                <div className="wforecast">
                    <h5>Mon</h5>
                    <img src="r05d.png" alt="icon" />
                    <p>12°C</p>
                </div>
                <div className="wforecast">
                    <h5>Tue</h5>
                    <img src="r05d.png" alt="icon" />
                    <p>9°C</p>
                </div>
                <div className="wforecast">
                    <h5>Wed</h5>
                    <img src="r05d.png" alt="icon" />
                    <p>8°C</p>
                </div>
                <div className="wforecast">
                    <h5>Thu</h5>
                    <img src="r05d.png" alt="icon" />
                    <p>5°C</p>
                </div>
                <div className="wforecast">
                    <h5>Fri</h5>
                    <img src="r05d.png" alt="icon" />
                    <p>4°C</p>
                </div>
                <div className="wforecast">
                    <h5>Sat</h5>
                    <img src="r05d.png" alt="icon" />
                    <p>3°C</p>
                </div>
            </div>
*/