import { IWeatherProps } from "../../types"
import rainPng from "../../assets/raindrop.png"
import windPng from "../../assets/wind.png"
import React from "react"

const WeatherBlock: React.FC<IWeatherProps> = ({ time, icon, tempC, precip, city, country, humidity, windSpeed }) => {
  return (
    <div className={`${time === 1 ? "weatherBlock-day" : "weatherBlock-night"}`}>
    <div className="weatherBlock__tempBlock">

      <div className="tempBlock__topBlock">
        <div>
          <img className="topBlock--img" src={icon} alt="img" />
        </div>
        <div className="topBlock__gradeBlock">
          <p className="gradeBlock--grade">{tempC}°C</p>
          <p className="gradeBlock--subtitle">{precip}</p>
        </div>
      </div>

      <div className="tempBlock__fromWhere">
        <p className="fromWhere--city">{city}</p>
        <p className="fromWhere--country">{country}</p>
      </div>

      <div className="tempBlock__precips">
        <div className="precips__humidityBlock">
          <img className="humidityBlock--img" src={rainPng} alt="img" />
          <p className="humidityBlock--humidity">{humidity}% humidity</p>
        </div>
        <div className="precips__windSpeedBlock">
          <img className="windSpeedBlock--img" src={windPng} alt="img" />
          <p className="windSpeedBlock--windSpeed">{windSpeed} km/h</p>
        </div>
      </div>

    </div>
  </div>
  )
}

export default React.memo(WeatherBlock);