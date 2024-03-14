import "./Button.css";

export default function Button({
  text,
  className = null,
  onDeleteActivity = null,
  activityId = null,
  ariaLabel = "",
}) {
  return (
    <button
      className={className && className}
      onClick={onDeleteActivity ? () => onDeleteActivity(activityId) : null}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}
