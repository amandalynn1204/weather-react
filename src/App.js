import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather cityDefault="Cleveland" />
        <Footer />
      </div>
    </div>
  );
}
