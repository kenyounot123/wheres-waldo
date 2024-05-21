import React from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import "../../assets/stylesheets/applications.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../routes/Home/Home";
import Game from "../routes/Game/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/play",
    element: <Game />,
  },
]);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={"app"} data-theme={theme}>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
      <RouterProvider router={router} />
    </div>
  );
};

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<App />);
});
