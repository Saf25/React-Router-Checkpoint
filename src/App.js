import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import Description from "./Component/Description";
import Home from "./Home";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/movies/:movieName" element={<Description />}></Route>
      </Routes>
    </div>
  );
}
export default App;
