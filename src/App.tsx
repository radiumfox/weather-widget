import './styles/App.scss';
import Widget from './components/Widget';
import { useState } from 'react';
import { WeatherInfoProvider } from './classes/weather-info.provider';

function App() {
  const apiId = '48977a45c2973560498855adee8a53d7';
 
  let [weatherInfo, setWeatherInfo] = useState({});
  let [isLoaded, setIsLoaded] = useState(false);

  let [cityName, setCityName] = useState('');
  
  const getWeatherInfo = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiId}`;
    setIsLoaded(false);
    
    fetch(url, {method: "GET"})
      .then(data => data.json())
      .then(data => {
        console.log(data)
        const $WeatherInfoProvider = new WeatherInfoProvider(data);
        setWeatherInfo($WeatherInfoProvider);
        setIsLoaded(true);
      })
      .then(()=> {
        console.log(weatherInfo);
      })
      .catch((e)=> {
        console.log(e)
      });
  }

  return (
    <div className='App'>
      <input value={cityName} onChange={e => setCityName(e.target.value)}/>
      <button onClick={()=> getWeatherInfo()}>Find</button>
      {
        isLoaded ? <Widget info={weatherInfo}/> : null
      }
      
    </div>
  );
}

export default App;
