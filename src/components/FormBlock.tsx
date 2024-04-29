import React, { ChangeEvent, FormEvent } from "react";
import { useGetWeatherMutation } from "../redux/getWeather/api"
import WeatherBlock from "./Pages/WeatherBlock";
import SearchBlock from "./Pages/SearchBlock";

function FormBlock() {

  let defaultValue = "";
  const [value, setValue] = React.useState(defaultValue);
  const [getWeather, {data, isLoading}] = useGetWeatherMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getWeather(value).then(() => setValue(defaultValue));
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <>
      <div className="formBlock">
        <form className="formBlock--form" onSubmit={handleSubmit}>
          <input
            className="formBlock--input"
            type="text"
            placeholder="Please, enter city."
            autoComplete="off"
            spellCheck="false"
            required
            value={value}
            onChange={onChange}
          />

          <button className="formBlock--btn" type="submit">
            <svg className="formBlock--img w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </form>
      </div>
      
      {data ? 
      <WeatherBlock 
        time={data.current.is_day}
        icon={data.current.condition.icon}
        temp_c={data.current.temp_c}
        text={data.current.condition.text}
        city={data.location.name}
        country={data.location.country}
        humidity={data.current.humidity}
        windSpeed={data.current.wind_kph}
      /> : 
      <SearchBlock />}
    </>
  )
}

export default FormBlock