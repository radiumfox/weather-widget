import styles from './styles/app';
import { useState, useEffect } from 'react';
import { WeatherInfoProvider } from './classes/weather-info.provider';
import Widget from './components/Widget';

function App() {
  const appStyles = styles();
  let [weatherInfo, setWeatherInfo] = useState({} as WeatherInfoProvider);
  let [isLoaded, setIsLoaded] = useState(false);

  let [cityName, setCityName] = useState('');

  useEffect(()=> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${process.env.WEATHER_API_ID}`;
    
    fetch(url, {method: "GET"})
      .then(data => data.json())
      .then(data => {
        const $WeatherInfoProvider = new WeatherInfoProvider(data);
        setWeatherInfo($WeatherInfoProvider);
        setIsLoaded(true)
      })
      .catch((e)=> {
        console.log(e)
      });
  },[])

  return (
    <div className={appStyles.container}>
      {
        isLoaded && 
        <Widget 
          current={weatherInfo.current}
          location={cityName}
          descr={weatherInfo.description}
          date={weatherInfo.currentDate}
          minMax={weatherInfo.minMax}
        />
      }
    </div>
  );
}

export default App;
