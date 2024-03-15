import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import ListHeading from "./components/ListHeading/ListHeading";
import { uid } from "uid";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { storedActivities } from "./data/data";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: storedActivities,
  });

  const [weather, setWeather] = useState("");

  const emojiToCondition = {
    "🌤️": "partlySunny",
    "🌧️": "rainy",
    "☀️": "sunny",
    "☁️": "cloudy",
    "🌨️": "snow",
    "⛈️": "stormy",
  };
  let weatherCondition = emojiToCondition[weather.condition] || "";

  async function fetchWeather() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const filteredActivities = activities.filter(
    (activity) => activity.goodWeather === weather.isGoodWeather
  );

  function handleAddActivity(newActivity) {
    setActivities([{ ...newActivity, id: uid() }, ...activities]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  if (weather === "") {
    return (
      <div className="loading">
        <h1>Loading weather conditions...</h1>
      </div>
    );
  }

  return (
    <div className={`main-wrapper ${weatherCondition}`}>
      <div className="content-wrapper">
        <ListHeading weather={weather} weatherCondition={weatherCondition} />
        <List
          activities={filteredActivities}
          onDeleteActivity={handleDeleteActivity}
        />
        <Form onAddActivity={handleAddActivity}></Form>
      </div>
    </div>
  );
}

export default App;
