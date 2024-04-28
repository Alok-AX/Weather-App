import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
const Temp = () => {

   const [city, setCity] =useState(null); 
   const [wind, setWind] =useState(null); 
   const [search , setSearch] = useState("Bhubaneswar");
   useEffect(()=>{
    const fetchApi = async ()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a68e545be404623b78cb6c52dfa223ad`
       const response = await fetch(url);
       const respJson = await response.json();
       setCity(respJson.main);
       setWind(respJson.wind);
       console.log(respJson)
    }
    fetchApi()
   },[search])
  return (
  < div className='tempreture_box'>
     <div className='box'>
        <div className='input_data'>
            <input value={search} type='search' onChange={(event)=>{setSearch(event.target.value)}}/>
        </div>
    </div>

    {!city 
    ? 
    (<p className='datanot'>No data Found</p>)
    :
    (
       <div className='info'>
          <h1><FaLocationDot />Location : <span>{search}</span></h1>
          <h3>Temperature : {city.temp}</h3>
          <h3>Humidity : {city.humidity}</h3>
          <h4>Min : <span>{city.temp_min}</span> Cel ||  Max :<span>{city.temp_max}</span>cel</h4>
          {wind && (
              <div>
                  <h4>Wind Speed: {wind.speed} m/s</h4>
                  <h4>Wind Direction: {wind.deg}°</h4>
              </div>
          )}
      </div>
    )}
  </div>
  )
}

export default Temp