import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";

function App() {
  return (
    <>
      <Navbar />
      <CourseList />
    </>
  );
}

export default App;
