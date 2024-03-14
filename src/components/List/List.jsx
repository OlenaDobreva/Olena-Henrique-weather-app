import "./List.css";
import ListItem from "../ListItem/ListItem";

export default function List({ activities, onDeleteActivity }) {
  return (
    <ul>
      {activities.length === 0 ? (
        <li className="empty-activities">There is no activity yet...</li>
      ) : (
        activities.map(({ id, name }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            onDeleteActivity={onDeleteActivity}
          />
        ))
      )}
    </ul>
  );
}
