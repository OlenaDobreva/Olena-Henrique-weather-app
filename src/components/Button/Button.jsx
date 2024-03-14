import "./Button.css";

export default function Button({
  text,
  className = null,
  onDeleteActivity = null,
  activityId = null,
}) {
  return (
    <button
      className={className && className}
      onClick={onDeleteActivity ? () => onDeleteActivity(activityId) : null}
    >
      {text}
    </button>
  );
}
