import './styles/App.scss';
import { useState } from 'react';
import { WeatherInfoProvider } from './classes/weather-info.provider';
import Widget from './components/Widget';

function App() {
  const apiId = '48977a45c2973560498855adee8a53d7';

  let [weatherInfo, setWeatherInfo] = useState({} as WeatherInfoProvider);
  let [isLoaded, setIsLoaded] = useState(false);

  let [cityName, setCityName] = useState('');
  
  const getWeatherInfo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e)

    if(e.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${'london'}&units=metric&appid=${apiId}`;
      setIsLoaded(false);
      
      fetch(url, {method: "GET"})
        .then(data => data.json())
        .then(data => {
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
  }

  const successCallback = (position: any) => {
    console.log(position);
  };
  
  const errorCallback = (error: any) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return (
    <div className='App'>
      <input 
        onKeyDown={e => getWeatherInfo(e as React.KeyboardEvent<HTMLInputElement>)} 
        onInput={e => setCityName((e.target as HTMLInputElement).value)} 
        type="search" 
        value={cityName}/>
      
      {
        isLoaded ? 
        <Widget 
          current={weatherInfo.current}
          location={cityName}
          descr={''}
          date={''}
          min={weatherInfo.min}
          max={weatherInfo.max}
        /> : 
        null
      }
    </div>
  );
}

export default App;
