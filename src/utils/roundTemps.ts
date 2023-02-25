import { Condition } from "types";

export const roundNumbers = (data: Condition) => ({
  ...data,
  temp: Math.round(data.temp),
  tempmin: Math.round(data.tempmin),
  tempmax: Math.round(data.tempmax),
  feelslike: Math.round(data.feelslike),
  pressure: Math.round(data.pressure),
  visibility: Math.round(data.visibility),
  humidity: Math.round(data.humidity),
  hours: data.hours ? data.hours.map(roundNumbers) : undefined,
});
