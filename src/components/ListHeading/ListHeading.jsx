export default function ListHeading({ weather }) {
  return (
    <header>
      <span>{weather.condition}</span>
      <span>{weather.temperature} °C</span>
      <h1>{`${
        weather.isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"
      }`}</h1>
    </header>
  );
}
