import "./App.css";
import React from "react";
import CurrencyRow from "./CurrencyRow";

function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </div>
  );
}

export default App;
