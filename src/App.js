import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <div>
      <Routes>
        {/* more pages to be added here later */}
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}
