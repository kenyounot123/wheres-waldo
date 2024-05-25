import React from "react";
import { useState, useEffect } from "react";
export default function NewUserForm({ recordTime }) {
  const [name, setName] = useState("");
  function onChange(e, setName) {
    setName(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault;
  }
  return (
    <div className="form-container">
      <form className={"form"} onSubmit={onSubmit}>
        <h2>
          Congratulations your record time was <span>{recordTime}</span>!
        </h2>
        <label htmlFor="userName">Please enter your name: </label>
        <div>
          <input
            onChange={(event) => onChange(event, setName)}
            type="text"
            id="userName"
            className="input-field"
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
