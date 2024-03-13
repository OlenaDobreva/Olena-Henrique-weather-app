import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([{ ...newActivity, id: uid() }, ...activities]);
  }

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
