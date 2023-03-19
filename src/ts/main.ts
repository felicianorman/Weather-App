import { ILocation } from "./models/ILocation";
import { IWeatherResponse } from "./models/IWeatherResponse";
import { getWeather } from "./services/api";

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
      console.log(values[i].location);
      console.log(values[i].current);
      console.log(values[i].current.condition.text);

      let h1 = document.createElement("h1") as HTMLHeadingElement;
      h1.innerHTML = values[i].location.name;

      let h2 = document.createElement("h2") as HTMLHeadingElement;
      h2.innerHTML = `Just nu är det ${values[i].current.temp_c} °C`;

      let h3 = document.createElement("h3") as HTMLHeadingElement;
      h3.innerHTML = values[i].current.condition.text;

      let pTag = document.createElement("p") as HTMLParagraphElement;
      pTag.innerHTML = values[i].location.localtime;

      let img = document.createElement("img") as HTMLImageElement;
      img.src = values[i].current.condition.icon;
      img.alt = "Väder";
      img.classList.add("weather-img");

      div.appendChild(h1);
      div.appendChild(h2);
      div.appendChild(img);
      div.appendChild(h3);
      div.appendChild(pTag);

      weatherWrapper.appendChild(div);
    }
  });
}
