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
                handleClear();
            }
        }
        const handleClear = () => {
            document.getElementById("intro1").style.display = "none";
            document.getElementById("intro2").style.display = "none";
        }
        const handleAll = () => {
            handleSearch();
            handleClear();
        }

        return(
        <div className="input-div">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} onKeyDown={handleKeydown}
        placeholder="Search for a City" />
        <button type="button" onClick={handleAll} >Search</button>
        </div>
        );
};

export default Searching;
