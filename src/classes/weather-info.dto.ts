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
  description: string;

  constructor(data:any) {
    this.temp = data.main.temp;
    this.tempMax = data.main.temp_max;
    this.tempMin = data.main.temp_min;
    this.weather = data.weather;
    this.description = this.weather[0].description;
  }
}