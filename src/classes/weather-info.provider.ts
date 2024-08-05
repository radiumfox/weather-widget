import { WeatherInfoDTO } from "./weather-info.dto";

export class WeatherInfoProvider {
  private data: WeatherInfoDTO;

  constructor(data: any) {
    this.data = new WeatherInfoDTO(data);
  }

  public get current() {
    return `${this.data.temp.toFixed()} °C`
  }

  public get min() {
    return `${this.data.tempMin.toFixed()} °C`
  }

  public get max() {
    return `${this.data.tempMax.toFixed()} °C`
  }
  
}