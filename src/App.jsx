import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Event from "./Pages/Event";
import Feed from "./Pages/Feed";
import Username from "./Pages/Username";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Event />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/username" element={<Username />} />
    </Routes>
  );
}

export default App;
