import React, { useContext, useState} from "react";
import { Weathercontext } from "./Context";

function Searching() {
     const [city, setCity] = useState('');
     const { fetchWeather } = useContext(Weathercontext);
    
        const handleSearch = () => {
            if (city.trim() !== "") {
            fetchWeather(city);
            }
        };
        const handleKeydown = (event) => {
            if (event.key === "Enter") {
                fetchWeather(city);
            }
        }
        

        return(
        <div className="input-div">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} onKeyDown={handleKeydown}
        placeholder="Search for city" />
        <button type="button" onClick={handleSearch}>Search</button>
        </div>
        );
};

export default Searching;