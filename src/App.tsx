import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Map } from "./components/Map";

function App() {
  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
}

export default App;
