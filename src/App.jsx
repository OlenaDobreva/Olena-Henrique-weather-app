import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import ListHeading from "./components/ListHeading/ListHeading";
import { uid } from "uid";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState("");

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
    <>
      <ListHeading weather={weather} />
      <List
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
