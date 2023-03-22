import { ILocation } from "./models/ILocation";
import { IWeatherResponse } from "./models/IWeatherResponse";
import { getWeather } from "./services/api";
import axios from "axios";

let hej: HTMLInputElement = document.getElementById(
  "searchWeather"
) as HTMLInputElement;

let div = document.createElement("div") as HTMLDivElement;
div.classList.add("weather-div");

(document.getElementById("searchForm") as HTMLFormElement).addEventListener(
  "submit",
  async (e: SubmitEvent) => {
    e.preventDefault();

    div.innerHTML = "";

    let searchText: string = (
      document.getElementById("searchWeather") as HTMLInputElement
    ).value;

    let weather: IWeatherResponse[] = await getWeather(searchText);

    createHTML(weather);
    hej.value = "";
  }
);

async function createHTML(weather) {
  let weatherWrapper = document.getElementById("container") as HTMLDivElement;

  Promise.all([weather]).then(function (values) {
    console.log(values);

    for (let i = 0; i < values.length; i++) {
      console.log(values[i].main);

      let name = document.createElement("h1") as HTMLHeadingElement;
      name.innerHTML = values[i].name;

      let currentTemp = document.createElement("h2") as HTMLHeadingElement;
      currentTemp.innerHTML = `Just nu är det ${values[i].main.temp} °C och ${values[i].weather[0].description}`;
      currentTemp.classList.add("temp")

      let tempFeelsLike = document.createElement("h3") as HTMLHeadingElement;
      tempFeelsLike.innerHTML = `Men det känns som ${values[i].main.feels_like} °C`
      tempFeelsLike.classList.add("tempFeelsLike")

      let weatherIcon = document.createElement("img") as HTMLImageElement;
      weatherIcon.src = `https://openweathermap.org/img/w/${values[i].weather[0].icon}.png`;
      weatherIcon.alt = "Ikon av väder";
      weatherIcon.classList.add("weather-img");

      div.appendChild(name);
      div.appendChild(currentTemp);
      div.appendChild(weatherIcon);
      div.appendChild(tempFeelsLike)


      weatherWrapper.appendChild(div);
    }
  });
}
