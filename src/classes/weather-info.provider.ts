import { WeatherInfoDTO } from "./weather-info.dto";
import { DateTime } from 'luxon';

export class WeatherInfoProvider {
  private data: WeatherInfoDTO;
  private date: string;
  private dateObj: DateTime;

  constructor(data: any) {
    this.data = new WeatherInfoDTO(data);
    this.date = new Date().toISOString();
    this.dateObj = DateTime.fromISO(this.date);
  }

  public get description() {
    return this.data.description;
  }

  public get currentDate() {
    return `${this.dateObj.weekdayLong}, ${this.dateObj.day} ${this.dateObj.monthLong}`
  }

  public get current() {
    return `${this.data.temp.toFixed()} °C`
  }

  private get min() {
    return `${this.data.tempMin.toFixed()} °C`
  }

  private get max() {
    return `${this.data.tempMax.toFixed()} °C`
  }

  public get minMax() {
    return `${this.min} / ${this.max}`
  }
}