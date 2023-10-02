import React from "react";
import "./App.css";
import { getAllPokemon } from "./getAllPokemon";
import FirstPokemonsDisplay from "./components/FirstPokemonsDisplay";

function App() {
  return (
    <div className="App">
      <FirstPokemonsDisplay></FirstPokemonsDisplay>
    </div>
  );
}

export default App;
