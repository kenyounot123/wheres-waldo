import React from "react";
import { createRoot } from "react-dom/client";
import "../../assets/stylesheets/application.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../routes/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<RouterProvider router={router} />);
});
