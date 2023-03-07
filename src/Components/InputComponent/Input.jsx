import React from "react";
import "../InputComponent/Input.scss";
import Button, { Footerbtn } from "../ButtonComponents/Button";

export default function Input({ type, placeholder, required }) {
  return (
    <input
      required={required}
      type={type}
      className="inputcomponent"
      placeholder={placeholder}
    />
  );
}

export function Textarea({ placeholder }) {
  return (
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      className="textareacomponent"
      placeholder={placeholder}></textarea>
  );
}

export function SelectInput({ title, options }) {
  return (
    <select className="selectcomponent">
      <option className="selected">{title}</option>
      {options &&
        options.map(({ id, value, option }) => (
          <option value={value} key={id}>
            {option}
          </option>
        ))}
    </select>
  );
}

export function GroupInputs({
  inputtype,
  btntype,
  btnonclick,
  btntitle,
  inputplaceholder,
  required,
}) {
  return (
    <form>
      <div className="inputgroup_container d-inline-flex">
        <input
          type={inputtype}
          className="inputcontainer"
          placeholder={inputplaceholder}
          required={required}
        />
        <Footerbtn title={btntitle} type={btntype} onclick={btnonclick} />
      </div>
    </form>
  );
}
