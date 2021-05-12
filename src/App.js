import React from "react";
import "./App.css";
import { NasaAPI } from './database/nasaapi'

function App() {
  return (
    <div className="App">
      <NasaAPI></NasaAPI>
    </div>
  );
}

export default App;
