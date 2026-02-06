import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Event from "./Pages/Event";
import Feed from "./Pages/Feed";
import Username from "./Pages/Username";
// import Navbar from "./Components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/events",
      element: (
        <>
          <Event />
        </>
      ),
    },
    {
      path: "/feed",
      element: (
        <>
          <Feed />
        </>
      ),
    },
    {
      path: "/username",
      element: (
        <>
          <Username />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
