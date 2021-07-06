import React from "react";
import "./App.css"
import Dropdown from "./Dropdown";

const items = ["Profile", "Password", "Pro", "Help", "Logout", "Details"];

function App() {
  return (
    <div className="container" style={{position:"relative"}}>
      <h1
        style={{
          textAlign: "center",
        }}
      >
       
      </h1>
      <Dropdown title="Select " items={items} />{" "}
    </div>
  );
}

export default App;
