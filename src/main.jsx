import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Literature, { loader as literatureLoader } from "./routes/Literature";
import Music, { loader as musicLoader } from "./routes/Music";
import Art, { loader as artLoader } from "./routes/Art";
import Works, { loader as worksLoader } from "./routes/Works";
import Hero, { loader as heroLoader } from "./routes/Hero";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hero />,
        loader: heroLoader,
      },
      {
        path: "literature",
        element: <Literature />,
        loader: literatureLoader,
      },
      {
        path: "music",
        element: <Music />,
        loader: musicLoader,
      },
      {
        path: "art",
        element: <Art />,
        loader: artLoader,
      },
      {
        path: "works",
        element: <Works />,
        loader: worksLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
