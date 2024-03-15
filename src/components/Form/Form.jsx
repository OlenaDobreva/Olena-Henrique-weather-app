import "./Form.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import InputSelect from "../InputSelect/InputSelect";

export default function Form({ onAddActivity, categories }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formObj = Object.fromEntries(data);
    formObj.goodWeather = event.target.goodWeather.checked;

    if (formObj.name !== "") {
      onAddActivity(formObj);
      event.target.reset();
      event.target.firstChild.focus();
    }
  }

  return (
    <div className="form-wrapper">
      <h2>Add new Activity</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type={"text"}
            name={"name"}
            labelText={"Name"}
            placeholderText={"Write your activity here..."}
          />
          <InputSelect categories={categories} />
        </div>
        <Input
          type={"checkbox"}
          name={"goodWeather"}
          labelText={"Good-weather activity"}
        />
        <Button
          text="Submit"
          className={"buttonSubmit"}
          ariaLabel="Add a new activity"
        />
      </form>
    </div>
  );
}
