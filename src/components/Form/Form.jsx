import "./Form.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formObj = Object.fromEntries(data);
    formObj.goodWeather = event.target.goodWeather.checked;
    onAddActivity(formObj);
    event.target.reset();
    event.target.firstChild.focus();
  }

  return (
    <div className="form-wrapper">
      <h2>Add new Activity</h2>
      <form onSubmit={handleSubmit}>
        <Input type={"text"} name={"name"} labelText={"Name"} />
        <Input
          type={"checkbox"}
          name={"goodWeather"}
          labelText={"Good-weather activity"}
        />
        <Button text="Submit" className={"buttonSubmit"} />
      </form>
    </div>
  );
}
