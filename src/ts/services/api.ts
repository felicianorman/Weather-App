import axios from "axios";
import { IWeatherResponse } from "../models/IWeatherResponse";
import * as dotenv from "dotenv";
dotenv.config();

export function getWeather(searchText: string): Promise<IWeatherResponse[]> {
  return axios
    .get(
      "http://api.weatherstack.com/current?access_key=63f5e451d49e4daf866fe1cc09b89186&query=" +
        searchText
    )
    .then((response) => {
      return response.data;
    });
}

