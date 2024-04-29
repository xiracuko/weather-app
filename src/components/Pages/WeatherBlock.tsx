import { IWeatherProps } from "../../types"

const WeatherBlock: React.FC<IWeatherProps> = ({ time, icon, temp_c, text, city, country, humidity, windSpeed }) => {
  return (
    <div className="weatherBlock">
    <div className="weatherBlock__tempBlock">

      <div className="tempBlock__topBlock">
        <div>
          <img className="topBlock--img" src="" alt="img" />
        </div>
        <div className="topBlock__gradeBlock">
          <p className="gradeBlock--grade">10°C</p>
          <p className="gradeBlock--subtitle">Partly cloudy</p>
        </div>
      </div>

      <div className="tempBlock__fromWhere">
        <p className="fromWhere--city">Toronto</p>
        <p className="fromWhere--country">Canada</p>
      </div>

      <div className="tempBlock__precips">
        <div className="precips__humidityBlock">
          <img className="humidityBlock--img" src="" alt="img" />
          <p className="humidityBlock--humidity">25% humidity</p>
        </div>
        <div className="precips__windSpeedBlock">
          <img className="windSpeedBlock--img" src="" alt="img" />
          <p className="windSpeedBlock--windSpeed">10 km/h</p>
        </div>
      </div>

    </div>
  </div>
  )
}

export default WeatherBlock