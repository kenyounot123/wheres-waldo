import React from "react";
import { useState, useEffect } from "react";
import formatTime from "../helper/timeHelper";
import { useNavigate } from "react-router-dom";
export default function NewUserForm({ recordTime }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function onChange(e, setName) {
    setName(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault;
    const record = `${recordTime}`;
    const url = "api/v1/users/create";

    if (name.length === 0) {
      return;
    }

    const body = { name, record };
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/"))
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="form-container">
      <form className={"form"} onSubmit={onSubmit}>
        <h2>
          Congratulations your record time was{" "}
          <span>{formatTime(recordTime)}</span>!
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
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
