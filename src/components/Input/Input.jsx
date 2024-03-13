export default function Input({ type, name, labelText }) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input name={name} id={name} type={type} />
    </>
  );
}
