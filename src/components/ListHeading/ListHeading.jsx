import "./ListHeading.css";
import cloudyIcon from "../../assets/cloudy.svg";
import partlySunnyIcon from "../../assets/partlySunny.svg";
import rainyIcon from "../../assets/rainy.svg";
import snowIcon from "../../assets/snow.svg";
import stormyIcon from "../../assets/stormy.svg";
import sunnyIcon from "../../assets/sunny.svg";

export default function ListHeading({ weather, weatherCondition }) {
  const icons = {
    cloudy: cloudyIcon,
    partlySunny: partlySunnyIcon,
    rainy: rainyIcon,
    snow: snowIcon,
    stormy: stormyIcon,
    sunny: sunnyIcon,
  };
  return (
    <header className="main">
      <div className="top-header">
        {/* <span className="icon">{weather.condition}</span> */}
        <span className="icon">
          <img src={icons[weatherCondition]} alt={`${weatherCondition} icon`} />
        </span>
        <span className="temperature">
          {weather.temperature} <span className="smaller">°C</span>
        </span>
      </div>
      <h1>
        {weather.isGoodWeather ? (
          <>
            The weather is awesome! <br />
            <span className="smaller">Go outside and...</span>
          </>
        ) : (
          <>
            Bad weather outside! <br />
            <span className="smaller">Here&apos;s what you can do now...</span>
          </>
        )}
      </h1>
    </header>
  );
}
