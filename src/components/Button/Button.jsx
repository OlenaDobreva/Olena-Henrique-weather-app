export default function Button({ text, onDeleteActivity, activityId = null }) {
  return <button onClick={() => onDeleteActivity(activityId)}>{text}</button>;
}
