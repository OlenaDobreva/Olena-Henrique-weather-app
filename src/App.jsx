import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import ListHeading from "./components/ListHeading/ListHeading";
import { uid } from "uid";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const storedActivities = [
    { id: uid(), name: "Going to a park", goodWeather: true },
    { id: uid(), name: "Riding your bicycle", goodWeather: true },
    { id: uid(), name: "Walking the dog", goodWeather: true },
    { id: uid(), name: "Staying home with family", goodWeather: false },
    { id: uid(), name: "Going to a museum", goodWeather: false },
    { id: uid(), name: "Baking a cake", goodWeather: false },
    { id: uid(), name: "Watching Netflix", goodWeather: false },
  ];
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: storedActivities,
  });

  const [weather, setWeather] = useState("");
  // console.log(weather);
  let weatherCondition = "";
  switch (weather.condition) {
    case "🌤️":
      weatherCondition = "partlySunny";
      break;
    case "🌧️":
      weatherCondition = "rainy";
      break;
    case "☀️":
      weatherCondition = "sunny";
      break;
    case "☁️":
      weatherCondition = "cloudy";
      break;
    case "🌨️":
      weatherCondition = "snow";
      break;
    case "⛈️":
      weatherCondition = "stormy";
      break;
  }

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

  return (
    <div className={`main-wrapper ${weatherCondition}`}>
      <ListHeading weather={weather} />
      <List
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity}></Form>
    </div>
  );
}

export default App;
