import "./ListHeading.css";

export default function ListHeading({ weather }) {
  return (
    <header className="main">
      <div className="top-header">
        <span className="icon">{weather.condition}</span>
        <span className="temperature">{weather.temperature} °C</span>
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
