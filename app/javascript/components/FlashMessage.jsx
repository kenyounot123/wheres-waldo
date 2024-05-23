import React from "react";

export default function FlashMessage({ type, message }) {
  let className = "flash-msg";

  switch (type) {
    case "success":
      className += " success";
      break;
    case "failure":
      className += " failure";
      break;
    default:
      className += " info";
      break;
  }

  return <div className={className}>{message}</div>;
}
