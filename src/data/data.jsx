import { uid } from "uid";

export const storedActivities = [
  { id: uid(), name: "Going to a park", goodWeather: true },
  { id: uid(), name: "Riding your bicycle", goodWeather: true },
  { id: uid(), name: "Walking the dog", goodWeather: true },
  { id: uid(), name: "Staying home with family", goodWeather: false },
  { id: uid(), name: "Going to a museum", goodWeather: false },
  { id: uid(), name: "Baking a cake", goodWeather: false },
  { id: uid(), name: "Watching Netflix", goodWeather: false },
];
