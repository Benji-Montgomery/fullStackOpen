import axios from 'axios'
import { useEffect, useState } from 'react'
//import buttonClick from './components/buttonClick'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [searchName, setSearchName] = useState([])
  let searchCountries = []
  const [buttonState, setButtonState] = useState(false)
  const [buttonObject, setButtonObject] = useState('')
  const [weather, setWeather] = useState([])
  const [weatherLocation, setWeatherLocation] = useState([47,-122])
  const [weatherData, setWeatherdata] = useState ([280, '04D', 0.75])
  const api_key = process.env.REACT_APP_API_KEY
  console.log(api_key)
  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('promise fullfilled')
      setCountries(response.data)
    })
  }, [])
  const tenCountries = (prop) =>{
    let result = prop.map(prop => prop.name.common)
    return(
      result
    )
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
    searchCountries = countries.filter(countries => countries.name.common.toLowerCase().includes(search))
    if(searchCountries.length>10){
      setSearchName('Too many countries, be more specific')
    }else if(searchCountries.length<10){
      setSearchName(tenCountries(searchCountries))
    }else if(searchCountries.length === 1){

    }
  }

 const getWeather = async () => {
  const lat = weatherLocation[0]
  const lon = weatherLocation[1]
   await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
   .then(response => {
    console.log('weather fullfilled')
    setWeather(response.data)
    console.log(Object.values(weather).length)
   })
   console.log(weather)
   setWeatherdata([weather.main.temp, weather.weather[0].icon, weather.wind.speed])
   console.log(weatherData)
 }
 const WeatherApp = () => {
  return (
    <div>
      <h3>current temperature: {weatherData[0]} K</h3>
      <img src={`http://openweathermap.org/img/wn/${weatherData[1]}.png`} alt='weather icon'></img>
      <h3>current wind: {weatherData[2]}</h3>
      yer HAWT
    </div>
  )
 }

 const buttonClickWeather = () => {
  console.log('poop')
  console.log(weather.length)
  console.log(weatherData)
  getWeather()
 }
 

  const buttonClick = (props) => {
    setButtonObject(props)
    setButtonState(true)
  }
  const ButtonCountry = ({ props }) => {
    const language =['engrish']

    setWeatherLocation(props.latlng)
    return(
      <div>
      <h2>{props.name.common}</h2>
      <section>
        <p>Capital: {props.capital[0]}</p>
        <p>Land Area: {props.area}</p>
      </section>
      <section>
        <h3>Languages:</h3>
        <ul>
        {language.length > 0
        ?(Object.values(props.languages)).map(c => <li key={Math.random()}>{c}</li>)
        :'spanglish'
        }
        </ul>
      </section>
      <section>
      </section>
      <img src={props.flags.png} alt='country' />
      </div>
    )
  }
  const countriesToShow = countries.filter(c => c.name.common.toLowerCase().includes(search))
  const Show = () => {
    return (
    <ul>
        {countriesToShow.length > 1 && countriesToShow.length < 11
        ?countriesToShow.map(c => 
        <li key={c.name.common}>{c.name.common} <button onClick={() => buttonClick(c)}>show</button></li>)
        :''
        }
        {countriesToShow.length > 1
        ?<p>Can you be more specific?</p>
        :''
        }
    </ul>
    )}
  const Countries = () =>{
    const language = ['engrish']
    setWeatherLocation(countriesToShow[0].latlng)
    return(
      <div>
      <h2>{countriesToShow[0].name.common}</h2>
      <section>
        <p>Capital: {countriesToShow[0].capital[0]}</p>
        <p>Land Area: {countriesToShow[0].area}</p>
      </section>
      <section>
        <h3>Languages:</h3>
        <ul>
        {language.length > 0
        ?(Object.values(countriesToShow[0].languages)).map(c => <li key={Math.random()}>{c}</li>)
        :'spanglish'
        }
        </ul>
      </section>
      <img src={countriesToShow[0].flags.png} alt='country'/>
      </div>
    )
  }

  return(
    <div>
      <h1>Find Country Information</h1>
      
      <form>
        <input
        value={search}
        onChange={handleSearch}
        />
      </form>
      <button onClick={() => buttonClickWeather()}>Display Weather</button>
      <Show countries={countries} showCountries={searchName} />
      {countriesToShow.length === 1
      ?<Countries />
      :''
      }
      {buttonState === true
      ?<ButtonCountry props={buttonObject} /> 
      :''
      }
      {Object.values(weather).length > 1
      ?<WeatherApp />
      :''}
    </div>
  )
}

export default App
