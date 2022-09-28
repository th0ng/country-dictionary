import {useState,useEffect} from 'react';

const Weather = ({capital}) => {
    const [weather, setWeather] = useState({})

    const apikey = process.env.REACT_APP_API_KEY;
    const api = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='+ capital +'&appid=' + apikey;

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            setWeather({
                city: data.name,
                temperature: data.main.temp,
                windSpeed: data.wind.speed,
                icon: data.weather[0].icon
            });
        } catch (err) {}
    } 
    
    useEffect(() => {fetchWeatherData()}, [capital, weather] )

    const imgSource = 'http://openweathermap.org/img/wn/' + weather.icon + '@2x.png';
    
    return (
        <div>
            <h3>Weather in {weather.city}</h3>
            <img src={imgSource} alt='condition'/>
            <p><b>Temperature </b>{weather.temperature} Celcius</p>
            <p><b>Wind </b>{weather.windSpeed}</p>
        </div>
    )
}

export default Weather;