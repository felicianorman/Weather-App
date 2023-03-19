import { ICurrent } from "./ICurrent";
import { ILocation } from "./ILocation";

export interface IWeatherResponse {
    current: ICurrent[];
    location: ILocation[];
}