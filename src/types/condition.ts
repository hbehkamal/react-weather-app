import IHour from "./hour";

export default interface Condition {
  conditions: string;
  datetime: string;
  feelslike: number;
  humidity: number;
  icon: string;
  pressure: number;
  snow: number;
  snowdepth: number;
  sunrise: string;
  sunset: string;
  temp: number;
  tempmin: number;
  tempmax: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windspeed: number;
  hours: IHour[];
}
