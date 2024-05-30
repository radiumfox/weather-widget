const WeatherStyles = {
  Clear: {
    background: '',
    icon: '',
    bgImage: ''
  },
  Clouds: {},
  Rain: {},
  Snow: {},
  Drizzle: {},
  Thunderstorm: {},
  Mist: {},
  Smoke: {},
  Haze: {},
  Dust: {},
  Fog: {},
  Sand: {},
  Ash: {},
  Squall: {},
  Tornado: {},
  Unknown: {}
}

interface WeatherDataItem {
  description: string,
  main: string,
  icon: string,
  id: number,
}

export class WeatherInfoDTO {
  temp: number;
  tempMax: number;
  tempMin: number;
  weather: WeatherDataItem[];

  constructor(data:any) {
    this.temp = data.main.temp;
    this.tempMax = data.main.temp_max;
    this.tempMin = data.main.temp_min;
    this.weather = data.weather;
  }

  // get currentWeatherGroup() {
  //   if(this.weather.length) {
  //     return WEATHER_GROUPS[this.weather[0].main];
  //   }
  //   return WEATHER_GROUPS.Unknown;
  // } 
}