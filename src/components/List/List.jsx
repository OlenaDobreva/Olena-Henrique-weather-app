export default function List({ activities }) {
  return (
    <ul>
      {activities.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
