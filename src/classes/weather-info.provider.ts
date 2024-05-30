import { WeatherInfoDTO } from "./weather-info.dto";

export class WeatherInfoProvider {
  data: WeatherInfoDTO;

  constructor(data: any) {
    this.data = new WeatherInfoDTO(data);
  }

  get temp() {
    return `${this.data.temp.toFixed()} °C`
  }
  
}