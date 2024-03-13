import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const isGoodWeather = true;

  const filteredActivities = activities.filter(
    (activity) => activity.goodWeather === isGoodWeather
  );

  function handleAddActivity(newActivity) {
    setActivities([{ ...newActivity, id: uid() }, ...activities]);
  }

  return (
    <>
      <List activities={filteredActivities} />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
