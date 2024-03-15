import "./ListItem.css";
import Button from "../Button/Button";
import { categories } from "../../data/categories";

export default function ListItem({
  id,
  name,
  category,
  onDeleteActivity = null,
}) {
  return (
    <li>
      <div>
        <span className={`category ${categories[category - 1].name}`}>
          {categories[category - 1].name}
        </span>
        {name}
      </div>
      <Button
        text={"❌"}
        className={"buttonList"}
        activityId={id}
        ariaLabel={`Delete the activity ${name}`}
        onDeleteActivity={onDeleteActivity}
      />
    </li>
  );
}
