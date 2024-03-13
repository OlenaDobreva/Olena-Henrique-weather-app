import ListItem from "../ListItem/ListItem";

export default function List({ activities, onDeleteActivity }) {
  return (
    <ul>
      {activities.map(({ id, name }) => (
        <ListItem
          key={id}
          id={id}
          name={name}
          onDeleteActivity={onDeleteActivity}
        />
      ))}
    </ul>
  );
}
