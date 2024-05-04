import React, { ChangeEvent, FormEvent, Suspense } from "react";
import { useGetWeatherMutation } from "../redux/getWeather/api"
import { Navigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { LazyWeatherBlock } from "./Lazy/WeatherBlock.lazy";
import { LazySearchBlock } from "./Lazy/SearchBlock.lazy";

function FormBlock() {

  let defaultValue = "";
  const [value, setValue] = React.useState(defaultValue);
  const [debouncedValue] = useDebounce(value, 1000);
  const [getWeather, { data, isLoading, isSuccess }] = useGetWeatherMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getWeather(value).then(() => setValue(defaultValue));
  }

  const handleChange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return (
    <>
      <div className="formBlock">
        {isLoading && <p>Loading...</p>}
        <form className="formBlock--form" onSubmit={handleSubmit}>
          <input
            className="formBlock--input"
            type="text"
            placeholder="Please, enter city."
            autoComplete="off"
            spellCheck="false"
            required
            value={value}
            onChange={handleChange}
          />

          <button className="formBlock--btn" type="submit">
            <svg className="formBlock--img w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </form>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        {isSuccess ?
          <>
            <Navigate to="/weather" />
            <LazyWeatherBlock
              time={data!.current.is_day}
              icon={data!.current.condition.icon}
              tempC={data!.current.temp_c}
              precip={data!.current.condition.text}
              city={data!.location.name}
              country={data!.location.country}
              humidity={data!.current.humidity}
              windSpeed={data!.current.wind_kph}
            />
          </> :
          <>
            <Navigate to="/" />
            <LazySearchBlock />
          </>}
      </Suspense>
    </>
  )
}

export default FormBlock