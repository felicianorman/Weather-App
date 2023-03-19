import axios from "axios";
import { IWeatherResponse } from "../models/IWeatherResponse";
// import { ILocation } from "../models/ILocation";

export function getWeather(searchText: string): Promise<IWeatherResponse[]> {
  return axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/current.json?key=4da078cc9068479c9ef140703231903&q=" +
        searchText +
        "&lang=sv"
    )
    .then((response) => {
      return response.data;
    });
}
