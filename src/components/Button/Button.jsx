export default function Button({
  text,
  onDeleteActivity = null,
  activityId = null,
}) {
  return (
    <button
      onClick={onDeleteActivity ? () => onDeleteActivity(activityId) : null}
    >
      {text}
    </button>
  );
}
