import React from "react";
import "./App.css";
import { getAllPokemon } from "./getAllPokemon";
import FirstPokemonsDisplay from "./components/FirstPokemonsDisplay";
import FormPokemon from "./components/FormPokemon";

function App() {
  const [inputPokemon, setInputPokemon] = React.useState(null);

  const handleInputPokemon = (e) => {
    e.preventDefault();
    setInputPokemon(() => e.target.value);
    console.log("inputPokemon", inputPokemon);
  };

  return (
    <div className="App">
      <FirstPokemonsDisplay></FirstPokemonsDisplay>
      <FormPokemon
        inputPokemon={inputPokemon}
        handleInputPokemon={handleInputPokemon}
      ></FormPokemon>
    </div>
  );
}

export default App;
