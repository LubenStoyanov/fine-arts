import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import Literature from "./routes/literature";
import Music from "./routes/music";
import Art from "./routes/art";
import CMSContextProvider from "./useContetful";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "literature",
    element: <Literature />,
  },
  {
    path: "music",
    element: <Music />,
  },
  {
    path: "art",
    element: <Art />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CMSContextProvider>
      <RouterProvider router={router} />
    </CMSContextProvider>
  </React.StrictMode>
);
