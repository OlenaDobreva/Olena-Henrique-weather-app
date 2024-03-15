import "./InputSelect.css";

export default function InputSelect({ categories }) {
  return (
    <select name="category" id="category">
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
