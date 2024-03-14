import { uid } from "uid";

export const storedActivities = [
  { id: uid(), name: "Go to a park", goodWeather: true },
  { id: uid(), name: "Ride your bicycle", goodWeather: true },
  { id: uid(), name: "Walk the dog", goodWeather: true },
  { id: uid(), name: "Stay home with family", goodWeather: false },
  { id: uid(), name: "Go to a museum", goodWeather: false },
  { id: uid(), name: "Bake a cake", goodWeather: false },
  { id: uid(), name: "Watch Netflix", goodWeather: false },
];
