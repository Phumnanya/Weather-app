import React, {createContext, useState} from "react";

export const Weathercontext = createContext();

export const Weatherprovider = ({children}) => {
    const [weatherData, setweatherData] = useState(null);
    const [hourlyData, sethourlyData] = useState(null);
const [loading, setLoading] = useState(true);

    const fetchWeather = async (city) => {
setLoading(true);
        const API_KEY = "431f5ef15584a951c785eec85f2b0ee0";
        const current = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        const hourly = `https://pro.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`

        try {
            const response = await fetch(current);
            const response2 = await fetch(hourly);
            const data0 = await response.json();
            const data1 = await response2.json();
            setweatherData(data0);
            sethourlyData(data1);
          } catch (error) {
            alert("city not found", error);
          }
    };
    return (
        <Weathercontext.Provider value={{weatherData, hourlyData, fetchWeather}}>
            {children}
        </Weathercontext.Provider>
    );
};
