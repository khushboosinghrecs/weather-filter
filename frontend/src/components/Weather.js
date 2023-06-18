import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
// import '../App.css';
export const Weather = () => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [temperature, setTemperature] = useState([]);
  const [relative_humidity, setRelativeHumidity] = useState([]);
  const [wind_speed, setWindSpeed] = useState([]);
  const [temperatureval, setTemperatureVal] = useState('');
  const [relative_humidityval, setRelativeHumidityVal] = useState('');
  const [wind_speedval, setWindSpeedVal] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:4000/api/')
    .then(res => {
      setIsLoading(false);
      setOptions(res.data.weather.hourly.time)
      setTemperature(res.data.weather.hourly.temperature_2m);
      setRelativeHumidity(res.data.weather.hourly.relativehumidity_2m);
      setWindSpeed(res.data.weather.hourly.windspeed_10m);
    })
    .catch(err => {
      console.log('Error:', err.message);
    });
  }, [])
  useEffect(()=>{
    if(index>0){
      console.log(index);
      setTemperatureVal(temperature[index-1])
      setWindSpeedVal(wind_speed[index-1]);
      setRelativeHumidityVal(relative_humidity[index-1]);
      }
  }, [index])
  const handleChange = (e)=>{
    setIndex(e.target.selectedIndex);
    console.log(index);
  }

 { return isLoading? <p>Loading...</p> :(
    <div className='weather'>
      <div className='weather-wrap'>
        <h1 className='sel_text'>Select Time for knowing temperature, relative humidity & wind speed of Berlin</h1>
        <select onChange={(e) => {handleChange(e)}}>
          <option>Please choose one option</option>
          {options.map((option, index) => {
            return <option key={index} >{option} </option>
          })}
        </select>
        {temperatureval && relative_humidityval && wind_speedval ? 
        <div className='sel_text'>
          <p><h3>The Berlin temperature is {temperatureval}°C</h3></p>
          <p><h3>The Berlin's humidity is {relative_humidityval}%</h3></p>
          <p><h3>The Berlin wind_speed is {wind_speedval}km/h</h3></p>
        </div>
        : ''}
      </div>
    </div>
  )}
}
