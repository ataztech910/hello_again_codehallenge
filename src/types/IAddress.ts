import { ILocation } from "./ILocation";

export interface IAddress {
  street: string;
  city_code: string;
  city: string;
  location: ILocation;
  auto_location: false;
}
