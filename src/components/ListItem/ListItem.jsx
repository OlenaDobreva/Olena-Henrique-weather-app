import Button from "../Button/Button";

export default function ListItem({ id, name, onDeleteActivity }) {
  return (
    <li>
      {name}{" "}
      <Button text={"❌"} activityId={id} onDeleteActivity={onDeleteActivity} />
    </li>
  );
}
