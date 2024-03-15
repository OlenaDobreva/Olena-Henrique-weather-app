import { uid } from "uid";

export const storedActivities = [
  {
    id: uid(),
    category: 4,
    name: "Go to a park with friends",
    goodWeather: true,
  },
  { id: uid(), category: 1, name: "Ride your bicycle", goodWeather: true },
  { id: uid(), category: 5, name: "Walk the dog", goodWeather: true },
  { id: uid(), category: 5, name: "Stay home with family", goodWeather: false },
  { id: uid(), category: 6, name: "Go to a museum", goodWeather: false },
  { id: uid(), category: 2, name: "Bake a cake", goodWeather: false },
  { id: uid(), category: 6, name: "Watch Netflix", goodWeather: false },
];
