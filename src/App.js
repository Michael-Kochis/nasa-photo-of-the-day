import React from "react";
import "./App.css";
import { NasaAPI } from './database/nasaapi'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaAPI></NasaAPI>
    </div>
  );
}

export default App;
