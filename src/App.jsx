import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";

function App() {
  return (
    <div className="container-fluid d-flex flex-column p-0 wrapper">
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
