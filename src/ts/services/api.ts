import axios from "axios";
import { IWeatherResponse } from "../models/IWeatherResponse";
import * as dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;

export function getWeather(searchText: string): Promise<IWeatherResponse[]> {
  return axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchText +
        "&appid=" + apiKey + "&lang=sv&units=metric"
    )
    .then((response) => {
      return response.data;
    });
}
