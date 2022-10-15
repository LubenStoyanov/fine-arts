import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/Root";
import "./index.css";
import Literature, { loader as literatureLoader } from "./routes/Literature";
import Music from "./routes/Music";
import Art from "./routes/Art";
import CMSContextProvider from "./data/cmsContext";
import Works, { loader as worksLoader } from "./routes/Works";
import Hero, { loader as heroLoader } from "./routes/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
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
      },
      {
        path: "art",
        element: <Art />,
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
    <CMSContextProvider>
      <RouterProvider router={router} />
    </CMSContextProvider>
  </React.StrictMode>
);
