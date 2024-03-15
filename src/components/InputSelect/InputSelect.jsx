import "./InputSelect.css";

export default function InputSelect({ categories }) {
  return (
    <div>
      <label htmlFor="category">Category</label>
      <select name="category" id="category">
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
