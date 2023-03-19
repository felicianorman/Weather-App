import axios from "axios";
import { IWeatherResponse } from "../models/IWeatherResponse";
// import { ILocation } from "../models/ILocation";

export function getWeather(searchText: HTMLInputElement): Promise<IWeatherResponse[]> {
  return axios
    .get(
      "http://api.weatherapi.com/v1/current.json?key=4da078cc9068479c9ef140703231903&q=" +
        searchText +
        "&lang=sv"
    )
    .then((response) => {
      return response.data;
    });
}
