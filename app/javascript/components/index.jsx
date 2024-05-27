import React from "react";
import Icon from "@mdi/react";
import { mdiWeatherSunny, mdiMoonWaningCrescent } from "@mdi/js";
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
    <div className="app" data-theme={theme}>
      <div className="flex">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider">
            <Icon className="light-icon" path={mdiWeatherSunny} size={1} />
            <Icon className="dark-icon" path={mdiMoonWaningCrescent} size={1} />
          </span>
        </label>
      </div>
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
