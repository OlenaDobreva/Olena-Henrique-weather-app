import Button from "../Button/Button";

export default function ListItem({ id, name, onDeleteActivity = null }) {
  return (
    <li>
      {name}
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
