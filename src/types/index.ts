export interface IWeatherProps {
  time: number;
  icon: string;
  tempC: number;
  precip: string;
  city: string;
  country: string;
  humidity: string;
  windSpeed: string;
}

type ConditionTypes = {
  icon: string;
  text: string;
};

type CurrentTypes = {
  is_day: number;
  condition: ConditionTypes;
  temp_c: number;
  humidity: string;
  wind_kph: string;
};

type LocationTypes = {
  country: string;
  name: string;
};

export interface IParamsObject {
  current: CurrentTypes;
  location: LocationTypes;
}
