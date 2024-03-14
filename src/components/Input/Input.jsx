import "./Input.css";

export default function Input({ type, name, labelText, placeholderText = "" }) {
  return (
    <>
      <label htmlFor={name}>
        {labelText}
        <input
          placeholder={placeholderText}
          name={name}
          id={name}
          type={type}
        />
      </label>
    </>
  );
}
